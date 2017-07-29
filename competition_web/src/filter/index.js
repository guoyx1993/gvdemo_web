import Vue from 'vue'
//全局过滤器时间
Vue.filter( 'time' , function(value,format) {
	var dateObj = new Date(value);
    var date = {
          "Y+": dateObj.getYear(),
          "M+": dateObj.getMonth() + 1,
          "d+": dateObj.getDate(),
          "h+": dateObj.getHours(),
          "m+": dateObj.getMinutes(),
          "s+": dateObj.getSeconds(),
          "q+": Math.floor((dateObj.getMonth() + 3) / 3),
          "S+": dateObj.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
   }
   return format;
}); 
