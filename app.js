$(document).ready(function(){
    
    // Clock functionality //
    
    function updateTime(){
        
var hours = new Date().getHours() % 12;        
var nextHour = hours+1;       
var minutes = new Date().getMinutes();       
var minutesMinus = 60-minutes;
var minutesMinusOne = minutes-1;
var minutesMinusPlusOne = minutesMinus+1;        
var lastMinute = (''+minutes)[1];
var lastMinuteMinus = (''+minutesMinus)[1];
var lastMinuteMinusOne = lastMinute-1;
var lastMinuteMinusPlusOne = (''+minutesMinusPlusOne)[1];
        
$(".min_list").find("."+minutesMinusOne).removeClass("active");  
    if (minutes <= 29) {
        $(".hour_list").find("."+hours).addClass("active");
    }
    else {
        $(".hour_list").find("."+nextHour).addClass("active");
        $(".hour_list").find("."+hours).removeClass("active");  
    }
    if (minutes == 00){
        $(".sharp").addClass("active");
        $(".to").removeClass("active");
        $(".min_list").find(".1").removeClass("active");
    }
    if (minutes == 1){
        $(".sharp").removeClass("active");
    }
    if (minutes < 20 ){
     $(".min_list").find("."+minutes).addClass("active");
    }
    if (minutes > 19 && minutes < 30){
        $(".20").addClass("active");
        $(".min_list").find("."+lastMinute).addClass("active");
        $(".min_list").find("."+lastMinuteMinusOne).removeClass("active");
    }
    if (minutes == 30){
        $(".half").addClass("active");
         $(".20").removeClass("active");
        $(".min_list").find(".9").removeClass("active");
    }
    if (minutes >= 31 && minutes < 40){
        $(".20").addClass("active"); $(".min_list").find("."+lastMinuteMinus).addClass("active");
       $(".half").removeClass("active"); $(".min_list").find("."+lastMinuteMinusPlusOne).removeClass("active");
    }
    if (minutes == 40){
        $(".min_list").find(".1").removeClass("active");    
        }
    if (minutes > 40 && minutes <= 59){
       $(".min_list").find("."+minutesMinus).addClass("active");
      $(".min_list").find("."+minutesMinusPlusOne).removeClass("active");
        } 
         if (minutes > 30 && minutes <= 59){
            $(".to").addClass("active");
            $(".past").removeClass("active");
        }
        if (minutes >= 1 && minutes <= 30){
            $(".past").addClass("active");
        }
} setInterval(updateTime, 1000);
    
    // Special items //
    
    function timeSpecial() {
        
        var hours24 = new Date().getHours() % 24;
        var minutes24 = new Date().getMinutes();
        
        if (hours24 == 12 && minutes24 == 0) {
            $(".noon").addClass("active-special");
            $(".0").removeClass("active");
            $(".sharp").removeClass("active");
        }
        if (hours24 == 00 && minutes24 == 0) {
            $(".midnight").addClass("active-special");
            $(".0").removeClass("active");
            $(".sharp").removeClass("active");
        }
        if (minutes24 == 1){
            $(".midnight").removeClass("active-special");
            $(".noon").removeClass("active-special");
        }
    } setInterval(timeSpecial, 1000);
    
});