/**
 * @description: 时间日期
 * @param date
 * @return:年月日 时分秒
 */
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
/**
 * @description: 获取url参数
 * @param 
 * @return:Object
 */
const getParams = () => {
    let query = window.location.search.substring(1);
    let key_values = query.split("&");
    let params = {};
    key_values.map(key_val => {
        let key_val_arr = key_val.split("=");
        params[key_val_arr[0]] = key_val_arr[1];
    });
    return params;
}
/**
 * @description: 手机号正则验证
 * @param phone
 * @return Boolean
 */
const checkPhone = (phone) =>{
    var reg = /^[1]([3-9])[0-9]{9}$/;
    if (reg.test(phone)) {
      return true
    } else {
      return false
    }
  }
  /**
 * @description: 当前运行环境
 * @param 
 * @return
 */
const environMent = () =>{
    let u = window.navigator.userAgent;
    let ua = window.navigator.userAgent.toLowerCase();
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let weChat = ua.match(/MicroMessenger/i) == 'micromessenger';//微信端
    let aliPay = ua.match(/AlipayClient/i) == 'alipayclient';//支付宝端
    return {
        isAndroid:isAndroid,
        isIOS:isIOS,
        weChat:weChat,
        aliPay:aliPay
    }
}
export {
    formatTime,
    getParams,
    checkPhone,
    environMent
}