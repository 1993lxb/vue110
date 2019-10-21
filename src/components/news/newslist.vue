<template>
    <div>

        	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newslist/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgsrc">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.publishtime | dateFamate("YYYY-MM-DD")}}</span>
                                <span>点击：{{item.clickmount}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
				
				

			</ul>
    </div>
</template>


<script>
export default {
	data() {
		return {
			newslist : []

		}
	},
	created(){
		console.log("11111")
		
		this.getNewsList()

	},


	methods : {
		getNewsList(){
		//  $.ajax({
        //             url : '../../data/newslist.json',
        //             type : 'get',
        //             dataType : 'JSON',
                   

        //         }).then(
        //             function(data){
        //                 console.log(data)
        //                 // console.log("------"+data.username)
        //                 // console.log("------"+data.age)

		//             })
		 this.$http.get('http://localhost:3001/getscript').then(function (result) {
            // 通过 result.body 拿到服务器返回的成功的数据
			// console.log(result.bodyText)
			 var aa=result.bodyText.substring(1,result.bodyText.length-1)
			//  console.log(aa)
			  this.newslist=JSON.parse(aa)
			
		
          })
		
		// }

		        // 发起JSONP 请求
        //   this.$http.jsonp('http://localhost:3001/getscript').then(result => {
        //     console.log(result)
		//   })
		}
        
	}
    
}
</script>


<style lang="scss">
.mui-media-body{
    h1{
		font-size: 14px;
	}

     .mui-ellipsis{
         font-size: 12px;
         color:green;
         display: flex;
         justify-content: space-between

     }

    
}

</style>


