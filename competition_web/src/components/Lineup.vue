<template>
   <!-- 阵容选择弹框组件 -->
    <div v-if="isShowLineupBox">
	    <div class="lineup-box" >
		    <div class="relative">
		        <div class="lineup-person-title clearfix">
		    		<span class="tag-icon left"></span>
		    		<span class="mr14 team-style-text left"></span>
		    		<select-web :dataArray="teamStyle" selected=2></select-web>
		    	</div>
		    	<p class="lineup-person-title">
		    		<span class="tag-icon"></span>
		    		<span class="mr14 person-title-icon1"></span>
		    		<span class="color-grey" v-if="needPersonNumber>0">（还需<span v-text="needPersonNumber"></span>名队员选择）</span>
		    	</p>
		    	<div class="lineup-list clearfix"> 
		    		<div v-for="(item,idx) in lineupList" @click="getPlayers(userlocation.battle[idx].id)">
		    		    <img style="width:58px;height:58px;" :src="item.head">
		    			<span class="lineup-selected">
		    			    <img style="width:18px;height:16px;" :src="'icon-grey-lineup'+(idx+1)+'.png' | url" v-if="item.name==''">
		    			    <img :src="'icon-lineup'+(idx+1)+'.png' | url"  v-if="item.name!=''">
		    				<span class="blod" v-text="item.name"> </span>
		    			</span>
		    			<span class="delete-btn" v-if="item.role!=0" @click="cancelPersonSelect(idx)"></span>
		    		</div>
		    	</div>
		    	<p class="lineup-person-title">
		    		<span class="tag-icon"></span>
		    		<span class="mr14 person-title-icon2"></span>
		    		<span class="color-red" v-text="'￥'+userlocation.battle_money+'万'"></span>
		    		<span class="color-grey">(原200万-300万-400万)</span>

		    		<span class="mr14 person-title-icon3" style="margin-left:130px;"></span>
		    		<span class="color-blue1">3620.22</span>
		    		<span class="color-grey">(5555+2603+50120)</span>
		    	</p>
		    	<div class="lineup-person-anal">
			    	<div class="lineup-tab">
			    		<span v-for="(club,index) in clubs" @click="tabClicked(club,index)" :class="{'lineup-tab-clicked':club.clicked}">
			    		    {{club.name}}
			    		    <span :class="{'rank-flag2':!club.clicked,'rank-flag1':club.clicked}"></span>
			    		</span>
			    		<div class="lineup-tab-select color-yellow">
			    		    <span>当前选择：</span>
	                        <span class="select select-normal">
		                        <img src="./../image/icon-lineup2.png">
		                        中单
		                        <img src="./../image/select.png">
	                        </span>
			    		</div>
			    	</div>
		    		<ul class="lineup-person-list" id="lineup-person-list">
		    		    <li @click="selectPerson(player,idx)" v-for="(player,idx) in players">
			    			<div class="pl pr p-item">
			    			   <span class="head-border">
			    			       	<img :src="player.head">
			    			   </span>
			    			   <span class="c-2">
				    			   <span clas="blod" v-text="player.name"></span>
				    			   <span class="c-score font12">(JAG)</span>
				    			   <!-- <span class="icon-selected"></span> -->
			    			   </span>
			    			   <span class="c-score font12 c-3">VS EDG</span>
			    			   <span class="color-red c-4" v-text="'￥ '+player.price+' 万'"></span>
			    			   <span class="c-5">
				    			   <span class="c-score">战力：</span>
				    			   <span v-text="player.power"></span>
				    			</span>
			    			   <span class="c-6">
			    			   <span class="c-score">状态</span>
			    			   </span>
			    			   <span class="blod font12 color-yellow right" @click.stop="toggleDetail(player,idx)">
				    			   <span v-if="!player.isOpen">查看更多</span>
				    			   <span v-if="player.isOpen">取消</span>
				    			   <span :class="{'icon-open':!player.isOpen,'icon-cancel':player.isOpen}"></span>
			    			   </span>
		    			   </div>
		    			   <div class="clearfix data-detail pr" v-if="player.isOpen">
		    			        <div class="left radar-map" :id="'radar-map'+idx"></div>
		    			        <div class="right">
		    			        	<table cellspacing="0" cellpadding="0" class="person-detail-data">
									    <thead>
									    	<tr class="clearfix">
									    		<th style="width:80px;">往期比赛</th>
									    		<th style="width:56px;">场均分数</th>
									    		<th style="width:56px;">参赛场次</th>
									    		<th>K(+2)</th>
									    		<th>D(-0.5)</th>
									    		<th>A(+1.5)</th>
									    		<th>补刀(+0.1)</th>
									    		<th>插眼(+0.2)</th>
									    		<th>排眼(+0.2)</th>
									    		<th>小龙(+2)</th>
									    		<th style="margin-right:0">大龙(+4)</th>
									    	</tr>
								    	</thead>
								    	<tbody>
											<tr class="clearfix" v-for="data in player.child"> 
											   <!--  <span class="color-blue1">JAG</span> vs EDG -->
												<td style="width:80px;" v-text="data.battle"></td>
												<td style="width:56px;" v-text="data.total_pts"></td>
												<td style="width:56px;" v-text="data.player_count">上单</td>
												<td style="width:34px;">JAG</td>
												<td style="width:42px;">80.5</td>
												<td style="width:46px;">60.563</td>
												<td style="width:61px">3</td>
												<td style="width:60px">11</td>
												<td style="width:61px">3</td>
												<td style="width:50px">11</td>
												<td style="width:50px;margin-right:0">3</td>
											</tr>
										</tbody>	
								    </table>
		    			        </div>
		    			   </div>
		    			</li>
		    		</ul>
		    	</div>
		    	<div class="clearfix lineup-btn-area">
		    		<div class="recommend-btn left">
		    			<span class="recommend-number color-blue1">4</span>
		    		</div>
		    		<div class="sure-btn left"></div>
		    	</div>
		    	<div class="close" @click="closeLineupBox"></div>
	    	</div>
	    </div>
	    <!-- 遮罩层 -->
		<div class="mask-box"></div>
	</div>
</template>
<script>
    //加入支持滚轮功能
	require("jquery-mousewheel");
	//自定义滚动条
	require("malihu-custom-scrollbar-plugin");
    import selectWeb from './Select'
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	// 引入雷达图
	require('echarts/lib/chart/radar');
	// 引入标题和图例组件
	require('echarts/lib/component/title'); 
	require('echarts/lib/component/legend');
	import './../plugins/scroll/jquery.mCustomScrollbar.css'
	export default{
		data:function(){
			return{
				lineupList:[{
                    head:require("./../image/person-select.png"),
                    name:'',
                    role:0
				},{
                    head:require("./../image/person-select.png"),
                    name:'',
                    role:0
				},{
                    head:require("./../image/person-select.png"),
                    name:'',
                    role:0
				},{
                    head:require("./../image/person-select.png"),
                    name:'',
                    role:0
				},{
                    head:require("./../image/person-select.png"),
                    name:'',
                    role:0
				}],
				needPersonNumber:5,
				isOpen:false,
				isChecked:false, //阵容弹框列表选中
				teamStyle:"[{id:1,name:'进攻激进'},{id:2,name:'稳健运营'},{id:3,name:'持久防守'}]",
				clubs:[],  //阵容选择clubs列表
				oldClubIndex:0,//默认选中所有
				players:[], //阵容用户列表
				userlocation:{
					battle:[
						{id: 2, name: "上单"},
						{id: 3, name: "中单"},
						{id: 4, name: "打野"},
						{id: 5, name: "ADC"},
						{id: 6, name: "辅助"}
					],
					battle_money:"2000",
					player_money:0
				}
			}
		},
		props:["isShowLineupBox"],
		components:{selectWeb},
		mounted:function(){ 
			//this.getUserLocation();
	    },
	    watch:{
	    	isShowLineupBox:function(newValue, oldValue){
	    		//监听弹框打开时才请求查询阵容列表
	    		if(newValue){
	    			this.getPlayers(2);
	    		}
	    	}
	    },
		methods:{
			toggleDetail:function(item,idx){
				//判断是否显示阵容用户详细数据的属性
	            if(typeof item.isOpen == "undefined"){
	                this.$set(item,"isOpen",false);
	            }else{
	                item.isOpen = !item.isOpen;
	            }
				//展开时进行雷达图绘制
				if(item.isOpen){
					//dom更新完成
	                this.$nextTick(function () {
				        this.drawPie('radar-map'+idx);
				        this.customScrollbar();
				        this.getPlayerData(item);
				    })
				}
			},
			closeLineupBox:function(bool){
				//告诉使用的父组件关闭弹框
				this.$emit('getChildMess',false);
			},
			customScrollbar(){
				setTimeout(function(){
					$("#lineup-person-list").mCustomScrollbar({
						autoDraggerLength:true //自动调节滚动条高度
					});
				},0)
			},
			drawPie:function(id) {
		        var chart = echarts.init(document.getElementById(id));
		        chart.setOption({
				    tooltip: {},
				    color:['rgba(243,69,39,1)','rgba(243,217,39,1)'],//透明度问题
				    legend: {
				    	itemWidth:25,//图例图形宽度
				    	itemHeight:7,//图例图形高度
				    	y:'bottom', // 图例垂直位置
				        data: ['近期表现', '均场表现'],
				        textStyle:{
				        	color:"#f0e4ca" // 图例文字颜色
				        }
				    },
				    radar: {
				    	nameGap:5, //指示器与名称的距离
				        splitNumber :4,//分割段数
				        splitArea: {//背景分割区域
				            areaStyle: {
				                color: ['#09bdb6','#067474','#044448','#03262c']
				            }
				        },
				        splitLine:{ //背景分隔线
                            lineStyle:{
                            	color:['#38fff7','#38fff7','#38fff7','#38fff7'],
                            }
				        },
				        indicator: [
				           { name: '生存', max: 100},
				           { name: '助攻', max: 100},
				           { name: '经济', max: 100},
				           { name: '团战', max: 100},
				           { name: '英雄池', max: 100},
				           { name: 'K/D/A', max: 100}
				        ],
				        radius:70
				    },
				    series: [{
				        name: '预算 vs 开销（Budget vs spending）',
				        type: 'radar',
				        itemStyle: {//图形样式，可设置图表内图形的默认样式和强调样式（悬浮时样式）：
		                    normal: {
		                        areaStyle: {
		                            type: 'default'
		                        }
		                    }
		                },
				        data : [
				            {
				                value : [43, 100, 28, 65, 70, 49],
				                name : '近期表现'
				            },
				             {
				                value : [50, 84, 28, 71, 42, 58],
				                name : '均场表现'
				            }
				        ]
				    }]
				})
		    },
		    //选择用户显示并计算所需选择人数
		    selectPerson(player,idx){
		    	if(this.needPersonNumber){
		    		//当某个角色为未选时才减少所需人数，已经选过的就覆盖信息即可
		    		if(!this.lineupList[idx].role){
		    			this.needPersonNumber--;
		    		}
		    		this.lineupList[idx].name = player.name;
			    	this.lineupList[idx].role = player.location;
			    	this.lineupList[idx].head = player.head;
		    	}
                
		    },
		    //取消用户选中并计算所需选择人数
		    cancelPersonSelect(idx){
                this.lineupList[idx].name = "";
		    	this.lineupList[idx].role = 0;
		    	this.lineupList[idx].head = require("./../image/person-select.png");
		    	this.needPersonNumber++;
		    },
		    //获取阵容用户列表和clubs
		    getPlayers(locationId,clubId){
		    	//没有传俱乐部id则传""
		    	if(!clubId){
                    clubId="";
		    	}
		    	this.$http.get("api/players?activityId=673&locationId="+locationId+"&clubId="+clubId).then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
		    				//先清空之前的数据
                            this.players = respose.data.data.players;
                            this.clubs = respose.data.data.clubs;
                            this.clubs.unshift({id:'',name:'所有',clicked:true});
                            this.$nextTick(function () {
						        this.customScrollbar();
						    })
		    			}
		    		}
		        );
		    },
		    //获取阵容用户详细数据
		    getPlayerData(item){
		    	this.$http.get("api/players/data?playerId="+item.id).then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
		    				//先清空之前的数据
				            this.$set(item,"child",respose.data.data);
		    			}
		    		}
		        );
		    },
		    getUserLocation(applyId){
		    	this.$http.get("api/activity/userlocation?applyId=4184").then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.userlocation = respose.data.data;
		    			}
		    		}
		        );
		    },
		    tabClicked(club,index){
	            if(index != this.oldCheckIndex){
                    if(typeof club.clicked == "undefined"){
		                this.$set(club,"clicked",true);
		            }else{
		                club.clicked = true;
		            }
	                this.clubs[this.oldClubIndex].clicked = false;
	                this.oldClubIndex = index;
		    	}  
		    	//this.getPlayers(2,club.clubId);
		    }
		},
		//本地图片显示过滤
        filters: {
            url: function (url) {
                return require("./../image/"+url);
            }
        }
	}
</script>
<style lang="less" scoped>
	@baseUrl:"./../image/";
	@lineup-box:"lineup-box.png";
	.lineup-box{
		z-index: 999;
		.icon(1235px,1258px,@lineup-box);
		margin-left: -617px;
		position: absolute;
		top: 460px;
		left: 50%;
	}
	.icon(@width,@height,@url){
		width: @width;
		height: @height;
	    .bg-img(@url);
	}
	.lineup-box>.relative{
	    padding-top: 33px;
	}
	.lineup-box .close{
		top: -26px;
		right: -31px;
	}
	.bg-img(@url){
		background: url("@{baseUrl}@{url}") no-repeat;
	}
	@person-title-icon1:"person-title-icon1.png";
	@person-title-icon2:"person-title-icon2.png";
	@person-title-icon3:"person-title-icon2.png";
	@team-style-text:"team-style-text.png";
	.lineup-person-title{
		margin-left: 64px;
		margin-top: 47px;
		text-align:left;
		.mr14{
			display:inline-block;
			margin-right: 14px;
			width: 63px;
			height: 17px;
			vertical-align: -4px;
		}
		.team-style-text{
			.bg-img(@team-style-text);
		}
		.person-title-icon1{
			.bg-img(@person-title-icon1);
		}
		.person-title-icon2{
			.bg-img(@person-title-icon2);
		}
		.person-title-icon3{
			.bg-img(@person-title-icon3);
		}
		.color-red{
			font-size: 16px;
			font-weight: bold;
			margin-right: 12px;
		}
		.color-blue1{
			margin-right: 12px;
		}
	}
	@lineup-normal:"lineup-normal.png";
	@lineup-selected:"lineup-selected.png";
	.lineup-list{
		display:flex;
		margin-left: 60px;
		.lineup-normal{
			.icon(124px,35px,@lineup-normal);
		}
		.lineup-selected{
			.icon(124px,35px,@lineup-normal);
		}
		.lineup-normal,.lineup-selected{
			display:inline-block;
			position: absolute;
			top: 24px;
			left: 43px;
		    z-index: -1;
		    padding-left: 10px;
		    line-height: 35px;
		}
	}

	.lineup-list>div{
		float: left;
		position: relative;
		margin-top: 18px;
		width: 170px;
	}
	.lineup-list img{
		vertical-align: middle;
	}
	@close-btn:"close-btn.png";
	.delete-btn{
		.icon(26px,26px,@close-btn);
		background-size: contain;
		position: absolute;
		top: 0;
		left: 120px;
		cursor: pointer;
	}
	.lineup-person-anal{
		margin:47px 62px;
	}
	.lineup-tab{
		text-align:left;
	}
	.lineup-tab>span{
		display:inline-block;
		width: 106px;
		height: 36px;
		line-height: 34px;
		background-color: #04141c;
		text-align:center;
		margin-right: 3px;
		position:relative;
		cursor: pointer;
		color:#294a59;
	}
	.lineup-tab-select{
		float: right;
		margin-right: 54px;
		.select{
			img:nth-child(1){
				vertical-align: -4px;
			}
			img:nth-child(2){
				vertical-align: -2px;
			}
		}
	}

	.lineup-tab-clicked{
		color:#f0e6d2!important;
	}
	@rank-flag2:"rank-flag2.png";
	@rank-flag1:"rank-flag1.png";
	.lineup-tab .rank-flag2,.lineup-tab .rank-flag1{
	    position: absolute;
		top: 34px;
		left: 0;
	}
	.lineup-tab .rank-flag2{
	    .icon(106px,5px,@rank-flag2);
	}
	.lineup-tab .rank-flag1{
	    .icon(106px,5px,@rank-flag1);
	}
	.lineup-person-list{
		background-color: #04141c;
		height: 500px;
		overflow: auto;
		padding-top: 46px;
		padding-bottom: 42px;
		span{
	        display:inline-block;
		}
	}
	.lineup-person-list li{
		line-height: 62px;
		.icon-open,.icon-cancel{
			margin-left: 5px;
		}
		.color-yellow{
			cursor: pointer;
		}
	}
	.lineup-person-list li:nth-child(even){
	    background-color: #041923;
	}
	.c-2{
		width: 150px;
	}
	.c-3,.c-4{
		width: 130px;
	}
	.c-5{
	    width: 180px;
	}
	.c-6{
	    width: 250px;
	}
	@recommend-btn:"recommend-btn.jpg";
	@sure-btn:"sure-btn.jpg";
	@recommend-btn-hover:"recommend-btn-hover.jpg";
	@sure-btn-hover:"sure-btn-hover.jpg";
	.recommend-btn{
	    .icon(315px,72px,@recommend-btn);
	    position: relative;
	    margin-left: 248px;
	    margin-right: 100px;
	}
	.sure-btn{
		.icon(315px,72px,@sure-btn);
	}
	.recommend-btn:hover{
	    .icon(315px,72px,@recommend-btn-hover);
	}
	.sure-btn:hover{
		.icon(315px,72px,@sure-btn-hover);
	}
	.lineup-btn-area{
		padding-top: 60px;
	}
	.recommend-number{
	    position: absolute;
	    top: 27px;
	    left: 200px;
	}
	.lineup-btn-area>div{
		cursor: pointer;
	}
	.radar-map{
		width: 218px;
		height: 220px;
		margin-bottom: 18px;
	}
	.person-detail-data{
		font-size: 12px;
		color:#f0e4ca;
		width: 797px;
		padding-top: 29px;
		padding-bottom: 29px;
	}
	.person-detail-data td,.person-detail-data th{
		display:inline-block;
		margin-right: 20px;
		float:left;
		text-align:center;
	}
	.person-detail-data tr{
		height: 38px;
		line-height: 38px;
	}
	.person-detail-data tbody tr:nth-child(1) td{
		margin-top: 5px;
	}
	.data-detail{
		background-color: #04141c;
	}
	.pl{
		padding-left: 32px;
	}
	.pr{
		padding-right: 53px;
    }
</style>