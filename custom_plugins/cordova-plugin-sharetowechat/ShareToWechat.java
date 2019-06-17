package org.apache.cordova.shareToWechat;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import com.tencent.mm.opensdk.modelmsg.WXWebpageObject;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.net.URL;

public class ShareToWechat extends CordovaPlugin{
    private static final int THUMB_SIZE = 150;

    private static final String APP_ID = "wx17fa470c77da3077";

    private IWXAPI api;

    private String title;
    private String description;
    private String pageUrl;
    private String imageUrl;
    private String userAction;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        JSONObject options = args.getJSONObject(0);

        title = options.getString("title");
        description = options.getString("description");
        pageUrl = options.getString("pageUrl");
        imageUrl = options.getString("imageUrl");
        userAction = action;

        Log.i("title", title);
        Log.i("action", action);

        api = WXAPIFactory.createWXAPI(cordova.getActivity(), APP_ID, true);
        api.registerApp(APP_ID);

        api = WXAPIFactory.createWXAPI(cordova.getActivity(), APP_ID, true);
        api.registerApp(APP_ID);

        new Thread(new Runnable() {
            @Override
            public void run() {
                try{
                    // String path = "http://www.wangluodaikuankouzi.com/app/packages/weixin_logo.jpg";

                    WXWebpageObject webpage = new WXWebpageObject();
                    webpage.webpageUrl = pageUrl;
                    WXMediaMessage msg = new WXMediaMessage(webpage);
                    msg.title = title;
                    msg.description = description;

                    //这种方式直接取得是本地的
//                Bitmap bmp = BitmapFactory.decodeResource(getResources(), R.drawable.weixin_logo);
                    Bitmap bmp = BitmapFactory.decodeStream(new URL(imageUrl).openStream());

                    Bitmap thumbBmp = Bitmap.createScaledBitmap(bmp, THUMB_SIZE, THUMB_SIZE, true);
                    bmp.recycle();
                    msg.thumbData = bmpToByteArray(thumbBmp, true);

                    SendMessageToWX.Req req = new SendMessageToWX.Req();
                    req.transaction = String.valueOf(System.currentTimeMillis());
                    req.message = msg;

                    req.scene = userAction.equals("shareToWxSession") ? SendMessageToWX.Req.WXSceneSession: SendMessageToWX.Req.WXSceneTimeline;

                    api.sendReq(req);
                }catch (Exception e) {

                    e.printStackTrace();
                }
            }
        }).start();
        return false;
    }

    public static byte[] bmpToByteArray(final Bitmap bmp, final boolean needRecycle) {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        bmp.compress(Bitmap.CompressFormat.JPEG, 100, output);
        if (needRecycle) {
            bmp.recycle();
        }

        byte[] result = output.toByteArray();
        try {
            output.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;

    }
}