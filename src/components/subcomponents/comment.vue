<template>
    <div class="cmt-container"><h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要bb的内容(最多吐槽120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">第1楼&nbsp;&nbsp;用户 ： 匿名用户&nbsp;&nbsp;发表时间 ：2012-12-12 12:12:12</div>
            <div class="cmt-body">国务院副总理刘鹤出席会议并讲话。</div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">第1楼&nbsp;&nbsp;用户 ： 匿名用户&nbsp;&nbsp;发表时间 ：2012-12-12 12:12:12</div>
            <div class="cmt-body">国务院副总理刘鹤出席会议并讲话。</div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">第1楼&nbsp;&nbsp;用户 ： 匿名用户&nbsp;&nbsp;发表时间 ：2012-12-12 12:12:12</div>
            <div class="cmt-body">国务院副总理刘鹤出席会议。</div>
        </div>
        
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>

    
    </div>
    

</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0px;
    }
    .cmt-list{
        margin: 10px 0px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }

        }
    }
    }

</style>