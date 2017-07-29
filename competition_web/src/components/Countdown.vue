<template>
    <!-- 倒计时组件 -->
    <div class="c-pei match-timer right" :endTime="endTime" :callback="callback" :endText="endText" v-html="content">
    </div>
</template>
<script>
    export default {
        data(){
           return {
            content: '',
           }
        },
        props:{
            endTime:{
                type: String,
                default :''
            },
            endText:{
               type : String,
               default:'已结束'
            },
            callback : {
                type : Function,
                default :''
            }
        },
        mounted () {
          this.countdowm(this.endTime)
        },
        methods: {
           countdowm(timestamp){
            let self = this;
            let timer = setInterval(function(){
                let nowTime = new Date();
                let endTime = new Date(timestamp * 1000);
                let t = endTime.getTime() - nowTime.getTime();
                if(t>0){
                    let day = Math.floor(t/86400000);
                    let hour=Math.floor((t/3600000)%24);
                    let min=Math.floor((t/60000)%60);
                    let sec=Math.floor((t/1000)%60);
                    var dayFormat = day < 10 ? "<span>0</span><span>" + day+"</span>" : "<span>"+day.toString().charAt(0)+"</span><span>"+day.toString().charAt(1)+"</span>";
                    hour = hour < 10 ? "0" + hour : hour;
                    var hourFormat = hour < 10 ? "<span>0</span><span>" + hour+"</span>" : "<span>"+hour.toString().charAt(0)+"</span><span>"+hour.toString().charAt(1)+"</span>";
                    min = min < 10 ? "<span>0</span><span>" + min + "</span>" :  "<span>"+min.toString().charAt(0)+"</span><span>"+min.toString().charAt(1)+"</span>";
                    sec = sec < 10 ? "<span style='margin-left:5px;'>0</span><span>" + sec + "</span>" :  "<span style='margin-left:5px;'>"+sec.toString().charAt(0)+"</span><span>"+sec.toString().charAt(1)+"</span>";
                    let format = '';
                    if(day > 0){
                       format =  `${dayFormat}<span class="timer-text">天</span>${hourFormat}<span class="timer-text">时</span>${min}<span class="timer-text">分</span>${sec}<span class="timer-text">秒</span>`;
                    }
                    if(day <= 0 && hour > 0 ){
                       format = `${hourFormat}<span class="timer-text">时</span>${min}<span class="timer-text">分</span>${sec}<span class="timer-text">秒</span>`;
                    }
                    if(day <= 0 && hour <= 0){
                       format =`${min}：${sec}<span class="timer-text">秒</span>`;
                    }
                    self.content = format;
                    }else{
                      clearInterval(timer);
                      self.content = self.endText;
                      self._callback();
                    }
                 },1000);
               },
               _callback(){
               if(this.callback && this.callback instanceof Function){
                     this.callback(...this);
                 }
            }
        }
    }
</script>