/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0cc312cd3da90d10',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cfb1ca67559c811de40fd26756685150',

  PROVINCE: '河南',
  CITY: '濮阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '猪猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5gIU6SYK5j9CYHqrp_EkdAMzC28',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Ktdz23hPOYl24KVi2mgt7-bk-3zY_r49jHMSdN4KfvI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '猪猪', year: '1999', date: '04-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '香香', year: '1999', date: '03-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-23' },
        // 结婚纪念日
       // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'JVxenTa6cV6oSfK5ik9Ven5ietzxZtGVUY7LF_TUsl0',

  CALLBACK_USERS: [
    {
      name: '三月',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5gIU6cQA_9Uvv4lOKQgE7EWgPcY',
    }
  ],

}

module.exports = USER_CONFIG

