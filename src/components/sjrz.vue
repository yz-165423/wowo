<template>
       <div>
           <heading></heading>
           <div class="sj-banner">
                 <div class="sj-bg">
                      <a href="/#/cwdls">入驻成为商家</a>
                 </div>
           </div>
            <div class="index-friend">
              <div class="index-friend-title">
                  <span>合作品牌</span>
              </div>
              <div class="index-friend-pic">
                  <div class="index-friend-pic-1" v-for="(item,i) of sjrz_friend" :key="i">
                      <img :src="`http://127.0.0.1:3000/${item.img}`" alt="">
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
   },
   data(){
       return{
          sjrz_friend:[]
       }
   },
   created(){
        var url = "sjrz_friend";
        this.axios.get(url).then(result => {
        this.sjrz_friend = result.data.data;
    });
   }
}
</script>

<style scoped>
     .sj-banner{
         width: 100%;
         height: auto;
         padding-bottom: 80px;
         padding-top: 60px;
         min-width: 1200px;
     }
     .sj-bg{
         width: 100%;
         height:500px;
         background: url(../assets/banner07.png)no-repeat center;
         background-size: cover;
     }
     .sj-bg>a{
         width: 230px;
         height: 63px;
         background:#f77441;
         border-radius: 35px;
         border:none;
         cursor: pointer;
         outline: none;
         display: inline-block;
         text-decoration: none;
         line-height: 63px;
         text-align: center;
         color:#fff;
         margin-top: 313px;
         margin-left: 125px;
     }
      .index-friend{
       width:1200px;
       margin: 0 auto;
   }
   .index-friend-title{
       padding-bottom: 70px;
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
    .index-friend-pic div:nth-child(15){
       margin-right: 0;
   }
   .index-friend-pic div:nth-child(20){
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
   .index-friend-pic-1>img{
       cursor: pointer;
       transition: all 0.6s;
   }
   .index-friend-pic-1>img:hover{
       transform: scale(1.1);
   }
</style>
