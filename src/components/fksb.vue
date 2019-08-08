<template>
      <div>
          <heading></heading>
          <div class="head-bg">
              <a href="http://127.0.0.1:8080/#/sjrz">
                  <p class="enter">立即入住</p>
              </a>
          </div>
          <div class="list">
              <ul class="device_con">
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_01.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_liudong.png" alt="">
                                  <span>流动摊位</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_bianli.png" alt="">
                                  <span>便利店</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>二维码牌</p>
                          <p>商家可将二维码牌放置于收银台，张贴于门店各处，也可拿到顾客面前，消费者通过微信或支付宝扫码完成支付。无需采购硬件设备，铺设成本低，适合大部分中小商户。</p>
                      </div>
                  </li>
                   <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_02.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_bianli.png" alt="">
                                  <span>便利店</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>扫码枪</p>
                          <p>即插即用，自动识别条形码、二维码；收银员主控，防止漏单。</p>
                      </div>
                  </li>
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_03.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_bianli.png" alt="">
                                  <span>便利店</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_liansuo.png" alt="">
                                  <span>连锁超市</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>扫码盒子</p>
                          <p>放置柜台收款，多场景适用，Wi-Fi联网，0.1s快速付款，顾客手机无网也能付款。</p>
                      </div>
                  </li>
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_04.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_canting.png" alt="">
                                  <span>大型餐厅</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_yule.png" alt="">
                                  <span>娱乐场所</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>智能POS机</p>
                          <p>简单的机身设计，支持多联小票打印，付款凭证轻松获取；带有智能语音播报，收款放心；支持4G和Wi-Fi网络，帮助商户随时随地收款，保障交易流畅。</p>
                      </div>
                  </li>               
              </ul>
              <ul class="device_con">
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_05.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_shangchao.png" alt="">
                                  <span>大型商超</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_yule.png" alt="">
                                  <span>娱乐</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>扫码机</p>
                          <p>商家输入金额，防止抹零，语音播报不漏单；双屏显示，顾客也能看到金额，全场景适用。</p>
                      </div>
                  </li>
                   <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_06.png" alt="">
                          <div id="n1" class="device_mask">
                               <div class="device_mask_1">
                                  <img src="../assets/icon_liansuo.png" alt="">
                                  <span>连锁超市</span>
                              </div>
                               <div class="device_mask_1">
                                  <img src="../assets/icon_shangchao.png" alt="">
                                  <span>大型商超</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>云音箱</p>
                          <p>大音量，声音清晰，不需手机，到账就叫；手忙脚乱也不用担心收款漏单。</p>
                      </div>
                  </li>
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_07.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_liansuo.png" alt="">
                                  <span>超市</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_jiudian.png" alt="">
                                  <span>酒店</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_canting.png" alt="">
                                  <span>餐厅</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>高级扫码盒</p>
                          <p>双屏显示金额，消费者和商户均可见，语音播报声音大不漏单，支持2g+wifi。</p>
                      </div>
                  </li>
                  <li  @mouseover="mouseOver($event)"
                       @mouseleave="mouseLeave($event)" class="device_con_item">
                      <div class="device_con_item1">
                          <img src="../assets/product_08.png" alt="">
                          <div id="n1" class="device_mask">
                              <div class="device_mask_1">
                                  <img src="../assets/icon_canting.png" alt="">
                                  <span>大型餐厅</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_yule.png" alt="">
                                  <span>娱乐场所</span>
                              </div>
                              <div class="device_mask_1">
                                  <img src="../assets/icon_kuaican.png" alt="">
                                  <span>快餐店</span>
                              </div>
                          </div>
                      </div>
                      <div class="desc-bottom">
                          <p>扫码小黑机</p>
                          <p>手持+放置柜台均可收款，多场景应用，语音播报声音大不漏单，支持2g+wifi，消费者无网络也可付款。</p>
                      </div>
                  </li>               
              </ul>
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
   },
   methods:{
       mouseOver(e){      
           var n =e.currentTarget.firstChild.lastChild;
           n.style = "top:0px";
       },
       mouseLeave(e){
          var n =e.currentTarget.firstChild.lastChild;
         n.style = "top:227px";
       }
   }
}
</script>

<style scoped>
.head-bg{
    background: url("../assets/banner02.png") no-repeat center;
    height: 500px;
    width: 100%;
    background-size: cover;
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
    bottom: 200px;
    cursor: pointer;
    text-indent: 0;
}
.list{
    width: 1205px;
    margin: 0 auto;
    margin-top: 80px;
}
.device_con{
        margin: auto;
    padding: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
}
.device_con li.device_con_item {
    width: 289px;
    height: 400px;
    background: #FFFFFF;
    border: 1px solid #eaeaea;
    overflow: hidden;
    margin-right: 25px;
    margin-bottom: 45px;
}
.device_con_item1{
    width: 100%;
    height: 227px;

    text-align: center;
    background: #f7f7f7;
    position: relative;
}
.device_con_item1>img{
    vertical-align: middle;
    margin-top: 39px;
}
.device_mask{
    position: absolute;
    width: 289px;
    height: 227px;
    background: rgba(0,0,0,.7);
    padding:35px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-sizing: border-box;
    z-index: 99;
    transition: all .5s;
    top: 227px;
}

.device_mask_1{
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    margin-top: 50px;
}
.device_mask_1>img{
    width: 30px;
}
.device_mask_1>span{
    font-size: 14px;
    color:white;
}
.desc-bottom{
    background: #fff;
    z-index: 999;
    position: relative;
    font-size: 12px;
    color: #919191;
    padding: 20px;
    line-height: 20px;
    min-height: 180px;
    
}
.desc-bottom p:nth-child(1){
    font-size: 14px;
    color:#474747;
    font-weight: 600;
    text-align: center;
}
</style>
