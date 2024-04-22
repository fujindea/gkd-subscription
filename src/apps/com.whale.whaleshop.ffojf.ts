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
          matches: ['Image[_id=70]'],
        },
        {
          key: 1,
          name: '京东广告',
          matches: ['ImageView[_id=23]'],
        },
        {
          key: 2,
          name: '1688广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: ['Image[_id=38]'],
        },
        {
          key: 3,
          name: '唯品会广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: ['Image[_id=37]'],
        },
        {
          key: 4,
          name: '暂停广告1',
          activityIds: 'com.whale.whaleshop.ffojf.MainActivity',
          matches: ['ImageView[_id=10]'],
        },
        {
          key: 5,
          name: '暂停广告2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: ['TextView[_id=46][text="| 跳过"]'],
        },
      ],
    },
  ],
});
