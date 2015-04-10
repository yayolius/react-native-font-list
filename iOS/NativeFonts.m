//
//  NativeFonts.m
//  reactNativeFontList
//
//  Created by Claudio Castro Seguel on 10-04-15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "NativeFonts.h"
@import UIKit;

@implementation NativeFonts

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock)callback)
{
   NSArray *families = [UIFont familyNames];
   NSString *fontList = [families componentsJoinedByString:@","];
    
   callback(@[fontList]);
}

@end