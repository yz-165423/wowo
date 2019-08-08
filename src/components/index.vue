<template>
     <div>
         <!-- 一楼头部导航栏 -->
        <heading></heading>
         <!-- 二楼轮播图 -->
        <div class="block">
            <el-carousel trigger="click" height="350px">
                <el-carousel-item class="lb" v-for="(item,i) of carousel" :key="i">
                   <img :src="`http://127.0.0.1:3000/${item.img}`" />
                </el-carousel-item>
            </el-carousel>
        </div>
         <!-- 三楼标题广告 -->
        <div class="index_title">
            <span class="index_title_1">用支付连接一切</span>
            <span>每一笔订单的背后，是会员的积累，店铺信用的提升，经营收益的增长</span>
        </div>
        <!-- 四楼功能介绍 -->
        <div class="box">
             <div class="box-1" v-for="(item,i) of index_desc" :key="i">
                 <div>
                     <img :src="`http://127.0.0.1:3000/${item.img}`" />
                 </div>
                 <span class="name">{{item.title}}</span>
                 <span class="desc">{{item.descs}}</span>
             </div>
        </div>
        <!-- 五楼支付介绍 -->
        <div class="index-pay">
            <div class="index-pay-back">
                   <div class="index-pay-box">
                       <span class="pay-box-1">移动支付场景</span>
                       <span>提供小微商家、连锁品牌，各行业全场景下，支持各种设备，移动支付解决方案</span>
                   </div>
                   <div class="index-pay-pic">
                       <img src="../assets/pic_01.png" alt="">
                       <img src="../assets/pic_02.png" alt="">
                       <img src="../assets/pic_03.png" alt="">
                       <img  src="../assets/pic_04.png" alt="">
                   </div>
            </div>
        </div>
        <div class="index-friend">
              <div class="index-friend-title">
                  <span>我们的合作伙伴</span>
              </div>
              <div class="index-friend-pic">
                  <div class="index-friend-pic-1" v-for="(item,i) of index_friend" :key="i">
                      <img :src="`http://127.0.0.1:3000/${item.img}`" alt="">
                  </div>
              </div>
        </div>
        <div class="join">
            <span>
            信任，从每一笔订单的积累开始，让我们一起见证收益增长！
            </span>
            <a href="/#/sjrz">立即入驻</a>
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
   data(){
       return{
       carousel:[],
       index_friend:[],
       index_desc:[]
       }
   },
   created(){
        var url = "carousel";
        this.axios.get(url).then(result => {
        this.carousel = result.data.data;
    });
         var url = "index_friend";
        this.axios.get(url).then(result => {
        this.index_friend = result.data.data;
    });
      var url = "index_desc";
        this.axios.get(url).then(result => {
        this.index_desc = result.data.data;
    });
   }
}
  
</script>

<style scoped>
.lb>img{
    width:100%;
    height:350px;
}
.block{
    margin-top:60px;
    margin-bottom: 80px;
}
 .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .index_title{
      color:#474747;
      font-size: 24px;
      font-weight: 400;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .index_title_1{
      font-size: 30px;
      line-height: 70px;
      font-weight: 500;
  }
  .box{
      width: 1256px;
      margin: 40px auto;
      min-height: 100px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
  }
  .box-1{
      width: 314px;
      height:220px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 45px;
      text-align: center;
      box-sizing:border-box;
      border-radius: 2px;
  }
  .box-1:hover{
      box-shadow: 0px 0px 20px #f6f3f3;
  }
  .name{
      color:#000;
      font-size: 16px;
      font-weight: 400;
      height: 40px;
      line-height: 40px;
      margin-top: 5px;
  }
  .desc{
      color:#666;
      font-size:16px;
      height:70px;
  }
  .index-pay{
      height:604px;
      background: rgba(241,244,248,1);
  }
  .index-pay-back{
      width: 1205px;
      height: 604px;
      background: url('../assets/back01.png') no-repeat;
      background-position: center;
      margin: 0 auto;
  }
  .index-pay-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #474747;
      font-size: 24px;
      font-weight: 400;
  }
  .pay-box-1{
      font-size: 30px;
      line-height: 70px;
      font-weight: 500;
  }
  .index-pay-pic{
      margin-top: 80px;
      display: flex;
      flex-direction: row;
  }
   .index-pay-pic>img{
       margin-right: 15px;

   }
   .index-friend{
       width:1200px;
       margin: 0 auto;
   }
   .index-friend-title{
       padding:70px 0;
       color:#474747;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   .index-friend-title>span{
       font-size: 30px;
       font-weight: 500;
       line-height: 70px;
   }
   .index-friend-pic{
       display: flex;
       width: 100%;
       flex-direction:row;
       justify-content: flex-start;
       align-items:center;
       flex-wrap: wrap;

   }
   .index-friend-pic div:nth-child(5){
       margin-right: 0;
   }
   .index-friend-pic div:nth-child(10){
       margin-right:0;
   }
   .index-friend-pic-1{
       border:1px solid #eaeaea;
       border-radius: 10px;
       width: 190px;
       height:90px;
       margin-bottom: 50px;
       margin-right: 60px;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: row;
   }
.join{
margin-top: 30px;
height: 253px;
background: url(../assets/index_back02.png) no-repeat;
background-size: cover;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
}
.join a{
  display: inline-block;
  width:220px;
  height:55px;
  color:#000;
  cursor: pointer;
  background: rgba(0,0,0,0);
  border: 1px solid #000;
  line-height: 55px;
  margin-top: 20px;
  text-decoration: none;
  }
  .join a:hover{
      background: rgba(255, 255, 255, 0.5);
  }
</style>
