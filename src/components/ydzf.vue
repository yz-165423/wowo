<template>
      <div>
          <heading></heading>
          <div class="head-bg">
              <a href="http://127.0.0.1:8080/#/sjrz">
                  <p class="enter">立即入住</p>
              </a>
          </div>
          <div class="desc01">
              <div class="left">
                  <p>一码支付</p>
                  <p>一个二维码同时支持微信、支付宝、云闪付、花呗支付。</p>
              </div>
              <div class="right">
                  <img src="../assets/pic04.png" alt="">
              </div>
          </div>
          <div class="desc02">
              <p>多种收银方式</p>
              <p>二维码、扫码设备等多种收银方式，满足多场景需求</p>
              <ul class="pay-img">
                  <li><img src="../assets/pic05.jpg" alt=""></li>
                  <li><img src="../assets/pic06.jpg" alt=""></li>
                  <li><img src="../assets/pic07.jpg" alt=""></li>
              </ul>
          </div>
          <div class="bottom">
               <div class="bottom-item">
                   <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/icon01.svg" alt="">
                   <div>
                       <p>银行托管资金</p>
                   <p>合作银行托管资金和结算，确保资金安全</p>
                   </div>
               </div>
               <div class="bottom-item">
                   <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/icon02.svg" alt="">
                   <div>
                       <p>多种结算周期</p>
                   <p>支持多门店一卡提现，多种结算周期按需调整，灵活方便</p>
                   </div>
               </div>                
          </div>
          <footering></footering>
      </div>
</template>

<script>
import Heading from "./head.vue";
import Footering from "./footer.vue";
export default {
   components:{
       heading: Heading,
       footering:Footering
   }
}
</script>

<style scoped>
.head-bg{
    background: url("../assets/banner01.jpg") no-repeat center;
    height: 500px;
    width: 100%;
}
.head-bg .enter{
     width: 230px;
    height: 60px;
    background-color: #F77441;
    text-align: center;
    line-height: 60px;
    color: #fff;
    border-radius: 75px;
    font-size: 22px;
    position: absolute;
    left: 50%;
    margin-left: -110px;
    bottom: 100px;
    cursor: pointer;
    text-indent: 0;
}
.desc01{
    width: 1030px;
    margin: auto;
    padding: 80px 0;
    overflow: hidden;
    
}
.left{
    float: left;
    width: 50%;
    margin-top: 120px;
}
.left>p{
    font-size: 36px;
   
}
.left>p:nth-child(2){
    font-size: 26px;
}
.right{
    float: right;
 
}
.right>img{
       height: 448px;
       width: 448px;
}
.desc02{
    width: 100%;
    height: 580px;
    background: #f7f7f7;
    color:#000;
    overflow: hidden;
    text-align: center;
}
.pay-img{
   display: flex;
   width: 1030px;
   margin: auto;
   justify-content: center;
   margin-top: 72px;
}
.pay-img>li{
    float: left;
    list-style: none;
    width: 33%;
}
.bottom{
    width: 1030px;
    margin: auto;
}
.bottom>div:nth-child(1){
    border-bottom: 1px solid #ededed;
}
.bottom-item{
    padding-top:90px;
    padding-bottom: 64px;
    box-sizing: border-box; 
    overflow: hidden;
}
.bottom-item>img{
    float: left; 
}
.bottom-item>div{
    float: left;
    margin-left: 100px;
    color:#333333;
    font-size: 20px;
    margin-top: 20px;
}
.bottom-item>div>p{
    text-align: left;
}
.bottom-item>div>p:nth-child(2){
    font-size: 14px;
    color:#919191;
}
</style>
