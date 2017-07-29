<template>
	<!-- 排行榜组件-->
	<div class="task-box">
		<div class="tit-bg">
			<span class="tit-chinese">排行榜</span>
		    <span class="tit-eng">THE EVENT</span>
		</div>
		<div>
			<div class="ranking-tit">
				<div v-for="(tab,idx) in rangkingTab" :class="{'rank-flag2':!tab.clicked,'rank-flag1 ranking-checked':tab.clicked}"  @click="ranking(tab.gameId,tab.type,idx)" v-text="tab.name"></div>
			</div>
			<ul class="ranking-list ranking-home">
				<li v-for="(rank,index) in rankingList">
				    <span :class="{'rank-first':index==0,'rank-second':index==1,'rank-third':index==2}"></span>
					<span v-if="index > 2" class="rank-number" v-text="index+1"></span>

                    <span :class="{'head-first':index==0,'head-second':index==1,'head-third':index==2,'icon-head':index>2}"><img class="head" :src="rank.head"></span>

					<span v-text="rank.nickname"></span>
					<span class="rank-score" v-text="rank.total_integral+'分'"></span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
			    rankingList:[],
			    oldClicked:1, //旧的排行榜选中索引
			    rangkingTab:[{
			    	gameId:'16',
			    	type:'w',
			    	name:"周榜",
			    	clicked:false
			    },{
			    	gameId:'20',
			    	type:'m',
			    	name:"月榜",
			    	clicked:false
			    },{
			    	gameId:'16',
			    	type:'m',
			    	name:"总榜",
			    	clicked:false
			    }]
			}
		},
		mounted:function(){
		    //排行榜:默认月榜
		    //this.ranking('20','m',this.oldClicked);
	 	    this.ranking(this.rangkingTab[1].gameId,this.rangkingTab[1].type,this.oldClicked); 
		},
		methods:{
			ranking:function(gameId,type,idx){
				//取消旧的选中
				this.rangkingTab[this.oldClicked].clicked = false;
				//选中单击的tab
                this.rangkingTab[idx].clicked = true;
                //设置旧的索引
                this.oldClicked = idx;
                //获取相应排行版
				this.$http.get("api/activity/sort?gameId="+gameId+"&date="+type).then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.rankingList = respose.data.data.list;
		    			}
		    		}
		        );
			}
		}
	}
</script>
<style lang="less" scoped>
@baseUrl:"./../image/";
.ranking-list span{
	display:inline-block;
}
.ranking-home span{
	float:left;
}
.ranking-tit{
	height: 34px;
	line-height: 30px;
	display:flex;
}
.ranking-tit>div{
	flex:1;
	font-size: 12px;
	color: #2f5465;
	cursor: pointer;
	text-align: center;
	//解决IE不支持flex问题
	float:left;
}
.ranking-list li{
	height: 62px;
	line-height: 62px;
	color: #404a4e;
	padding:0 30px 0 15px;
}
.ranking-list li:nth-child(1),.ranking-list li:nth-child(2),.ranking-list li:nth-child(3){
	font-weight: bold;
}
.ranking-home li:nth-child(1){
    color:#ffba00;
}
.ranking-home li:nth-child(2){
    color:#f0e6d2;
}
.ranking-home li:nth-child(3){
    color:#ff6000;
}
@rank-first:"rank-first.png";
@rank-second:"rank-second.png";
@rank-third:"rank-third.png";
.icon-ranking(@url){
    background: url("@{baseUrl}@{url}") center no-repeat;
    .wh(21px,25px);
    margin-top: 20px;
    margin-right:24px;
}
.rank-number{
    margin-left: 6px;
    margin-right:29px;
    width: 17px;
    text-align:left;
}
.rank-first{
	.icon-ranking("@{rank-first}");
}
.rank-second{
	.icon-ranking("@{rank-second}");
}
.rank-third{
	.icon-ranking("@{rank-third}");
}
.icon-head(@url){
    background: url("@{baseUrl}@{url}") center no-repeat;
    .wh(46px,53px);
    margin-top: 5px;
    margin-right: 20px;
}
@head-first:"head-first.png";
@head-second:"head-second.png";
@head-third:"head-third.png";
.head-first{
	.icon-head("@{head-first}");
	img{
		margin-top: 0;
	}
}
.head-second{
	.icon-head("@{head-second}");
	img{
		margin-top: 6px;
	}
}
.head-third{
	.icon-head("@{head-third}");
	img{
		margin-top: 11px;
	}
}
.rank-score{
	float: right!important;
}
.wh(@width,@height){
    width: @width;
    height: @height;
}
@32px:32px;
.icon-head{
	.wh(@32px,@32px);
     margin-top:6px;
    margin-right: 29px;
}
.head{
	.wh(@32px,@32px);
    border-radius: 50%;
    margin-top: 9px;
}
</style>