<template>
    <!-- 用户中心页面 -->
	<div class="user-bg-big">
		<competiton-header headerFix='false'></competiton-header>
		<div class="inner clearfix">
			<div class="user-left task-box">
				<div class="clearfix userTab">
					<div v-for="(u,index) in userTab" :class="{'user-tab-active':u.clicked==true}" @click="userTabClick(u,index)">
						<img v-if="u.clicked==false" :src="u.img | url">
						<img v-if="u.clicked==true" :src="u.activeImg | url" >
					</div>
				</div>
				<!--账户信息-->
				<div class="account-info clearfix" v-if="oldCheckIndex==0">
					<div>
						<img src="./../../image/user-diamonds.png">
						<img  class ="icon" src="./../../image/diamonds-icon.png" style="padding:0 59px;">
						<p class="value" v-text="user.diamonds"></p>
						<div class="recharge-btn">
							<img  src="./../../image/recharge-text.png">
						</div>
						<img class="rule" src="./../../image/diamonds-rule-text.png">
						<div class="rule-detail">
							<p>
								1.玩家可以通过网银或第三方支付品台等方式向游侠充值。
							</p>
							<p>
								2.钻石只能用于报名电竞经理内游戏房间的相关竞猜。
							</p>
							<p>
								3.钻石不能兑换现金，不能进行转账交易，不能兑换本公司体系外的产品和服务。
							</p>
						</div>
					</div>
					<div>
						<img src="./../../image/user-gold.png">
						<img class ="icon" src="./../../image/gold-icon.png"> 
						<p class="value" v-text="user.gold"></p>
						<div class="extract-btn">
							<img  src="./../../image/recharge-text.png">
						</div>
						<div class="extract-remind">免费提现到支付宝</div>
						<img src="./../../image/gold-rule-text.png">
						<div class="rule-detail">
							<p>
								1.金币是社区中的虚拟币。
							</p>
							<p>
								2.用户可以通过完成比赛任务获取相应任务金币奖励。
							</p>
							<p>
								3.金币可用来兑换现金奖励。（比例为1：:100）
							</p>
						</div>
					</div>
					<div>
						<img src="./../../image/user-diamonds.png">
						<img class ="icon" src="./../../image/gold-icon.png">
						<p class="value" v-text="user.gold"></p>
						<div class="extract-btn">
							<img  src="./../../image/recharge-text.png">
						</div>
						<img class="rule" src="./../../image/gold-rule-text.png">
						<div class="rule-detail">
							<p>
								1.金币是社区中的虚拟币。
							</p>
							<p>
								2.用户可以通过完成比赛任务获取相应任务金币奖励。
							</p>
							<p>
								3.金币可用来兑换现金奖励。（比例为1：100）
							</p>
						</div>
					</div>
				</div>
				<!--钻石流水-->
				<div class="diamonds-list" v-if="oldCheckIndex==1">
					<ul class="list">
						<li v-for="diamond in list">
							<span class="blod color-gold">流水号：</span>
							<span class="blod flowing" v-text="diamond.order_no"></span>
							<span class="time-icon"></span>
							<span class="color-grey" v-text="diamond.add_time"></span>
							<span class="clumn4" :class="{'color-blue-user':diamond.type=='报名费用','color-match-user':diamond.type=='比赛奖金'}" v-text="diamond.type"></span>
							<span class="color-blue-user number" :class="{'color-blue-user':diamond.diamonds>=0,'color-match-user':diamond.diamonds<0}">{{diamond.diamonds | numberChange}}</span>
							<span class="icon-stone"></span>
						</li>
					</ul>
					<div class="clearfix pagation" v-if="listLength>10">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
				<!--金币流水-->
				<div class="gold-list" v-if="oldCheckIndex==2">
					<ul class="list">
					    <li v-for="diamond in list">
							<span class="blod color-gold">流水号：</span>
							<span class="blod flowing" v-text="diamond.order_no"></span>
							<span class="time-icon"></span>
							<span class="color-grey" v-text="diamond.add_time"></span>
							<span class="clumn4" :class="{'color-blue-user':diamond.type=='报名费用','color-match-user':diamond.type=='比赛奖金'}" v-text="diamond.type"></span>
							<span class="color-blue-user number" :class="{'color-blue-user':diamond.diamonds>=0,'color-match-user':diamond.diamonds<0}">{{diamond.diamonds | numberChange}}</span>
							<span class="icon-stone"></span>
						</li>
						<li>
							<span class="blod color-gold">流水号：</span>
							<span class="blod flowing">201706301655520130130010</span>
							<span class="time-icon"></span>
							<span class="color-grey">07-05 12:00</span>
							<span class="color-blue-user clumn4">报名费用</span>
							<span class="color-blue-user number">0</span>
							<span class="icon-stone"></span>
						</li>
						<li>
							<span class="blod color-gold">流水号：</span>
							<span class="blod flowing">201706301655520130130010</span>
							<span class="time-icon"></span>
							<span class="color-grey">07-05 12:00</span>
							<span class="color-match-user clumn4">比赛奖金</span>
							<span class="color-match-user number">+3</span>
							<span class="icon-stone"></span>
						</li>
					</ul>
					<div class="clearfix pagation" v-if="listLength>10">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
				<!--购买记录-->
				<div class="buy-list" v-if="oldCheckIndex==3">
					<ul class="list">
						<li>
							<span class="blod color-gold">充值 10￥</span>
							<span class="blod">获得10</span><span class="icon-stone"></span>
							<span class="time-icon"></span>
							<span class="color-grey">2017-07-05 12:00</span>
						</li>
						<li>
							<span class="blod color-gold">充值 10￥</span>
							<span class="blod">获得10</span><span class="icon-stone"></span>
							<span class="time-icon"></span>
							<span class="color-grey">2017-07-05 12:00</span>
						</li>
						<li>
							<span class="blod color-gold">充值 10￥</span>
							<span class="blod">获得10</span><span class="icon-stone"></span>
							<span class="time-icon"></span>
							<span class="color-grey">2017-07-05 12:00</span>
						</li>
					</ul>
					<div class="clearfix pagation">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
				<!--提现记录-->
				<div class="extract-list" v-if="oldCheckIndex==4">
					<ul class="list">
						<li>
							<span class="blod color-gold">提现100</span>
							<span class="blod">支付宝号15928519966</span>
							<span class="time-icon"></span>
							<span class="color-grey time">07-05 12:00</span>
							<span class="color-blue-user state">处理中</span>
						</li>
						<li>
							<span class="blod color-gold">提现1000</span>
							<span class="blod">支付宝号15928519966</span>
							<span class="time-icon"></span>
							<span class="color-grey time">07-05 12:00</span>
							<span class="color-grey state">转出成功</span>
						</li>
						<li>
							<span class="blod color-gold">提现1000</span>
							<span class="blod">支付宝号15928519966</span>
							<span class="time-icon"></span>
							<span class="color-grey time">07-05 12:00</span>
							<span class="color-match-user state">转出失败</span>
						</li>
					</ul>
					<div class="clearfix pagation">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
				<!--我的消息-->
				<!-- 避免下拉内容冲突 使用v-show-->
				<div class="new-list" v-show="oldCheckIndex==5">
					<div class="new-bar clearfix">
						<div class="color-blue-user left">全部标记为已读</div>
						<div class="color-yellow left cen">最新消息</div>
						<div class="color-yellow left" >分类：</div>
						<select-web :dataArray="isReadSelect" selected=3></select-web>
					</div>
					<ul class="list">
						<li>
						    <span class="clumn1">
							    <span class="circular-red"></span>	
								<span class="blod color-gold">你参加的竞猜赛事
								<a href="">《LCK-周六免费场》</a>赢得可5</span>
								<span class="icon-stone"></span>
							</span>
							<span class="color-grey time">2017-07-05 12:00</span>
						</li>
						<li>
						    <span class="clumn1">
							    <span class="circular-red"></span>	
								<span class="blod color-gold">你参加的竞猜赛事
								<a href="">《LCK-周六免费场》</a>赢得可5</span>
								<span class="icon-stone"></span>
							</span>
							<span class="color-grey time">2017-07-05 12:00</span>
						</li>
						<li>
						    <span class="clumn1">
								<span class="blod color-grey">你参加的竞猜赛事
								<a href="" class="color-grey">《LCK-周六免费场》</a>赢得可500</span>
								<span class="icon-stone"></span>
							</span>
							<span class="color-grey time">2017-07-05 12:00</span>
						</li>
						<li>
						    <span class="clumn1">
								<span class="blod color-grey">你参加的竞猜赛事
								<a href="" class="color-grey">《LCK-周六免费场》</a>赢得可500</span>
								<span class="icon-stone"></span>
							</span>
							<span class="color-grey time">2017-07-05 12:00</span>
						</li>
					</ul>
					<div class="clearfix pagation">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
				<!--我的比赛-->
				<!-- 避免下拉内容冲突 使用v-show-->
				<div class="my-match-list" v-show="oldCheckIndex==6">
					<div class="new-bar clearfix">
						<div class="color-yellow left cen" style="margin-left:415px;">近期比赛</div>
						<div class="color-yellow left" >分类：</div>
						<select-web :dataArray="matchSelect" selected=3></select-web>
					</div>
					<ul class="m-list">
						<li>
						    <span class="tag left"></span>
						    <span class="head-border">
			    	        	<img src="./../../image/person.png">
			    	        </span>	
						    <span class="clumn1 blod">
								<span class="color-gold">nick </span>的天梯挑战赛<br/>
								<span class="color-grey font10">天梯赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">挑战费</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3" style="margin-right:132px">
								<span class="color-blue-user font12">距开赛：2天10小时30分</span>
							</span>
							<span class="color-match-user blod">未开始</span>
						</li>
						<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span>LCK-周六免费场 </span><br/>
								<span class="color-grey font10">真实互动赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">报名费</span>
								<span class="color-blue-user blod">30</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3" style="margin-right:132px">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-match-user blod">进行中</span>
						</li>
						<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span class="color-gold">我 </span>发布的擂台挑战赛<br/>
								<span class="color-grey font10">擂台赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">下注EDG</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3" style="margin-right:132px">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-blue blod">进行中</span>
						</li>
							<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span class="color-gold">我 </span>发布的擂台挑战赛<br/>
								<span class="color-grey font10">擂台赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">下注EDG</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-grey clumn4 blod">已结束</span>
							<span class="color-match-user number">+3</span>
							<span class="icon-stone"></span>
						</li>
						<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span>第一局谁先获得10杀？</span><br/>
								<span class="color-gold font10">夏季赛  <span class="color-grey">竞猜</span></span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">下注EDG</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-grey clumn4 blod">已结束</span>
							<span class="color-blue-user number">-3</span>
							<span class="icon-stone"></span>
						</li>
						<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span class="color-grey">第一局谁先获得10杀？</span><br/>
								<span class="color-grey font10">天梯赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">下注EDG</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-grey clumn4 blod">已结束</span>
							<span class="color-blue-user number">-3</span>
							<span class="icon-stone"></span>
						</li>
						<li>
						    <span class="tag left"></span>
						    <span class="star"></span>	
						    <span class="clumn1 blod">
								<span class="color-grey">第一局谁先获得10杀？</span><br/>
								<span class="color-grey font10">天梯赛</span>
							</span>
							<span class="clumn2">
								<span class="color-grey blod">下注EDG</span>
								<span class="color-blue-user blod">0</span>
								<span class="icon-stone"></span>
							</span>
							<span class="clumn3">
								<span class="time-icon"></span>
							    <span class="color-grey">07-05 12:00</span>
							</span>
							<span class="color-grey clumn4 blod">已结束</span>
							<span class="color-blue-user number">-3</span>
							<span class="icon-stone"></span>
						</li>
					</ul>
					<div class="clearfix pagation">
						<span class="left">上一页</span>
						<span class="right">下一页</span>
					</div>
				</div>
			</div>
			<!--个人中心右边公共组件-->
			<div class="user-right">
				<user-info :isGetUser="isGetUser" @getChildInfo='listenToU'></user-info>
			</div>
		</div>
		<competiton-footer class="footer"></competiton-footer>
		<!--公用弹窗-->
		<confirm></confirm>
		<!--提现到支付宝-->
		<DepositAlipay></DepositAlipay>
		<!--绑定支付宝-->
		<Bindalipay></Bindalipay>
		<!--扫码支付-->
		<Codetopay></Codetopay>
		<!--砖石充值-->
		<Diamondpay></Diamondpay>
		<!-- 遮罩层 -->
	    <div class="mask-box" v-if="isMaskBox"></div>
	</div>
</template>
<script>
    import selectWeb from './../../components/Select'
    import UserInfo from './../../components/Userinfo'
    import DepositAlipay from './../../components/Depositalipay'
    import Bindalipay from './../../components/Bindalipay'
    import Codetopay from './../../components/Codetopay'
    import Diamondpay from './../../components/Diamondpay'
	export default{
		data:function(){
			return{
				userTab:[{
					img:'user-tab1.png',
					activeImg:'user-tab1-hover.png',
					clicked:true
				},{
					img:'user-tab2.png',
					activeImg:'user-tab2-hover.png',
					clicked:false
				},{
					img:'user-tab3.png',
					activeImg:'user-tab3-hover.png',
					clicked:false
				},{
					img:'user-tab4.png',
					activeImg:'user-tab4-hover.png',
					clicked:false
				},{
					img:'user-tab5.png',
					activeImg:'user-tab5-hover.png',
					clicked:false
				},{
					img:'user-tab6.png',
					activeImg:'user-tab6-hover.png',
					clicked:false
				},{
					img:'user-tab7.png',
					activeImg:'user-tab7-hover.png',
					clicked:false
				}],
				oldCheckIndex:0,
				isReadSelect:"[{id:1,name:'全部'},{id:2,name:'未读'},{id:3,name:'已读'}]",
				matchSelect:"[{id:1,name:'全部'},{id:2,name:'未开始'},{id:3,name:'进行中'},{id:4,name:'已结束'}]",
				list:[], //请求回的数据
				listLength:0,
				isGetUser:false,
				isMaskBox:false //是否显示遮罩层,
			}
		},
		computed:{
			user(){
				return this.$store.state.user;
			},
		},
		created:function(){
		
		},
		mounted:function(){ 

			window.scrollTo(0,0);//页面跳转时在顶部
			
			console.log(location.t);
			//如果状态中没有用户信息对象才查询否则直接取
			if(!this.user.nickname){
				console.log(location.t);
                this.getUserInfo();
			}else{
				this.isGetUser = true;
			}

	    },
	    components:{selectWeb,UserInfo,DepositAlipay,Bindalipay,Codetopay,Diamondpay},
		methods:{
			//获取子组件的值并处理
			listenToU(boolean){
				this.isMaskBox = boolean;
			},
		    userTabClick(item,index){
		    	if(index != this.oldCheckIndex){
		            item.clicked = true;
	                this.userTab[this.oldCheckIndex].clicked = false;
	                this.oldCheckIndex = index;
		    	}  
		    	switch (index){ 
					case 1 : 
					    this.getList("api/user/userdiamondshistory");
					    break; 
					case 2 : 
					    this.getList("api/user/usergoldhistory");
					    break; 
					case 3 : 
					    this.getList("api/user/buydiamondshistory");
					    break; 
					case 4 : 
					    this.getList("api/user/withDrawals");
					    break; 
					case 5 : 
					    this.getList("api/messagelist");
					    break;
					case 6 : 
					    this.getList(" api/activity/userjoinactivity");
					    break;                  
				} 
		    },
		    getList(url){
                this.$http.get(url).then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                           this.list = respose.data.data;
                           this.listLength = this.list.length;
		    			}
		    		}
		        );
		    },
		    getUserInfo(){
				this.$http.get("api/user/userinfo").then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.user = respose.data.data;
                            this.$store.state.user = respose.data.data;
                            this.isGetUser = true;
		    			}
		    		}
		        );
			},
		},
		filters: {
            url: function (url) {
                return require("./../../image/"+url);
            },
            numberChange(number){
            	if(number > 0){
                    return "+"+number;
            	}else if(number < 0){
                    return "-"+number;
            	}else{
                    return number;
            	}
            }
        }
	}
</script>
<style lang="less">
    @import url('./user.less');
</style>