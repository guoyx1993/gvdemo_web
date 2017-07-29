<template>
    <!-- 个人中心右边公共组件 -->
	<div>
		<p class="edit-user">
		<router-link to="/user-info" class="color-user">
		    <span>编辑资料</span><img src="./../image/edit-icon.png">
		</router-link>
		</p>
		<p class="user-head-border"> 
			<img :src="user.head">
		</p>
		<p class="user-title" v-text="user.nickname"></p>
		<p class="user-wechat" @click="wechatBind(true)"><img src="./../image/wechat-icon.png"><span>点此绑定微信账号</span></p>
		<div class="invitation">
			<div class="invitation-code">
				<span>我的邀请码：</span>
				<label class="color-blue blod" v-text="user.code"></label>
			</div>
			<div class="clearfix invitation-info">
				<img src="./../image/rule-icon.png" class="left">
				<div>
					<p>
					    <span>我邀请的用户：</span>
					    <span>5人</span>
					    <span class="copy" data-clipboard-action="copy" data-clipboard-target="label">复制</span>
					</p>
					<p>
						<span class="color-grey">一级用户：</span><span>3人</span>
					</p>
					<p><span class="color-grey">二级用户：</span><span>0人</span></p>
					<p>
					<span class="color-grey">充值用户：</span>
					<span>一级用户</span><span class="c-num-red"> 2 </span>人
					<span>二级用户</span><span class="color-blue-user"> 2 </span>人
					</p>
				</div>
			</div>
			<div class="promotion-income">
				<img src="./../image/promotion-income-text.png">
				<span class="income">159.50</span><span class="color-red-user blod">元</span>
			</div>
			<div class="clearfix become-btn">
				<div class="become-diamonds">
					<img src="./../image/become-dismonds-text.png">
				</div>
				<div class="become-gold">
					<img src="./../image/become-gold-text.png">
				</div>
			</div>
			<div class="promotion-desc">
		        <div class="desc">
		        	<p>
						推广收益说明：一级用户（使用你邀请码注册用户）充值后，你将会获得5%的收益，二级用户（通过你的一级用户推广的用户）充值后，你将会获得3%的收益
					</p>
		        </div>
				<div>
				    <p>累计充值10000元，成为电竞经理合伙人</p>
				    <p>您已充值：<span class="color-blue-user"> 0 </span>元，还差<span class="c-num-red"> 10000 </span>元</p>
				</div>
			</div>
		</div>
		<p class="right-text"><span>了解电竞经理合伙人</span><img src="./../image/more-right.png"></p>
		<!-- 微信绑定弹框-->
		<div class="wechat-box" v-if="isWechatBox">
		    <div class="relative">
		    	<div class="close"  @click="wechatBind(false)"></div>
				<div class="user-btn" style="margin-top:397px;">
					<div  class="save" @click="wechatBindRequest">
						<img src="./../image/bind-wechat-text.png">
					</div>
				</div>
		    </div>
		</div>
		<!-- 微信绑定弹框-->
	</div>
</template>
<script>
    require('./../plugins/clipboard/dist/clipboard.min.js')
	export default{
		data:function(){
			return {
                user:{},
                isWechatBox:false //是否显示微信绑定层
			}
		},
		props:["isGetUser"],
		mounted:function(){
		    var clipboard = new Clipboard('.copy');
		    clipboard.on('success', function(e) {
		        alert("复制成功");
		    });
		},
		watch:{
	    	isGetUser:function(newValue, oldValue){
	    		//监听弹框打开时才请求查询阵容列表
	    		if(newValue){
	    			this.user = this.$store.state.user;
	    		}
	    	}
	    },
	    methods:{
	    	wechatBind(bool){
	    		//告诉使用的父组件打开/关闭外面遮罩层
				this.$emit('getChildInfo',bool);
	    		this.isWechatBox = bool;
	    	},
	    	//返回绑定结果给父组件并关闭弹框
	    	wechatBindRequest(){
                this.$emit('getChildInfo',false);
                //获取绑定信息并保存在状态中
                this.$store.state.comfirmMessage = "你已绑定微信：<img class='wechat-head' src='./../../image/sure-text.png'>大时代";
                this.isWechatBox = false;
	    	}
	    }
	}
</script>
