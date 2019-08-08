<template>
  <div>
    <ally-head></ally-head>

    <div class="banner">
      <a href="http://127.0.0.1:8080/#/cwdls">
        <button>成为代理商</button>
      </a>
    </div>

    <div class="content">
      <div class="con-title">
        为什么选择窝窝
      </div>

      <div class="cause">
        <div class="cause-item">
          <img src="../assets/bao.png" alt="">
          <div class="box">
            <p class="box-title">平台保障</p>
            <p class="box-con">
              我们是微信、支付宝、银联、网商银行官方战略合作伙伴，针对中国六千万生活服务业商家提供移动支付+会员营销服务，覆盖全国商家近百万。为合作伙伴提供专业的产品、销售、运营、市场培训，资源诱导等全方位扶植。
            </p>
          </div>
        </div>
 
        <div class="cause-item">
          <img src="../assets/qd.png" alt="">
          <div class="box">
            <p class="box-title">合作渠道</p>
            <p class="box-con">
              支付灵活全面，支持微信、支付宝、花呗、储蓄卡、信用卡等 多种支付方式，并可通过一码实现，简单便捷。
            </p>
          </div>
        </div>

        <div class="cause-item">
          <img src="../assets/zjzj.png" alt="">
          <div class="box">
            <p class="box-title">资金安全</p>
            <p class="box-con">
              支付灵活全面，支持微信、支付宝、花呗、储蓄卡、信用卡等 多种支付方式，并可通过一码实现，简单便捷。支持随时提现到账、次日提现到账、自动次日到账等多种到账方式，商家收款到银行，银行结算至商家银行，合作合规，无风险。
            </p>
          </div>
        </div>

        <div class="cause-item">
          <img src="../assets/zan.png" alt="">
          <div class="box">
            <p class="box-title">产品支持</p>
            <p class="box-con">
              我们拥有手机APP端，电脑端，收银插件，各类收银工具设备；专业研发团队、运营团队、资深销售顾问团队、专业客服团队提供全方位服务。0加盟费，0代理费，为热爱聚合支付的同仁提供极速全方位支撑。
            </p>
          </div>
        </div>
      </div>

      <div class="con-title">
        可靠的服务支持
      </div>

      <div class="serve">
        <div class="serve-item">
          <p class="item-tit">产品支持</p>
          <p class="item-con">
            完整专业的研发团队，及时反馈商家需求
          </p>
          <p class="item-img">
            <img src="../assets/td.png" alt="">
          </p>
        </div>
        <div class="serve-item">
          <p class="item-tit">物料支持</p>
          <p class="item-con">
            提供窝窝收款设备硬件，营销系统全方位支持
          </p>
          <p class="item-img">
            <img src="../assets/wl.png" alt="">
          </p>
        </div>
        <div class="serve-item">
          <p class="item-tit">培训支持</p>
          <p class="item-con">
            为代理商和合作伙伴提供系统的使用培训
          </p>
          <p class="item-img">
            <img src="../assets/px.png" alt="">
          </p>
        </div>
      </div>

      <div class="con-title">
        申请流程
      </div>
      
      <div class="step">
        <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/pic12.svg" alt="">
        <div class="step-box">
          <div class="step-item">
            <p class="s-t"><span class="item-num">01</span>在线申请</p>
            <p class="s-c">
              填写表单提交需求，工作人员将在24小时内联系您
            </p>
          </div>
          <div class="step-item">
            <p class="s-t"><span class="item-num">02</span>业务对接</p>
            <p class="s-c">
              工作人员现场会谈、介绍、签约
            </p>
          </div>
          <div class="step-item">
            <p class="s-t"><span class="item-num">03</span>系统培训</p>
            <p class="s-c">
              专业人员系统培训硬件软件使用方法
            </p>
          </div>
          <div class="step-item">
            <p class="s-t"><span class="item-num">04</span>技术支持</p>
            <p class="s-c">
              专业技术支持，拓展业务不存在问题
            </p>
          </div>
        </div>
      </div>

      <div class="con-title mb">
        <a href="http://127.0.0.1:8080/#/agent">
          <button>申请成为代理</button>
        </a>
      </div>
    </div>

    <ally-foot></ally-foot>

  </div>
</template>

<script>

import Heading from "./head.vue";
import Footing from "./footer.vue";

  export default {
    data(){
      return{

      }
    },
    components:{
      'ally-head':Heading,
      'ally-foot':Footing
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
    height: 500px;
    background: url(../assets/banner03.png) no-repeat center;
    background-size: cover;
    text-align: center;
    min-width: 1100px;
  }
  .banner>a{
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }
  .banner button{
    margin: 0 auto;
    width: 350px;
    height: 75px;
    border-radius: 20px;
    font-size: 30px;
    position: relative;
    font-weight: bold;
    margin-top: 295px;
    cursor: pointer;
    outline: none;
    background-image: linear-gradient(-180deg, #FFF29B 0%, #FFEE7A 100%);
    box-shadow: 0 2px 4px 0 #DE5A95, inset 0 -9px 6px 0 #FCA756;
    border: none;
    color: #EA607B;
    background: #F77441;
    text-transform: none;
    overflow: visible;
    line-height: 1.15;
    padding: 1px 6px;
    align-items: flex-start;
    text-align: center;
    box-sizing: border-box;
  }
  .content{
    width: 1100px;
    margin: 0 auto;
    text-align: center;
  }
  .content>.con-title{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    color: #474747;
    font-weight: bold;
  }
  .content>.cause{
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .content>.cause>.cause-item{
    width: 485px;
    height: auto;
    position: relative;
    margin-bottom: 35px;
  }
  .content>.cause>.cause-item>img{
    position: absolute;
    left: 0;
    top: 10px;
  }
  .content>.cause>.cause-item>.box{
    padding: 0 10px 0 80px;
    box-sizing: border-box;
    text-align: left;
  }
  .content>.cause>.cause-item>.box>.box-title{
    margin-bottom: 15px;
    font-size: 20px;
    color: #474747;
    text-indent: 0;
  }
  .content>.cause>.cause-item>.box>.box-con{
    font-size: 16px;
    color: #919191;
    line-height: 30px;
    text-indent: 0;
  }
  .serve{
    display: flex;
    justify-content: space-between;
  }
  .serve>.serve-item{
    width: 286px;
    height: 226px;
    background: #fff;
    box-shadow: 0 2px 10px 4px rgba(217,228,229,0.5);
    border-radius: 10px;
    padding: 45px 0;
    box-sizing: border-box;
  }
  .serve>.serve-item>.item-tit{
    font-size: 14px;
    color: #333;
    text-align: center;
    font-weight: bold;
  }
  .serve>.serve-item>.item-con{
    font-size: 14px;
    color: #919191;
    text-align: center;
    margin: 15px auto 35px auto;
    line-height: 20px;
  }
  .serve>.serve-item>.item-img{
    text-align: center;
  }
  .step{
    background: #fff;
    box-shadow: 0 2px 10px 4px rgba(217, 228, 229, 0.50);
    width: 100%;
    height: 258px;
    text-align: center;
    border-radius: 10px;
    padding: 0 45px;
    padding-top: 75px;
    box-sizing: border-box;
  }
  .step>.step-box{
    display: flex;
    justify-content: space-between;
  }
  .step>.step-box>.step-item{
    width: 200px;
    height: 100px;
  }
  .step>.step-box>.step-item>.s-t{
    font-size: 14px;
    color: #333;
    text-align: center;
    font-weight: bold;
  }
  .step>.step-box>.step-item>.s-t>.item-num{
    font-size: 18px;
    color: #F77441;
    text-align: center;
    font-weight: bold;
    margin-right: 5px;
    display: inline-block;
  }
  .step>.step-box>.step-item>.s-c{
    font-size: 14px;
    color: #919191;
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
  }
  .con-title>a{
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
  .con-title>a>button{
    width: 286px;
    height: 60px;
    background: #F77441;
    box-shadow: 0 2px 10px 4px rgba(217, 228, 229, 0.50);
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    color: #FFF;
    font-size: 18px;
    margin-top: 45px;
    border: none;
  }
  .mb{
    margin-bottom: 4rem;
  }
</style>
