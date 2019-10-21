<template>
  <!-- <div>新闻详情----{{ id }}</div> -->

  <div class="newsinfo-container">
    <h3 class="newsinfo-title">{{ newsinfo.title }}</h3>
    <p class="newsinfo-subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFamate }}</span>
      <span>点击:{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <div class="newsinfo-contents" v-html="newsinfo.content"></div>
    <comments-box></comments-box>
  </div>
</template>


<script>
import comments from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo : []

    };
  },
  created (){
    this.getNewsInfo();

  },
 
  methods : {
  getNewsInfo(){
    this.$http.get('http://localhost:3001/getNewsInfo/'+this.id).then(function(result){
     var aa=result.bodyText.substring(1,result.bodyText.length-1)
			//  console.log(aa)
			  this.newsinfo=JSON.parse(aa)
    })
  }
},
 components : {
    "comments-box" : comments

  },
};

</script>

<style lang="scss">
.newsinfo-container{
  padding : 5px 6px;
  .newsinfo-title{
    font-size: 16px;
    text-align: center;
    margin: 8px 0;
    color: red;

  }
  .newsinfo-subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }

}


</style>

