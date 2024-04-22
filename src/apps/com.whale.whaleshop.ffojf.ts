import {defineGkdApp} from '@gkd-kit/define';

export default defineGkdApp({
    id: 'com.whale.whaleshop.ffojf',
    name: '佩奇影视',
    groups: [
        {
            key: 0,
            name: '全屏广告',
            rules: [
                {
                    key: 0,
                    name: '携程广告',
                    activityIds:
                        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    matches: 'TextView[text="反馈"] - View > Image',
                },
                {
                    key: 1,
                    name: '京东广告',
                    matches: 'FrameLayout[id="android:id/content"] >4 FrameLayout + FrameLayout > ImageView',
                },
                {
                    key: 2,
                    name: '1688广告',
                    activityIds:
                        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    matches: 'TextView[text="反馈"] -2 View > Image',
                },
                {
                    key: 3,
                    name: '唯品会广告',
                    activityIds:
                        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    matches: 'TextView[text="反馈"] -4 View > Image',
                },
                {
                    key: 4,
                    name: '暂停广告1',
                    activityIds: 'com.whale.whaleshop.ffojf.MainActivity',
                    matches: 'FrameLayout[id="android:id/content"] >6 FrameLayout > ImageView',
                },
                {
                    key: 5,
                    name: '暂停广告2',
                    quickFind: true,
                    activityIds:
                        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    matches: 'TextView[text="| 跳过"]',
                },
            ],
        },
    ],
});
