/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa5850c3794089ca0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c7993527efa867628bac2045884dc931',
  
  PROVINCE: '广东',
  CITY: '深圳',

TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'f075d994abc5a568185b759485bd2a44',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
    },
 
  USERS: [
    {
      // 想要发送的人的名字
      name: '瑶瑶宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0Kjx6qsUSu4tvDRkOGBWGAvSEUQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'YMqOfWn1_lnZP0c4vCuG72capJHAff2jJK0-90rGVNo',

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '02-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2004', date: '04-02',
        },
        {
          type: '节日', name: '纪念日', year: '2023', date: '03-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-04' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-03-04' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ZozMU4AecR0upXVb9eiwcH8fcHreiU0n9IecjtvWWDI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0Kjx6vQC9VugtNrUJ_FyNnVkXqQ',
    }
  ],

}

module.exports = USER_CONFIG

