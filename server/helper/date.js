exports.getDateTime = function() {
     let now     = new Date(); 
     let wib     = now.getTime() + (now.getTimezoneOffset() * 60000);
     let nowWIB  = new Date(wib + (3600000*7));
     let year    = nowWIB.getFullYear();
     let month   = nowWIB.getMonth()+1; 
     let day     = nowWIB.getDate();
     let hour    = nowWIB.getHours();
     let minute  = nowWIB.getMinutes();
     let second  = nowWIB.getSeconds(); 
     if(month.toString().length == 1) {
          month = '0'+month;
     }
     if(day.toString().length == 1) {
          day = '0'+day;
     }   
     if(hour.toString().length == 1) {
          hour = '0'+hour;
     }
     if(minute.toString().length == 1) {
          minute = '0'+minute;
     }
     if(second.toString().length == 1) {
          second = '0'+second;
     }   
     let dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

exports.isTodayMonday = function() {
     let now = new Date();
     let wib = now.getTime() + (now.getTimezoneOffset() * 60000);

     // create new Date object for different city
     // using supplied offset
     let nowWIB = new Date(wib + (3600000*7));
     let day = nowWIB.getDay();
     return day === 1;
}

exports.getDate = function() {
     let now     = new Date(); 
     let wib     = now.getTime() + (now.getTimezoneOffset() * 60000);
     let nowWIB  = new Date(wib + (3600000*7));
     let year    = nowWIB.getFullYear();
     let month   = nowWIB.getMonth()+1; 
     let day     = nowWIB.getDate();
     if(month.toString().length == 1) {
          month = '0'+month;
     }
     if(day.toString().length == 1) {
          day = '0'+day;
     }   
     let date = year+'-'+month+'-'+day;   
     return date;
}
exports.getDayNumber = function() {
     let now     = new Date(); 
     let wib     = now.getTime() + (now.getTimezoneOffset() * 60000);
     let nowWIB  = new Date(wib + (3600000*7));
     let day = nowWIB.getDay();
     day = day-1;
     if (day == -1) {
          day = 6; // sunday
     }
     return day.toString();
}
exports.isDateNow = function(now) {
     let dateNow = new Date();
     let wib     = dateNow.getTime() + (now.getTimezoneOffset() * 60000);
     let nowWIB  = new Date(wib + (3600000*7));
     let year    = nowWIB.getFullYear();
     let month   = nowWIB.getMonth()+1; 
     let day     = nowWIB.getDate();
     month = month.toString();
     day = day.toString();
     year = year.toString();
     const nowArray = now.toString().split(" ");
     let monthNow = nowArray[1].toLowerCase();
     const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
     monthNow = months.indexOf(monthNow) + 1;
     monthNow = monthNow.toString();
     const dayNow = nowArray[2];
     const yearNow = nowArray[3];
     const ret = day === dayNow && month === monthNow && year === yearNow;
     return ret ;
}