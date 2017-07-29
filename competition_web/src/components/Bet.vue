<template>
	<div  v-if="betSuspendShow">
		<!-- 下注和发起擂台弹框 -->
	    <div class="bet-suspend-box">
	        <div class="relative">
	        	<div class="close" @click="closeBetBox"></div>
		        <div  class="bet-guess" v-if="suspendBoxType==1">
		            <div class="center">
		                <img class="suspend-title-img" src="./../image/bet-title-text.png">
		            </div>
		        	<p style="margin-top:33px;">
					    <span class="tag-icon"></span>
						<span class="bet-guess-title">第一局谁先获得10杀？</span>
					</p>
					<p class="bet-btn-radio clearfix">
						<span class="game-btn3 relative">
						选择vg
						</span>
						<span class="game-btn4 relative">
						选择we
						<img class="radio-checked" src="./../image/s-selected.png">
						</span>
					</p>
					<p>
					    <span class="tag-icon"></span>
						<span class="bet-guess-title">
							我的钱包：<span class="color-gold">2500</span>
							<span class="diamonds-normal"></span>
						</span>
						<span class="bet-guess-title-normal">（已下注：1000）</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="text" v-model="betNumber" placeholder="请输入你要选择的金额">
						<div class="bet-select clearfix">
							<div @click="enterBetNumber(100)">
								<span class="color-grey">100</span><span class="diamonds-normal"></span>
							</div>
							<div @click="enterBetNumber(500)">
								<span class="color-grey">500</span><span class="diamonds-normal"></span>
							</div>
							<div @click="enterBetNumber(1000)">
								<span class="color-grey">1000</span><span class="diamonds-normal"></span>
							</div>
							<div @click="enterBetNumber(2500)">
								<span class="color-grey">全押</span>
							</div>
						</div>
					</div>
					<div class="color-grey center">预计收入：&nbsp;&nbsp;&nbsp;&nbsp;2500</div>
					<div :class="'sure-'+betType"></div>
		        </div>
		        <div class="bet-guess" v-if="suspendBoxType==2">
		            <div class="center">
		                <img class="suspend-title-img" src="./../image/challenge-salary-text.png">
		            </div>
		        	<p style="margin-top:33px;">
					    <span class="tag-icon"></span>
						<span class="bet-guess-title">设置每场挑战金额：</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="number"  placeholder="请输入钻石的数量">
						<span class="input-unit"><img style="margin-top:3px;" src="./../image/diamonds.png"></span>
					</div>
					<p>
					    <span class="tag-icon"></span>
						<span class="bet-guess-title">设置我的擂台总共挑战次数：</span>
					</p>
					<div class="bet-guess-form">
						<input class="bet-input" type="number" placeholder="请输入你要选择的场次">
						<span class="input-unit">场</span>
					</div>
					<p class="bet-rule">
					挑战金是玩家挑战擂台时每场所需的费用，擂主先设置好金额并预存，玩家挑战需要付出同等金额，由单场胜者获得
					</p>
					<p class="bet-remind">
					擂台挑战次数消耗完成擂台挑战结束，挑战结束后对擂主进行钻石结算，擂主可以提前手动结束
					</p>
					<div class="process-btn">
						<img src="./../image/add-reana-text.png">
					</div>
		        </div>
	        </div>
	    </div>
	    <!-- 遮罩层 -->
	    <div class="mask-box"></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				/*suspendBoxType:1,//弹框类型 1.下注 2.发起擂台奖金
				betSuspendShow:false,   //是否显示下注弹框
				betType:'bet', //下注：bet 追加 append*/
                betNumber: '' //下注值
			}
		},
		props:['suspendBoxType','betSuspendShow','betType'],
		methods:{
		    //下注弹框的显示隐藏
		    closeBetBox(){
		    	//告诉使用的父组件关闭弹框
				this.$emit('getChildMess',false);
		    },
		    enterBetNumber(betNumber){
		    	this.betNumber = betNumber;
		    }
		}
	}
</script>
<style lang="less" scoped>
	@baseUrl:"./../image/";
	@bet-suspend:"bet-suspend.png";
	.bet-suspend-box{
	    width: 894px;
	    height: 624px;
	    background: url("@{baseUrl}@{bet-suspend}") no-repeat;
	    z-index: 999;
		margin-left: -447px;
		top: 120px;
		left: 50%;
		position: fixed;
	}
	.bet-suspend-box>.relative{
		padding-top: 38px;
	}
	.bet-suspend-box .close{
		top: -10px;
		right: -10px;
	}
	.suspend-title-img{
		padding-top: 28px;
		padding-bottom: 30px;
	}
	.bet-guess{
		margin-left: 68px;
		margin-right: 68px;
		text-align:left;
		.bet-guess-title{
		    font-size: 16px;
		    font-weight: bold;
		}
		.bet-guess-title-normal{
	        font-size: 16px;
		}
		.color-gold{
			.color(#0bcdb1);
		}
	}
	.color(@color){
		color: @color;
	}
	.bet-select>div{
	    float: left;
	    width: 146px;
	    height: 44px;
	    line-height: 44px;
	    text-align: center;
	    bgckground-color:#091e26;
	    margin-right: 3px;
	    cursor: pointer;
	}
	@sure-append:"sure-append.png";
	@sure-append-hover:"sure-append-hover.png";
	@sure-bet:"sure-bet.png";
	@sure-bet-hover:"sure-bet-hover.png";
	.sure-append,.sure-bet{
	   width: 222px;
	   height: 45px;
	   margin:24px auto;
	}
	.sure-append{
	   background: url("@{baseUrl}@{bet-suspend}") no-repeat;
	}
	.sure-append:hover{
		background: url("@{baseUrl}@{sure-append}") no-repeat;
	}
	.sure-bet{
	   background: url("@{baseUrl}@{sure-bet}") no-repeat;
	}
	.sure-bet:hover{
		background: url("@{baseUrl}@{sure-bet-hover}") no-repeat;
	}
	.bet-btn-radio{
		margin: 27px 0 38px 44px;
		width: 332px;
		span{
			margin-right: 43px;
		}
		.radio-checked{
			position: absolute;
			top: -6px;
			left: 115px;
		}
	}
	.bet-rule,.bet-remind{
		font-size: 12px;
		margin-left: 44px;
	}
	.bet-rule{
		.color(#e0b264);
		margin-top: 35px;
	}
	.bet-remind{
		.color(#60696e);
		margin-top: 18px;
		margin-bottom: 40px;
	}
	.bet-guess .bet-guess-form{
		margin-top: 28px;
	}
	@input-bet-bg:"input-bet-bg.png";
	.bet-guess .bet-input{
		margin-bottom:3px;
		background: url("@{baseUrl}@{input-bet-bg}") no-repeat;
	    width: 557px;
	    height: 44px;
	    border: 3px solid #091e26;
	}
</style>