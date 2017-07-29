<template>
    <!-- 头部组件 -->
	<div :class="{'header-fixed':headerFixed,'header':!headerFixed}">
	    <div class="inner clearfix">
	    	<router-link to="/">
	    	    <div class="left " :class="{'header-logo-fixed':headerFixed,'header-logo':!headerFixed}"></div>
	    	</router-link>
	    	<div class="left header-nav" :class="{'header-nav-fixed':headerFixed,'header-nav-bg':!headerFixed}">
	    		<ul class="clearfix relative"> 
	    			<li @click="toggleClass(true)">
	    			    <router-link to="/">  
		    			    <img  v-if="!headerFixed" class="left" src="./../image/game-icon.png">
		    			    <div class="left">
		    			    	<p :class="{'l-title-fixed':headerFixed,'l-title':!headerFixed}">游戏分类</p>
			    			    <p v-if="!headerFixed" class="s-title">GAME CLASS</p>
		    			    </div>
		    			    <div class="game-class" v-if="isShowClass" @mouseleave="toggleClass(false)">
		    			    	<router-link to="/match/dota" class="class1"></router-link>
		    			    	<router-link to="/match/dota" class="class2"></router-link>
		    			    	<router-link to="/match/hero" class="class3"></router-link>
		    			    	<router-link to="/match/king" class="class4"></router-link>
		    			    	<router-link to="/match/dota" class="class5"></router-link>
		    			    </div>
	    			    </router-link>
	    			</li>
	    			<li>
	    			    <router-link to="/discuss"> 
			    			<p :class="{'l-title-fixed':headerFixed,'l-title':!headerFixed}">讨论</p>
			    			<p v-if="!headerFixed" class="s-title">DISCUSS</p>
		    			</router-link>
	    			</li>
	    			<li>
	    			    <router-link to="/communication"> 
			    			<p :class="{'l-title-fixed':headerFixed,'l-title':!headerFixed}">玩家交流</p>
			    			<p v-if="!headerFixed" class="s-title">COMMUNICATION</p>
		    			</router-link> 
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="right header-head-right" :class="{'header-head-fixed':headerFixed,'header-head':!headerFixed}">	    	     
		    		<span :class="{'head-bg-fixed':headerFixed,'head-bg':!headerFixed}">
		    		    <img v-if = "!this.$store.state.user.head" src="./../image/head.png" alt="">
		    		    <img v-if="this.$store.state.user.head" :src="this.$store.state.user.head" alt="">
		    		</span>
		    		<!--登陆后的名字-->
		    		<span v-if="this.$store.state.user.nickname" class="color-account" :class="{'font-account':headerFixed}" v-text="this.$store.state.user.nickname">登陆后的名字</span>
		    		<!--没登陆状态下的默认名字-->
		    		<span class="color-account" :class="{'font-account':headerFixed}" style="color:#f0e6d2 ">您好，欢迎
		    		    <router-link to="/login" style="color: #00d3ff">登陆</router-link>
		    		</span>
		    		<!--点击展示 下拉-->
		    		<span class="arrow-down" @click="toggleDown">
		    		    <img v-if="isShowDown" src="./../image/arrow-down.png">
		    		    <img v-if="!isShowDown" src="./../image/arrow-up.png">		    		    
		    		</span>
		    		<!--消息-->
		    		<span class="account-news">
		    		    <img src="./../image/head-news.png" alt="">
		    		    <i></i>
		    		</span>
		    		<!--下拉层-->
		    		<div class="account-down-layer" v-if="isShowDown">
		    		    <div class="account-down">
		    		        <div class="top">
		    		            <!--头像-->
		    		            <div class="head-bg left">
					    		    <img v-if = "!this.$store.state.user.head" src="./../image/head.png" alt="">
					    		    <img v-if="this.$store.state.user.head" :src="this.$store.state.user.head" alt="">	    		            
		    		            </div>
		    		            <!--名字-->
		    		            <div class="name left">
                                    <p class="color">大炮炉dsad石</p>
                                    <p class="" @click="toggleDown"><router-link to="/user-info" class='user-info'>编辑资料</router-link></p>
		    		            </div>
		    		            <span class="btn-out">退出</span>
		    		        </div>
		    		        <div class="money">
		    		            <span class="img"><img src="./../image/gold.png" alt=""></span>		    		      
		    		            <span class="num">0</span>
		    		            <span class="img"><img src="./../image/stone.png" alt=""></span>		    	      
		    		            <span class="num">0</span>
		    		            <span class="img"><img src="./../image/gold.png" alt=""></span>		    		      
		    		            <span class="num">0</span>
		    		        </div>
		    		        <div class="btngo">
		    		            <img src="./../image/recharge-text.png" alt="">
		    		        </div>
		    		    </div>

		    		    <router-link to="/user">
		    		    <div class="gotouser">

		    		        <span @click="toggleDown">进入个人中心</span>
		    		    </div>
		    		    </router-link>
		    		</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				isShowClass:false,
				headerFixed:false,
				isShowDown:false   //是否展示下拉层
			}
		},
		props:['headerFix'],//是否使用固定header(父组件传递回来的参数)
		mounted:function(){
			this.headerFixed = this.headerFix === 'true'; //返回来的字符串转为boolean类型
			//是否使用固定滚动条事件
            if(!this.headerFixed){
                window.addEventListener('scroll', this.handleScroll);	 
            }
		},
		methods:{
			toggleClass:function(bool){
                this.isShowClass = bool;
			},
			handleScroll:function() {
			    this.headerFixed = window.scrollY > 0;
			},
			toggleDown:function(){
				this.isShowDown = !this.isShowDown;
				console.log(this.isShowDow);
			}
		}
	}
</script>