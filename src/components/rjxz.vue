<template>
       <div>
           <heading></heading>
           <div>
               <section class="top-img"></section>
               <section class="top1">
                   <div class="app section-1">
                      <div>
                       <p class="t">窝窝营销APP</p>
                       <p class="t-1">高兼容性，可安装在多种收款设备中</p>
                       <p class="t-1">APP在手，收退款、结算、分析、播报、门店管理全都有</p>
                      </div>
                      <div class="iphone">
                          <img src="../assets/loadnew.png" alt="">
                          <div class="iphone-desc">
                              <p>扫码下载iPhone客户端</p>
                              <p>版本：V6.0.4</p>
                              <p>更新日期：2019-06-19</p>
                          </div>
                      </div>
                       <div class="iphone android">
                          <img src="../assets/loadnew.png" alt="">
                          <div class="iphone-desc">
                              <p>扫码下载android客户端</p>
                              <p>版本：V6.0.4</p>
                              <p>更新日期：2019-06-19</p>
                          </div>
                      </div>
                      <div class="phone-banner"></div>
                   </div>
                   <div class="app section-2">
                       <div class="lf">
                           <p class="t">窝窝营销收银插件</p>
                           <p>安装在电脑中</p>
                           <p>收银、结算汇总、收银员交接班统一管理</p>
                           <p>版本：V1.0.15</p>
                           <p>更新日期：2019-06-27</p>
                            <div class="sj-bg">
                                <a href="">立即下载</a>
                             </div>
                       </div>
                       <div class="rg"></div>
                   </div>
                   <div class="app section-3">
                        <div class="lf">
                           <p class="t">语音播报插件</p>
                           <p>小巧方便，安装在电脑中</p>
                           <p>连接窝窝云音响，每一笔收款用声音来播报</p>
                           <p>版本：beta1.0.1</p>
                           <p>更新日期：2019-04-10</p>
                            <div class="sj-bg">
                                <a href="">Windows XP下载</a>
                                <a href="">Windows 7 下载</a>
                                <a href="">Windows 10 下载</a>
                             </div>
                       </div>
                       <div class="rg1"></div>
                   </div>
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

 .top-img{
     width: 100%;
     height: 500px;
     background: url("../assets/download-banner.png") no-repeat center;
 }
 .app{
     box-shadow: 0 2px 10px 4px rgba(217, 228, 229, .5);
     width:1105px;
     padding:60px 104px;
     background:#fff;
     box-sizing: border-box;
     position: relative;    
 }
 .section-1{
     margin: -280px auto 30px auto;
     height: 563px;
 }
 .section-2, .section-3{
     margin: 50px auto 50px auto;
     height: 400px;
 }

 .iphone{
     display: flex;
     justify-content: space-between;
     flex-direction: row;
     width: 35%;
 }
 .iphone>img{
     width:144px;
     height:140px;
     border: 2px solid #f7f7f7;
 }
 .iphone-desc{
     font-size: 14px;
     color: #474747;
 }
 .t{font-weight: bold;
   font-size: 14px;}
.t-1{
       font-size: 14px;
       color: #474747;
   }
.android{
       margin-top: 25px;
   }
 .phone-banner{
     background: url("../assets/pic-01-download.png") no-repeat center;
     width: 184px;
     height:380px;
     position: absolute;
     top:111px;
     right: 148px;
 }
 .lf{
         color:#474747;
     font-size: 14px;
 }
 .sj-bg>a{
         width: 150px;
         height: 40px;
         border: 1px solid #f77441;
         border-radius: 35px;
         cursor: pointer;
         outline: none;
         display: inline-block;
         text-decoration: none;
         line-height: 40px;
         text-align: center;
         color:#f77441;
         margin-right: 10px;
     }
     .sj-bg>a:hover{
         color:#fff;
         background: #f77441;
     }
     .rg{
         background: url("../assets/pic-02-download.png") no-repeat center;
         width: 393px;
         height: 227px;
         position:absolute;
         top: 80px;
         right:80px;
     }
     .rg1{
         background: url("../assets/pic-03-download.png") no-repeat center;
         width: 393px;
         height: 227px;
         position:absolute;
         top: 80px;
         right:80px;
     }
</style>
