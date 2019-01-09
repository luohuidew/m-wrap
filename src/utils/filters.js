import Vue from 'vue';
let custom = {
  dateServer(value) {
    return new Date(value * 1000).toLocaleDateString();
  },
  timeDateServer(timeStamp) {
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return m + '-' + d + ' ' + h + ':' + minute;
    // return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
  },
  dateServerEnglish(timestamp) {
    function add0(m) {
      return m < 10 ? '0' + m : m
    }
    var time = new Date(timestamp * 1000);
    var year = time.getFullYear();
    var monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = time.getMonth();
    var date = time.getDate();
    var h = time.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = time.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return monthsInEng[month] + '. ' + add0(date) + '  ' + h + ':' + minute;
    // return monthsInEng[add0(month)] + '. ' + add0(date) + ', ' + year;
  },
  dateServerEnglishYMD(timestamp) {
    function add0(m) {
      return m < 10 ? '0' + m : m
    }
    var time = new Date(timestamp * 1000);
    var year = time.getFullYear();
    var monthsInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = time.getMonth();
    var date = time.getDate();
    var h = time.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = time.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    // debugger;
    return monthsInEng[month] + '. ' + add0(date) + ' , ' + year;
    // return monthsInEng[add0(month)] + '. ' + add0(date) + ', ' + year;
  },
  runTime(diff) {
    let temp_time = diff;
    let timer = setInterval(() => {
      temp_time -= 1;
      if (temp_time < 0) {
        clearInterval(timer);
      }
      return temp_time;
    }, 1000);
  },
  timeDiff(diff) {
    // var date1 = '2015/05/01 00:00:00'; //开始时间
    // var date2 = new Date(); //结束时间
    // var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数      
    if (diff < 0) {
      return '0:0:0'
    }
    //------------------------------
    var date3 = diff * 1000;
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000))

    //计算出小时数

    var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    hours = (days * 24 + hours) > (days * 24 + hours) ? hours : (days * 24 + hours);
    hours = hours > 9 ? hours : '0' + hours;
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))
    minutes = minutes > 9 ? minutes : '0' + minutes;
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    seconds = seconds > 9 ? seconds : '0' + seconds;
    return (hours + ":" + minutes + ":" + seconds)
  },
  timeAgo(diff) {
    // var date1 = '2015/05/01 00:00:00'; //开始时间
    // var date2 = new Date(); //结束时间
    // var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数      
    if (diff < 0) {
      return '0 s'
    }
    //------------------------------
    var date3 = diff;
    // var date3 = diff * 1000;
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000))

    //计算出小时数

    var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    hours = (days * 24 + hours) > (days * 24 + hours) ? hours : (days * 24 + hours);
    // hours = hours > 9 ? hours : '0' + hours;
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))
    // minutes = minutes > 9 ? minutes : '0' + minutes;
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    // seconds = seconds > 9 ? seconds : '0' + seconds;
    let time_str = "";
    // debugger;
    if (days > 0) {
      time_str = days + (days > 1 ? ' days' : ' day');
    } else if (hours > 0) {
      time_str = hours +  (hours > 1 ? ' hours' : ' hour')
    } else if (minutes > 0) {
      time_str = minutes +  (minutes > 1 ? ' minutes' : ' minute')
    } else if (seconds > 0) {
      time_str = seconds +  (seconds > 1 ? ' seconds' : ' second')
    }
    return time_str;
    // return (hours + ":" + minutes + ":" + seconds)
  },
  formatWords(val) {
    var i;
    var result = "<p>";
    var c;
    for (i = 0; i < val.length; i++) {
      c = val.substr(i, 1);
      if (c == "\n")
        result = result + "</br>";
      else if (c != "\r")
        result = result + c;
    }
    return result + '</p>';
  },
  Countdown(val) {
    // let temp = val;
    let countdown = 1300;
    let settime = () => {
      if (countdown == 0) {
        // countdown = 60;
        return 0;
      } else {
        countdown--;
        return countdown
      }
      setTimeout(function () {
        settime();
      }, 1000);
    };
    settime();
  }
}
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
});