<template>
    <div>
        <mt-swipe :auto="4000">
  <!-- <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item> -->

  <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
      <img :src="item.img"/>

  </mt-swipe-item>

</mt-swipe>


 <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt=""><span class="mui-badge">5</span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
        <!-- <h1>HomeContainer组件</h1> -->

    </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotuList: [
                {img: 'https://static.runoob.com/images/mix/sqlbig.png',url :""},
                  {img: 'https://static.runoob.com/images/mix/jsbig.jpeg',url :""},
                 {img: 'https://static.runoob.com/images/mix/ajaxbig.png',url :""},
                //  {img: 'https://static.runoob.com/images/icon/sql.png',url :""}
                // {img: '/images/5.png',url :""},
                // {img: '/images/6.png',url :""},
            ]

        }
    },
    created(){
    //    this.getLunbotu();
    //    console.log(lunbotuList)

    },
    methods : {
        getLunbotu(){
            // var list=[
            //     {img: './images/1.png',url :""},
            //     {img: './images/2.png',url :""},
            //     {img: './images/3.png',url :""},
            //     {img: './images/4.png',url :""},
            //     {img: './images/5.png',url :""},
            //     {img: './images/6.png',url :""},
            // ],
            // this.lunbotuList=list

            
        }
    }
    
}
</script>

<style lang='scss' scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color : red;
        }
         &:nth-child(2){
            background-color : blue;
        }
         &:nth-child(3){
            background-color : yellow;
        }
        
        img {
            width : 100% ;
            height: 100%
            
            

        }

    }
    
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;

    img{
        width: 60px;
        height: 60px;
    }
    mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none
}

</style>