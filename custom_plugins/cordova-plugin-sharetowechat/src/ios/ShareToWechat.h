//
//  ShareToWechat.h
//  HelloCordova
//
//  Created by mzr on 2018/8/8.
//

#import <Cordova/CDVPlugin.h>

@interface ShareToWechat : CDVPlugin
-(void)shareToWxSession:(CDVInvokedUrlCommand *)command;
-(void)shareToWxTimeline:(CDVInvokedUrlCommand *)command;
-(void)share2Wx:(NSString *)type withStr:(CDVInvokedUrlCommand *)arg;
@end
