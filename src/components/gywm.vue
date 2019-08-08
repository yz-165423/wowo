<template>
      <div>
          <heading></heading>
           <div class="desc">
               <section class="bg"></section>
               <section class="head-1">
                   <div class="c-p1">
                        <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/about-us-icon1.svg" alt="">
                        <p class="t">公司简介</p>
                        <p class="p1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京闪惠信息技术有限公司成立于2015年，旗下品牌窝窝营销是中国领先的移动支付和会员营销系统解决方案服务商，帮助商家轻松接入微信支付、支付宝支付等主流移动支付，并在此基础上提供代金券、储值卡等灵活多样的会员营销服务；除此之外，窝窝营销的收银硬件设备和商家系统都给商家提供了便利的一站式经营服务。</p>
                        <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，使用窝窝营销产品和服务的商家遍及全国，将带领生活服务行业进入全新的发展阶段。</p>
                   </div>
                   <div class="c-p2">
                       <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/about-us-icon2.svg" alt="">
                       <p class="t">联系我们</p>
                       <p class="hz"><a href="">合作邮箱:xiaoyanmei@wowoshijie.com</a></p>
                       <p class="hz"><a href="">客服热线：400-808-5955</a></p>
                   </div>
               </section>
               <p class="page-title-1">业务范围</p>
               <div class="business">
                   <div>
                       <img src="../assets/about-us-icon3.png" alt="">
                       <p>主流的移动接入服务</p>
                   </div>
                   <div>
                       <img src="../assets/about-us-icon4.png" alt="">
                       <p>多元化的业务支持</p>
                   </div>
                   <div>
                       <img src="../assets/about-us-icon5.png" alt="">
                       <p>高效的商家管理系统</p>
                   </div>
               </div>
               <section class="pic">
                   <img src="../assets/about-us-img1.png" alt="">
               </section>
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
.desc{
    width: 100%;
    height: auto;
    padding-bottom: 80px;
    min-width: 1200px;
    background: #fff;
    padding-top: 60px;
}
    .bg{
        background: url("../assets/gywm.png") no-repeat center center;
        width: 100%;
        height: 500px;
    }
    .head-1{
        background: #fff;
        width: 1105px;
        display: flex;
        border-radius: 8px;
        height: 500px;
        margin:-230px auto 0 auto;
        box-shadow: 0 2px 10px 0px rgba(217, 228, 229, 0.50);
        flex-direction: row;
        justify-content: space-between;
    }
    .c-p1,.c-p2{
        width: 50%;
        padding: 60px 100px;
        text-align: center;
        box-sizing: border-box;
        color:#474747;
        font-size: 14px;
        font-family: "微软雅黑";
    }
    .hz{
        line-height: 20px;
        margin-top: 20px;  
    }
    .hz>a{
        text-decoration-color: transparent;
        color:#474747;
    }
    .hz>a:hover{
        text-decoration-color: #474747;
    }
    .t{
        margin-top: 26px;
    }
    .p1,.p2{
        text-align: left !important;
        line-height: 20px;
        margin-top: 10px;   
    }
    .page-title-1{
        line-height: 20px;
        text-align: center;
        font-size: 24px;
        color:#474747;
    }
    .business{
        width: 1105px;
        margin: 60px auto 0 auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding:0 160px;
        align-items: center;
        box-sizing: border-box;    }
 .business p{
     margin-top: 15px;
     text-indent: 0;
 }
 .business>div{
     text-align: center;
     color:#474747;
     font-size: 13px;
 }
 .pic{
     text-align: center;
     margin-top: 55px;
 }
</style>
