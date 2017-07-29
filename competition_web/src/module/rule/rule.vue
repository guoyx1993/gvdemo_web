<template>
	<div class="rule-bg">
	    <!--公用头部-->
        <competiton-header headerFix="false"></competiton-header>
        <div class="controller-rule">
            <div class="inner clearfix">
                <div class="rule-box">
                    <div class="rule-top">
                        <span class="title">规则介绍</span>
                        <span class="howtoplay-btn"> </span>
                    </div>
                    <!--左边导航-->
                    <div class="left rule-nav">
                     	<ul>
                    		<li class="on">
                    			<p>积分规则</p>
                                <i></i>
                    		</li>
                    		<li>
                    			<p>比赛规则</p>
                    		</li>
                    		<li>
                    			<p>服务条款</p>
                    		</li>
                    		<li>
                    			<p>电竞合伙人服务说明</p>
                    		</li>
                    		<li>
                    			<p>联系我们</p>
                    		</li>
                    		<li>
                    			<p>注册协议</p>
                    		</li>
                    		<li>
                    			<p>隐私政策</p>
                    		</li>
                    	</ul>
 <!--                        <ul>
                            <li>
                                <img src="./../../image/rule-item1.png" alt="">
                                <img src="./../../image/rule-item01.png" alt="">
                            </li>
                        </ul> -->
                    </div>
                    <!--右边tab-->
                    <div class="left rule-detail">
                        <!--积分规则-->
                        <div class="r-detailbox" v-if="checkOn == 0">
                            <ul>
                            	<li>
                            		<h4>王者荣耀积分规则:</h4>
                            		<p>1.每场比赛中选手击杀（kill）+2分，死亡（dead）-1分，助攻（assist）+1.5分，获得1金钱+0.001分<span class="color">（例如：本场比赛该选手获得1000金，得分为1000X0.001=1分）</span></p>
                            		<p>2.每场竞技结算的分数为玩家所选五位选手得分的总和;</p>
                            	</li>  
                               	<li>
                            		<h4>NBA积分规则:</h4>
                            		<p>1.每场比赛中选手得分+1分，篮板+1.2分，抢断+2分，助攻+1.5分，封盖+2分，失误-1分，犯规-0.8分。</p>
                            		<p>2.每场竞技结算的分数为玩家所选五位选手得分的总和;</p>
                            	</li>
                            	<li>
                            		<h4>英雄联盟积分规则:</h4>
                            		<p>1.每场比赛中选手杀人1（kill）+2分，死亡1（dead）-1分，助攻1（assist）+1.5分，补刀1+0.01分，输出伤害1点+0.0002分，承受伤害1点+0.0001分，推塔1座+0.5分</p>
                            		<p>2.每场竞技结算的分数为玩家所选五位选手得分的总和;</p>
                            	</li>
                            	<li>
                            		<h4>DOTA积分规则:</h4>
                            		<p>1.每场比赛中选手击杀1（kill）+2分，死亡1（dead）-1分，助攻1（assist）+1.5分，参战率1%+0.0002分，伤害1点+0.0001分，建筑伤害1点+0.5分，正补1+0.01，反补1+0.02分。</p>
                            		<p>2.每场竞技结算的分数为玩家所选五位选手得分的总和;</p>           
                            	</li>
                            </ul>
                        </div>
                        <!--比赛规则-->
                        <div class="tab-rule-match" v-if="checkOn == 1">比赛规则</div>
                        <!--服务条款-->
                        <div class="tab-server" v-if="checkOn == 2">服务条款</div>
                        <!--合伙人-->
                        <div class="tab-companion" v-if="checkOn == 3">合伙人</div>
                        <!--联系我们-->
                        <div class="tab-callus" v-if="checkOn == 4">联系我们</div>
                        <!--注册协议-->
                        <div class="tab-login" v-if="checkOn == 5">注册协议</div>
                        <!--隐私政策-->
                        <div class="tab-privacy" v-if="checkOn == 6">隐私政策</div>
                    </div>
                </div>
            </div>
        </div>
        <!--公用尾部-->
        <competiton-footer class="footer"></competiton-footer>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
		        ruleNavTab:[{
                    img:'rule-item1.png',
                    imgOn:'rule-item01.png',
                    clicked:true
                },{
                    img:'rule-item2.png',
                    imgOn:'rule-item02.jpg',
                    clicked:false
                },{
                    img:'rule-item3.png',
                    imgOn:'rule-item03.jpg',
                    clicked:false
                },{
                    img:'rule-item4.png',
                    imgOn:'rule-item04.jpg',
                    clicked:false
                },{
                    img:'rule-item5.png',
                    imgOn:'rule-item05.jpg',
                    clicked:false
                },{
                    img:'rule-item6.png',
                    imgOn:'rule-item06.jpg',
                    clicked:false
                },{
                    img:'rule-item7.png',
                    imgOn:'rule-item07.jpg',
                    clicked:false
                }],
                checkOn : 0
			}
		},
		components:{},
		mounted:function(){
			
		},
		methods:{
			
		}
	}
</script>
<style lang="less">
    @import url('./rule.less');
</style>