var WXBizDataCrypt = require('./WXBizDataCrypt')

var appId = '**'
var sessionKey = '**'

var encryptedData = "**"
var iv = "**"

var pc = new WXBizDataCrypt(appId, sessionKey)
var data = pc.decryptData(encryptedData , iv)

console.log('解密后 data: ', data)
// 解密后的数据为
//
// data = { 
//   phoneNumber: '**',
//   purePhoneNumber: '**',
//   countryCode: '86',
//   watermark: { 
//   	timestamp: **, 
//   	appid: '**' 
//   } 
// }
