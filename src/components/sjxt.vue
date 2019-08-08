<template>
      <div>
          <heading></heading>
           <div>
               <div class="banner">
                   <p class="title">商家系统</p>
                   <p class="m-title">订单，财务，门店...一站式管理</p>
                    <div class="sj-bg">
                        <a href="/#/sjrz">申请成为商家</a>
                    </div>
                    <p class="s-title">热线电话：400-808-5955</p>
                    <p class="n-title">
                        <img src="../assets/pic08.png" alt="">
                    </p>
               </div>
               <div class="body-1">
                  <div class="sys-view">
                   <div class="sys-1">
                       <p>电子账单，每日交易结算与所有收款记录方便对账，按照不同时间周期导出数据，满足多种对账需求无培训成本，轻松上手。</p>
                       <div>
                           <span class="s1"></span><span class="s2">电子账单</span>
                           <span class="s1"></span><span>导出excel</span>
                       </div>
                   </div>
                   <div class="sys-2">
                       <table></table>
                       <img src="../assets/pic10.png" alt="">
                   </div>
                  </div>
               </div>
               <div class="body-1" style="background:#fff;">
                  <div class="sys-view">
                   <div class="sys-1" style="float:right;">
                       <p>企业级经营分析，自动提现，满足按多种结算状态进行对账需求，清晰每一笔账目来源和各个店铺收支状态。</p>
                       <div>
                           <span class="s1"></span><span class="s2">经营分析</span>
                           <span class="s1"></span><span>财务报表</span>
                       </div>
                   </div>
                   <div class="sys-2">
                       <table></table>
                       <img src="../assets/pic09.png" alt="">
                   </div>
                  </div>
               </div>
               <div class="body-1">
                  <div class="sys-view">
                   <div class="sys-1">
                       <p>多门店多收银员分权管理，区分门店、人员管理店铺，多个账号均可登录，各账号款台账目清晰。</p>
                       <div>
                           <span class="s1"></span><span class="s2">多角色使用</span>
                           <span class="s1"></span><span>导出excel</span>
                       </div>
                   </div>
                   <div class="sys-2">
                       <table></table>
                       <img src="../assets/pic11.png" alt="">
                   </div>
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
  .banner{
     padding-top: 60px;
     text-align: center;
  }
  .title{
      font-size: 30px;
      line-height: 42px;
  }
  .m-title{
      font-size: 22px;
      margin-top: 30px;
      margin-bottom:23px;
      line-height: 30px;
  }
  .s-title{
      font-size: 16px;
      color:#474747;
      line-height: 22px;
  }
  .n-title>img{
      max-width: 598px;
      height: auto;
      margin-top: 15px;
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
         color:#fff;
         background: #f77441;
         margin-right: 10px;
     }
     .body-1{
         height: 500px;
         width: 100%;
         background: #f7f7f7;
     }
     .sys-1{
         width: 450px;
         text-align: left;
         float: left;
     }
     .sys-1 p {
    font-size: 16px;
    color: #474747;
    line-height: 22px;
    margin-top: 192px;
    text-indent: 0;
}
.sys-2 img{
    max-height: 320px;
    display: block;
    width: auto;
    margin-top:50px;
 
}
.sys-view{
    width: 1100px;
    margin: auto
}
.s1{
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background:#f77441;
    margin-right: 5px;
}
.s2{
    margin-right:10px;
       
}
</style>
