export default class myUtils {
  /**
   * 判断字符串是否为空
   * @param str
   * @return {boolean}
  */
    static isNull (str) {
      return str == null || str.length === 0 || str === ''
    }
    /**
     * @desc 判断是否为身份证号
     * @param {String|Number}str
     * @return {Boolean}
     */
    static isIdCard (str) {
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }
    /**
     * @desc 判断是否为手机号
     * @param {String|Number} str
     * @return {Boolean}
    */
    static isPhoneNum (str) {
      return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
    }

    static uuid() {
      var  s = [];
      var  hexDigits =  "0123456789abcdef" ;
      for  ( var  i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] =  "4" ;   // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);   // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] =  "-" ;
  
      var  uuid = s.join( "" );
      return  uuid;
 }

    static isPhone() {
     
        return (this.osInfo().isAndroid || this.osInfo().isPhone)
    }

    static isPC() {
        return this.osInfo().isPc
    }

    static osInfo() {
      var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, 
      isAndroid = /(?:Android)/.test(ua), 
      isFireFox = /(?:Firefox)/.test(ua), 
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
      return {
           isTablet: isTablet,
           isPhone: isPhone,
           isAndroid : isAndroid,
           isPc : isPc
      };
    }
  }

