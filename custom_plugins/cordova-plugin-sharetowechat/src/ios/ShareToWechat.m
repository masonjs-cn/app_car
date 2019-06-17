//
//  ShareToWechat.m
//  HelloCordova
//
//  Created by mzr on 2018/8/8.
//

#import "ShareToWechat.h"
#import "WXApi.h"

@implementation ShareToWechat

-(void)pluginInitialize{
    
    [WXApi registerApp:@"wx17fa470c77da3077"];
}

-(void)shareToWxSession:(CDVInvokedUrlCommand *)command{
    
    [self share2Wx:@"session" withStr:command];
    
}

-(void)shareToWxTimeline:(CDVInvokedUrlCommand *)command{
    
    
    [self share2Wx:@"timeline" withStr:command];
}

-(void)share2Wx:(NSString *)type withStr:(CDVInvokedUrlCommand *)arg{
    
    NSString *str = [arg.arguments objectAtIndex:0];
    
    NSData *jsonData = [str dataUsingEncoding:NSUTF8StringEncoding];
    
    NSError *err;
    NSDictionary *params = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&err];
    
    if(err) {
        
        NSLog(@"json解析失败:%@", err);
        return ;
    }
    
    //获取参数
    NSString *title = params[@"title"];
    NSString *description = params[@"description"];
    NSString *pageUrl = params[@"pageUrl"];
    NSString *imageUrl = params[@"imageUrl"];
    
    
    
    WXMediaMessage *message = [WXMediaMessage message];
    message.title = title;
    message.description = description;
    NSData *data = [NSData dataWithContentsOfURL:[NSURL URLWithString:imageUrl]];
    [message setThumbData:data];
    
    WXWebpageObject *webPageObject = [WXWebpageObject object];
    webPageObject.webpageUrl = pageUrl;
    message.mediaObject = webPageObject;
    
    SendMessageToWXReq *req = [[SendMessageToWXReq alloc]init];
    req.bText = NO;
    req.message = message;
    
    req.scene = [type isEqualToString:@"timeline"] ? WXSceneTimeline : WXSceneSession;
    
    [WXApi sendReq:req];
}
@end







