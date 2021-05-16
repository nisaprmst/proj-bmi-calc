exports.getDateTime = function() {
    let now     = new Date(); 
    let year    = now.getFullYear();
    let month   = now.getMonth()+1; 
    let day     = now.getDate();
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds(); 
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

exports.getDate = function() {
     let now     = new Date(); 
     let year    = now.getFullYear();
     let month   = now.getMonth()+1; 
     let day     = now.getDate();
     if(month.toString().length == 1) {
          month = '0'+month;
     }
     if(day.toString().length == 1) {
          day = '0'+day;
     }   
     let date = year+'-'+month+'-'+day;   
     return date;
 }

exports.isDateNow = function(now) {
     let dateNow = new Date();
     let year    = dateNow.getFullYear();
     let month   = dateNow.getMonth()+1; 
     let day     = dateNow.getDate();
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