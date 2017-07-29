<template>
    <!-- 游戏主页 -->
	<div :class="classify+'-bg'">
	    <competiton-header headerFix='true'></competiton-header>
	    <div class="game-header" :class="{'bg-bottom1':oldCheckIndex==0,'bg-bottom2':oldCheckIndex==1,'bg-bottom3':oldCheckIndex==2}">
	        <div class="inner clearfix">
	        	<div v-for="(tab,idx) in tabList" :class="{'class-active':tab.ischeck}" @click="gameTab(tab,idx)">
	        	   <p v-if="!tab.ischeck"><img :src="tab.img | url"></p>
	        	   <p v-if="tab.ischeck"><img :src="tab.imgCheck | url"></p>
		    	   <span v-text="tab.name"></span>
		    	</div>
	        </div>
	    </div>
	    <div>
		    <div class="inner clearfix">
		    	<div class="match-left">
		    	    <!-- 竞猜显示 -->
		    		<div class="carousel-match relative" v-if="oldCheckIndex==0">
		    			<swiper :options="swiperOption">
					        <swiper-slide class="relative">
					            <img src="./../../image/carousel-match1.jpg">
					            <span class="carousel-title">【赛事】AG超会玩：九连胜战队背后的故事</span>
					        </swiper-slide>
					        <swiper-slide class="relative">
					            <img src="./../../image/carousel-match1.jpg">
					            <span class="carousel-title">【赛事】AG超会玩：九连胜战队背后的故事</span>
					        </swiper-slide>
					        <swiper-slide class="relative">
					            <img src="./../../image/carousel-match1.jpg">
					            <span class="carousel-title">【赛事】AG超会玩：九连胜战队背后的故事</span>
					        </swiper-slide>
				            <div class="swiper-pagination" slot="pagination"></div>
				        </swiper>
		    		</div>
		    		<div class="task-box" v-if="oldCheckIndex==0">
		    			<div class="slider-time relative">
							<swiper :options="swiperOptionTime">
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <swiper-slide><span>2017-10-10</span></swiper-slide>
						        <div class="swiper-pagination" slot="pagination"></div>
						        <div class="swiper-button-prev" slot="button-prev"></div>
	                            <div class="swiper-button-next" slot="button-next"></div>
						    </swiper>
						</div>
						<ul class="guess">
					    	<li class="game-item">
						    	<div class="clearfix">
							        <div class="tag"></div>
							        <div class="star"></div>
							    	<div class="column1">
							    	    <p>
							    	    	<span  class="game-name">LPL夏季赛决赛</span>
								    	    <span class="finish-tag">已参与</span>
							    	    </p>
							    	    <span class="game-t">已结束</span>
							    	</div>
							    	<div class="column2">
							    	    <p class="game-k"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="column3">
							    	    2
							    	</div>
							    	<div class="column4">
							    	    <p class="vs-icon"></p>
							    	    <span class="game-t">剩余12:20</span>
							    	</div>
							    	<div class="column5">
							    	    4
							    	</div>
							    	<div class="column6 relative">
							    	    <p class="game-we"></p>
							    	    <span >PNG</span>
							    	    <div class="win-right"></div>
							    	</div>
							    	<div class="state-finish">已完结</div>
						    	</div>
						    </li>
						    <li class="game-item">
							    <div  class="clearfix">
							        <div class="tag"></div>
							        <div class="star"></div>
							    	<div class="column1">
							    	    <p>
							    	    	<span  class="game-name">LPL夏季赛决赛</span>
							    			<span class="finish-tag">已参与</span>
							    	    </p>
							    	    <span class="game-t">已结束</span>
							    	</div>
							    	<div class="column2 relative">
							    	    <p class="game-k"></p>
							    	    <span >PNG</span>
							    	    <div class="win-left"></div>
							    	</div>
							    	<div class="column3">
							    	    2
							    	</div>
							    	<div class="column4">
							    	    <p class="vs-icon"></p>
							    	    <span class="game-t">剩余12:20</span>
							    	</div>
							    	<div class="column5">
							    	    1
							    	</div>
							    	<div class="column6 relative">
							    	    <p class="game-we"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="state-finish">已完结</div>
						    	</div>
						    </li>
						    <li class="game-item">
						        <div  class="clearfix">
							        <div class="tag"></div>
							        <div class="star"></div>
							    	<div class="column1">
							    	    <p class="guess-n">
							    	    	<span  class="game-name">LPL夏季赛决赛</span>
							    	    </p>
							    	    <span class="game-t">比赛中</span>
							    	</div>
							    	<div class="column2">
							    	    <p class="game-k"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="column3">&nbsp;&nbsp;</div>
							    	<div class="column4">
							    	    <p class="vs-icon"></p>
							    	    <span class="game-t">剩余12:20</span>
							    	</div>
							    	<div class="column5">&nbsp;&nbsp;</div>
							    	<div class="column6">
							    	    <p class="game-we"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="state-bet">下注中</div>
						    	</div>
						    	<div>
						    	    <ul class="guess-bet">
						    	    	<li class="clearfix">
									    	<div class="column1">
									    	    <p>
									    	    	<span  class="game-name">LPL夏季赛决赛</span>
									    	    </p>
									    	    <span class="game-small">比赛中</span>
									    	</div>
									    	<div class="column2">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-blue">2.99</p>
									    	</div>
									    	<div class="column3">&nbsp;&nbsp;</div>
									    	<div class="column4">
									    	    <span class="gold-all">总奖金</span> 
									    	    <span class="c-gold">￥2200</span> 
									    	    <span class="diamonds-normal"></span>
									    	</div>
									    	<div class="column5">&nbsp;&nbsp;</div>
									    	<div class="column6">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-red">0.99</p>
									    	</div>
									    	<div class="bet-btn-finish"></div>
						    	    	</li>
						    	    	<li class="clearfix">
									    	<div class="column1">
									    	    <p>
									    	    	<span  class="game-name">LPL夏季赛决赛</span>
									    	    </p>
									    	    <span class="game-small">比赛中</span>
									    	</div>
									    	<div class="column2">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-blue">2.99</p>
									    	</div>
									    	<div class="column3">&nbsp;&nbsp;</div>
									    	<div class="column4">
									    	    <span class="gold-all">总奖金</span> 
									    	    <span class="c-gold">￥2200</span> 
									    	    <span class="diamonds-normal"></span>
									    	</div>
									    	<div class="column5">&nbsp;&nbsp;</div>
									    	<div class="column6">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-red">0.99</p>
									    	</div>
									    	<div class="bet-btn-bet" @click="showBetBox('bet',1)"></div>
						    	    	</li>
						    	    	<li class="clearfix">
									    	<div class="column1">
									    	    <p>
									    	    	<span  class="game-name">LPL夏季赛决赛</span>
									    	    </p>
									    	    <span class="game-small">比赛中</span>
									    	</div>
									    	<div class="column2">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-blue">2.99</p>
									    	</div>
									    	<div class="column3">&nbsp;&nbsp;</div>
									    	<div class="column4">
									    	    <span class="gold-all">总奖金</span> 
									    	    <span class="c-gold">￥2200</span> 
									    	    <span class="diamonds-normal"></span>
									    	</div>
									    	<div class="column5">&nbsp;&nbsp;</div>
									    	<div class="column6">
									    	    <p class="c-pei">赔率</p>
									    	    <p class="c-num-red">0.99</p>
									    	</div>
									    	<div class="bet-btn-append" @click="showBetBox('append',1)"></div>
						    	    	</li>
						    	    </ul>
						    	</div>
						    </li>
						    <li class="game-item">
							    <div class="clearfix">
							        <div class="tag"></div>
							        <div class="star"></div>
							    	<div class="column1">
							    	    <p>
							    	    	<span  class="game-name">LPL夏季赛决赛</span>
							    	    </p>
							    	    <span class="game-t">比赛中</span>
							    	</div>
							    	<div class="column2">
							    	    <p class="game-k"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="column3">&nbsp;&nbsp;</div>
							    	<div class="column4">
							    	    <p class="vs-icon"></p>
							    	    <span class="game-t">剩余12:20</span>
							    	</div>
							    	<div class="column5">&nbsp;&nbsp;</div>
							    	<div class="column6">
							    	    <p class="game-we"></p>
							    	    <span >PNG</span>
							    	</div>
							    	<div class="state-bet">下注中</div>
							    </div>
						    </li>
					    </ul>
		    		</div>

		    		<!-- 虚拟竞技 -->
		    		<div class="sports-anal task-box" v-if="oldCheckIndex==1">
		    			<div class="tit clearfix">
		    				<div class="left">
		    				    <span class="sports-checked"><img src="./../../image/arena-text.png"></span>
		    					<span><img src="./../../image/ladder-text.png"></span>
		    				</div>
		    				<div class="flag-select right">
						        <span>升序</span>
		    					<span class="flag-t-left">分类</span>
						        <span class="self-select">全部 <span class="triangle-down"></span></span>
						    </div>
		    			</div>
		    			<div class="sports-team clearfix">
		    				<div class="left team-head">
		    					<img src="./../../image/rank-no.png">
		    				</div>
		    				<div>
		    					<p class="team-title">无敌银河战队</p>
		    					<div class="clearfix left">
		    						<img src="./../../image/team-dot.png" class="left">
		    						<div class="left team-result">
		    							<p><span class="team-item">战术风格：</span><span>稳健运营</span></p>
		    							<p>
			    							<span class="team-item">历史战绩：</span>胜：<span class="c-num-red marR16">3</span>
			    							平：<span class="marR16">3</span>
			    							负：<span class="c-number-blue">3</span>
		    							</p>
		    							<p><span class="team-item">累计战绩：</span><span>63</span></p>
		    						</div>
		    					</div>
		    					<div class="right" style="margin-top: -65px;">
		    						<p class="win-percent"><img src="./../../image/win-percent.png">我的胜率：50%</p>
		    						<p class="result-history">查看我的历史战绩  <span class="more-right"></span></p>
		    						<p class="controller-team">
		    							
		    						</p>
		    					</div>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="task-box" v-if="oldCheckIndex==1">
		    			<ul class="sports">
		    				<li class="game-item">
						    	<div class="clearfix">
							        <div class="tag"></div>
							    	<div class="column1">
							    	    <p> 
							    	        <span class="head-border">
							    	        	<img src="./../../image/person.png">
							    	        </span>	
							    	    	<span  class="game-name"><span class="colorb49656">Nick</span>已摆好擂台，坐等各位大神来挑战!</span>
								    	    <span class="finish-tag">已报名</span>
								    	    <span class="game-t" >已有7位来应战</span>
							    	    </p>
							    	</div>
							    	<div class="column3">
							    	    胜：<span class="c-num-red">3</span>
							    	    负：<span class="c-number-blue">3</span>
							    	</div>
							    	<div class="column4">
							    	    <span class="game-t">还可以挑战<span class="c-number-blue"> 3 </span>次</span>
							    	</div>
							    	<div class="game-btn1">已结束</div>
						    	</div>
						    </li>
						    <li class="game-item">
						    	<div class="clearfix">
							        <div class="tag"></div>
							    	<div class="column1">
							    	    <p> 
							    	        <span class="head-border">
							    	        	<img src="./../../image/person.png">
							    	        </span>	
							    	    	<span  class="game-name"><span class="colorb49656">Nick</span>已摆好擂台，坐等各位大神来挑战!</span>
								    	    <span class="finish-tag">已报名</span>
								    	    <span class="game-t" >已有7位来应战</span>
							    	    </p>
							    	</div>
							    	<div class="column3">
							    	    胜：<span class="c-num-red">3</span>
							    	    负：<span class="c-number-blue">3</span>
							    	</div>
							    	<div class="column4">
							    	    <span class="game-t">还可以挑战<span class="c-number-blue"> 3 </span>次</span>
							    	</div>
							    	<div class="game-btn6">
								    	<router-link :to="'/arena/'+classify" style="display:block;">  
								    	    10<span class="icon-stone"></span>挑战
								    	</router-link>
							    	</div>
						    	</div>
						    </li>
						    <li class="game-item">
						    	<div class="clearfix">
							        <div class="tag"></div>
							    	<div class="column1">
							    	    <p> 
							    	        <span class="head-border">
							    	        	<img src="./../../image/person.png">
							    	        </span>	
							    	    	<span  class="game-name"><span class="colorb49656">Nick</span>已摆好擂台，坐等各位大神来挑战!</span>
								    	    <span class="finish-tag">已报名</span>
								    	    <span class="game-t" >已有7位来应战</span>
							    	    </p>
							    	</div>
							    	<div class="column3">
							    	    胜：<span class="c-num-red">3</span>
							    	    负：<span class="c-number-blue">3</span>
							    	</div>
							    	<div class="column4">
							    	    <span class="game-t">还可以挑战<span class="c-number-blue"> 3 </span>次</span>
							    	</div>
							    	<div class="game-btn6">
							    		<router-link :to="'/arena/'+classify" style="display:block;">  
								    	    10<span class="icon-stone"></span>挑战
								    	</router-link>
							    	</div>
						    	</div>
						    </li>
		    			</ul>
		    		</div>	

		    		<!-- 真实互动 -->
		    		<div v-if="oldCheckIndex==2" class="marT60">
			    		<div class="game2 task-box">
								<div  class="game-list">
								    <p class="game-title-match">今日赛事</p>
								    <ul class="home">
								    	<li class="game-item">
									    	<div class="clearfix game-item-parent">
									    	    <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	    <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn1">已开赛</div>
									    	</div>
									    </li>
									    <li class="game-item">
									        <div class="clearfix game-item-parent">
								    	        <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	   <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn6">10<span class="icon-stone"></span>加入</div>
									    	</div>
									    </li>
									    <li class="game-item">
										    <div class="clearfix game-item-parent">
									    	    <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	    <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn3">10 <span class="icon-stone"></span>加入</div>
									    	</div>
									    </li>
								    </ul>
								</div>
						</div>
			    		<div class="game2 task-box">
								<div  class="game-list">
								    <p class="game-title-match">明日赛事</p>
								    <ul class="home">
								    	<li class="game-item">
									    	<div class="clearfix game-item-parent">
									    	    <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	    <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn1">已开赛</div>
									    	</div>
									    </li>
									    <li class="game-item">
									        <div class="clearfix game-item-parent">
								    	        <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	   <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn6">10<span class="icon-stone"></span>加入</div>
									    	</div>
									    </li>
									    <li class="game-item">
										    <div class="clearfix game-item-parent">
									    	    <div class="tag"></div>
										    	<div class="star"></div>
										    	<div class="column1">
										    	    <p>
											    	    <span  class="game-name">LPL夏季赛决赛</span>
											    	    <span class="finish-tag">已报名</span>
										    	    </p>
										    	    <span class="game-t">比赛前</span>
										    	</div>
										    	<div class="column-p">
										    	    <p>
											    	    <span class="gold-all">总奖金</span>
											    	    <span class="c-gold">￥7000</span>
											    	    <span class="icon-stone"></span>
										    	    </p>
										    	    <span class="game-t">剩余12:20</span>
										    	</div>
										    	<div class="column6 col-num">
										    	    <span><span class="icon-s"></span>51/55</span>
										    	</div>
										    	<div class="game-btn3">10 <span class="icon-stone"></span>加入</div>
									    	</div>
									    </li>
								    </ul>
								</div>
						</div>
						<div class="load-more">加载更多</div>
			    	</div>   
		    	</div>
		    	<div class="match-right">
			    	<div :class="classify+'-activity'" v-if="oldCheckIndex==0">
			    		<img class="activity-title" src="./../../image/activity-title.png">
			    	</div>
			    	<div class="task-box" v-if="oldCheckIndex==0">
			    		<div class="tit-bg">
							<span class="tit-chinese">新闻中心</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="relative new-banner">
							<img src="./../../image/carousel-match1.jpg">
							<p class="moreDot">【赛事】AG超会玩：九连胜战队背后的故事后的故事后的故事</p>
						</div>
						<div class="newsList">
							<ul>
								<li class="clearfix">
									<img src="./../../image/carousel-match1.jpg">
									<div>
										<p class="new-t">【赛事】AG超会玩：九连胜战队背后的故事后的故事后的故事</p>
										<span>6月12日</span>
									</div>
								</li>
								<li class="clearfix">
									<img src="./../../image/carousel-match1.jpg">
									<div>
										<p class="new-t">【赛事】AG超会玩：九连胜战队背后的故事后的故事后的故事</p>
										<span>6月12日</span>
									</div>
								</li>
								<li class="clearfix">
									<img src="./../../image/carousel-match1.jpg">
									<div>
										<p class="new-t">【赛事】AG超会玩：九连胜战队背后的故事后的故事后的故事</p>
										<span>6月12日</span>
									</div>
								</li>
								<li class="clearfix">
									<img src="./../../image/carousel-match1.jpg">
									<div>
										<p class="new-t">【赛事】AG超会玩：九连胜战队背后的故事后的故事后的故事</p>
										<span>6月12日</span>
									</div>
								</li>
							</ul>
						</div>
			    	</div>
			    	<div class="task-box launch-arena" v-if="oldCheckIndex==1">
			    		<img  class="number-img" src="./../../image/finish-number.png">
			    		<span class="arena-number">26</span>
			    		<p class="color-t">再完成5场可获得奖励</p>
			    		<p class="color-grey">赶快发起我的擂台等人挑战吧！</p>
			    		<div class="append-btn" @click="showBetBox('bet',2)">
			    			<img class="reana-text-img" src="./../../image/reana-text.png">
			    		</div>
			    	</div>
                    <ranking :class="{'marT60':oldCheckIndex==2}"></ranking>	
		    	</div>
		    </div>
	    </div>
	    <competiton-footer class="footer"></competiton-footer>
	    <!-- 我的比赛悬浮框 -->
	    <div class="suspend-match-normal" v-if="!suspendMatchShow">
	        <div class="suspend-match-btn">
	    		<img src="./../../image/suspend-match-close.png"  @click="toggleSuspendMatch(true)">
	    	</div>
	    </div>
	    <div class="suspend-match animation" :class="{'suspend-match-show':suspendMatchShow}" v-if="suspendMatchShow">
	    	<div class="suspend-match-btn">
	    		<img src="./../../image/suspend-match-open.png" @click="toggleSuspendMatch(false)">	
	    	</div>
	    	<div class="suspend-match-data" v-if="suspendMatchShow">
	    		<img src="./../../image/suspend-match-title.png">
	    		<ul>
	    			<li class="clearfix">
	    				<p class="left">
	    					<span class="match-set-name">LPL-周末(免费场)</span>
	    					<span class="match-set-small">
	    						<span class="color-grey">下注：<span class="color-account">10</span><span class="diamonds-normal"></span></span>
	    					</span>
	    				</p>
	    				<p class="color-account right">已开赛</p>
	    			</li>
	    			<li class="clearfix">
	    				<p class="left">
	    					<span class="match-set-name">LPL-周末(免费场)</span>
	    					<span class="match-set-small">
	    						<span class="color-grey">下注：<span class="color-account">10</span><span class="diamonds-normal"></span></span>
	    					</span>
	    				</p>
	    				<p class="color-account right">已开赛</p>
	    			</li>
	    			<li class="clearfix">
	    				<p class="left">
	    					<span class="match-set-name">LPL-周末(免费场)</span>
	    					<span class="match-set-small">
	    						<span class="color-grey">下注：<span class="color-account">10</span><span class="diamonds-normal"></span></span>
	    					</span>
	    				</p>
	    				<p class="color-grey right">已结束</p>
	    			</li>
	    			<li class="clearfix">
	    				<p class="left">
	    					<span class="match-set-name">LPL-周末(免费场)</span>
	    					<span class="match-set-small">
	    						<span class="color-grey">下注：<span class="color-account">10</span><span class="diamonds-normal"></span></span>
	    					</span>
	    				</p>
	    				<p class="color-grey right">已结束</p>
	    			</li>
	    		</ul>
	    		<div>
	    			<img src="./../../image/see-all-match.jpg">
	    		</div>
	    	</div>
	    </div>
	    <bet :betSuspendShow="betSuspendShow" :suspendBoxType="suspendBoxType" :betType="betType" @getChildMess='listenToBet'></bet>
	</div>
</template>
<script>
	import Ranking from './../../components/Ranking'
	import Bet from './../../components/Bet'
	export default{
		data:function(){
			return{
				suspendBoxType:1,//弹框类型 1.下注 2.发起擂台奖金
				betType:'bet', //下注：bet 追加 append
				betSuspendShow:false,   //是否显示下注弹框
				suspendMatchShow:false, //比赛悬浮数据默认隐藏
				classify:this.$route.params.class,
				oldCheckIndex:0,//默认第一个选中
				swiperOption:{
			    	pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay: 3000
			    },
			    swiperOptionTime: {
				    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
			        slidesPerView: 6,
			        spaceBetween: 20
			    },
                tabList:[{
                	name:'竞猜',
                	img:'game-class1.png',
                	imgCheck:"game-class1-active.png",
                	ischeck:true
                },{
                	name:'虚拟竞技赛',
                	img:'game-class2.png',
                	imgCheck:"game-class2-active.png",
                	ischeck:false
                },{
                	name:'真实互动赛',
                	img:'game-class3.png',
                	imgCheck:"game-class3-active.png",
                	ischeck:false
                }]
			}
		},
		components:{Ranking,Bet},
		mounted:function(){ 
			window.scrollTo(0,0);//页面跳转时在顶部
	    },
		methods:{
		    gameTab(item,index){
		    	if(index != this.oldCheckIndex){
                    item.ischeck = true;
	                this.tabList[this.oldCheckIndex].ischeck = false;
	                this.oldCheckIndex = index;
		    	}   
		    },
		    //我的比赛悬浮框显示隐藏
		    toggleSuspendMatch(boolean){
                this.suspendMatchShow = boolean;
		    },
		    listenToBet(){
				this.betSuspendShow =false;
			},
		    //下注和奖金设置弹框的显示
		    showBetBox(type,suspendBoxType){
				//下注类型 
				this.betSuspendShow =true;
                this.betType = type;
                this.suspendBoxType = suspendBoxType;
			}
		},
		//本地图片显示过滤
        filters: {
            url: function (url) {
                return require("./../../image/"+url);
            }
        }
	}
</script>
<style lang="less">
	@import url('./match.less');
</style>