<template>
     <div class="footer">
          <div class="footer-inner">
            <div class="top">
                   <section>
                       <img style="width:65%;height:auto;" src="../assets/wowo_logo_footer.png" alt="">
                       <p>
                           <img src="../assets/icon-phone-bottom.png" alt="">
                           客服热线：400-808-5955
                       </p>
                   </section>
                   <section class="links">
                        <dl>
                            <dt>产品</dt>
                            <dd><a href="">移动支付</a></dd>
                            <dd><a href="">收款设备</a></dd>
                            <dd><a href="">商家系统</a></dd>
                        </dl>
                        <dl>
                            <dt>合作</dt>
                            <dd><a href="">商家入驻</a></dd>
                            <dd><a href="">招募代理</a></dd>
                        </dl>
                        <dl>
                            <dt>下载</dt>
                            <dd><a href="">APP</a></dd>
                            <dd><a href="">收银插件</a></dd>
                            <dd><a href="">语音播报插件</a></dd>
                        </dl>
                   </section>
                   <section class="top-right">
                          <img src="https://w0.wowoshijie.com/shbstaticfile/55main/img/qr-code.png" alt="">
                           <p>扫码下载窝窝营销</p>
                   </section>
            </div>
            <div class="bottom">
                <p>
                        Copyright © 2018 Shanhui Information Technology Co. Ltd. All Rights Reserved
                    <a href="">
                        <img src="../assets/icon-contry.png" alt="">
                        公安备案号：11010802021227
                    </a>
                </p>
                <p>
                    北京闪惠信息技术有限公司 版权所有
                </p>
            </div>
          </div>
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .footer-inner{
     width:1200px;
     padding: 40px 0;
     margin: 0 auto;
 }
 .footer{
     width:100%;
     height:auto;
     background:#1C1F37;
     color:#fff;
     min-width: 1200px;
 }
.top{
    display: flex;
    padding: 40px 0;
}
dd>a{
    text-decoration: #1C1F37;
    color:#fff;
}
dd>a:hover{
    border-bottom: 1px solid #fff;
}

.links>dl{
    display: inline-block;
    text-align:left;
    padding: 0 65px;
    vertical-align: top;
}
dt{
    font-size:16px;
    line-height: 16px;
    border-left: 2px solid #fff;
    text-indent: 12px;
    margin: 0 0 20px -16px;
    padding: 0 2px;
}
dd{
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-inline-start:0;
}
.top-right{
    border-left: 1px solid #999;
    padding-left: 120px;
    text-align: center;
}
.bottom>p{
    padding:  0 60px;
    display: inline-block;
}
.bottom{
    color:#999;
    height:57px;
    line-height: 57px;
    text-align: center;
    border-top: 1px solid #999;
    font-size: 12px;
}
.bottom>p>a>img{
    width:20px;
    height:20px;
}
.bottom>p>a{
    text-decoration-color: #1C1F37;
    padding-left: 45px;
    color:#999;
}
.bottom>p>a:hover{
    text-decoration-color: #999;
}
</style>
