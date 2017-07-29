<template>
    <!-- 首页 -->
	<div class="home-bg">
	    <competiton-header headerFix="false"></competiton-header>
		<div class="controller-home">
			<div class="inner clearfix">
				<div class="left left-nav">
				    <!--电竞经理账号-->
					<div class="logo-box">
						<span class="head-bg-big"><img src="./../../image/head-big.png"></span>
						<span class="account color-account">电竞经理账号</span>
						<span class="gold">15</span>
						<span class="stone">6</span>
					</div>
					<!--查看我的比赛-->
					<div class="match-box" v-if="!myMatchShow" @click="showMyMatchData">
					    <span class="my-match">查看我的比赛</span>
						<img class="match-new" src="./../../image/match-new.png">
						<span class="new-number">2</span>
					</div>
					<div class="match-box-data" v-if="myMatchShow">
					    <p class="all-match">查看所有比赛  <span class="more-right"></span></p>
						<img class="match-new" src="./../../image/match-new.png">
						<span class="new-number">2</span>
						<ul>
							<li>
								<span class="match-box-data-n">LPL-周末(免费场)</span>
								<span class="color-account">已开赛</span>
								<span>下注：
									<span class="color-account">10</span>
									<span class="diamonds-normal"></span>
								</span>
							</li>
							<li>
								<span class="match-box-data-n">LPL-周末(免费场)</span>
								<span class="color-grey">未开赛</span>
								<span>下注：
									<span class="color-account">10</span>
									<span class="diamonds-normal"></span>
								</span>
							</li>
							<li>
								<span class="match-box-data-n">LPL-周末(免费场)</span>
								<span class="color-grey">未开赛</span>
								<span>下注：
									<span class="color-account">10</span>
									<span class="diamonds-normal"></span>
								</span>
							</li>
							<li>
								<span class="match-box-data-n">...</span>
								<span>...</span>
								<span>...</span>
							</li>
						</ul>
					</div>
					<div class="train-box">
						<div class="go-btn"></div>
					</div>
					<!-- 今日任务-->
					<div class="task-box">
						<div class="tit-bg">
							<span class="tit-chinese">今日任务</span>
						    <span class="tit-eng">THE EVENT</span>
						</div>
						<div class="task-list">
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
								<span class="finish-tag right">已完成</span>
							</a>
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
								<span class="finish-tag right">已完成</span>
							</a>
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
							</a>
						</div>
						<div class="task-remind">
							免费赛不计算在内
						</div>
						<div class="receive-btn receive-btn1">
							领取3钻石
						</div>
					</div>
					<!-- 每周任务-->
					<div class="task-box">
						<div class="tit-bg">
							<span class="tit-chinese">每周任务</span>
						    <span class="tit-eng">THE EVENT</span>
						    <span class="tit-eng">(还剩3天)</span>
						</div>
						<div class="task-list">
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
								<span class="finish-tag right">已完成</span>
							</a>
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
								<span class="finish-tag right">已完成</span>
							</a>
							<a href="">
								<img class="left" src="./../../image/match-icon.png">
								<span class="left">报名参加一场英雄联盟比赛</span>
							</a>
						</div>
						<div class="task-remind">
							免费赛不计算在内
						</div>
						<div class="receive-btn receive-btn2">
							领取3钻石
						</div>
					</div>
					<!-- 排行榜-->
					<ranking></ranking>	
					<div class="match-special">
						<img src="./../../image/speical.jpg">
						<div class="speical-info">
							<p class="speical-tit">LPL夏季赛</p>
							<p class="speical-tit-small">新手免费训练赛</p>
							<p class="go-btn-white"></p>
						</div>
					</div>
					<div class="match-special">
						<img src="./../../image/speical.jpg">
						<div class="speical-info">
							<p class="speical-tit">LPL夏季赛</p>
							<p class="speical-tit-small">新手免费训练赛</p>
							<p class="go-btn-white"></p>
						</div>
					</div>
				</div>
				<div class="left new-center">
					<div class="clearfix news">
						<div class="carousel left">
							<swiper :options="swiperOptionSimple">
						        <swiper-slide><img src="./../../image/carousel1.jpg"></swiper-slide>
						        <swiper-slide><img src="./../../image/carousel1.jpg"></swiper-slide>
						        <swiper-slide><img src="./../../image/carousel1.jpg"></swiper-slide>
					            <div class="swiper-pagination" slot="pagination"></div>
					        </swiper>
						</div>
						<div class="new right">
							<p class="new-title">
							    <img src="./../../image/new-icon.png" >
								<span class="title-big">新闻中心</span>
								<span class="title-small">NEW CENTER</span>
							</p>
							<div class="match">
								<h2 class="match-title">王者荣耀KPL职业联赛
								<img src="./../../image/progressing.png">
								</h2>
								<p class="match-info">时间：<span>2016年3月15日-2016年3月16日</span></p>
								<p class="match-info">地点：<span>上海市浦东新区体育中心</span></p>
							</div>
							<div class="match-list match-first">
								<ul>
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【赛事】夏季赛今日打响！</span>
										<span class="right">11/12</span></li>
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【活动】AG超会玩：九连胜战队背后的故事</span> 
										<span class="right">11/12</span>
									</li>
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【赛事】首周第二日，最强战队互相推展</span> 
										<span class="right">11/12</span>
									</li>
								</ul>
							</div>
							<div class="match-list match-scroll">
								<ul :style="newPosition">
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【赛事】夏季赛今日打响！</span>
										<span class="right">6/12</span></li>
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【活动】AG超会玩：九连胜战队背后的故事</span> 
										<span class="right">8/10</span>
									</li>
									<li>
									    <span class="dot"></span>
										<span class="title moreDot">【赛事】首周第二日，最强战队互相推展</span> 
										<span class="right">7/12</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="clearfix game-banner">
						<div class="game-banner1">
							<span class="game-characters1"></span>
							<span class="game-desc">的风格的风</span>
							<div class="relative game-scroll">
								<span class="smoke"></span>
							</div>
							<div class="game-index1"></div>
						</div>
						<div class="game-banner2">
						    <span class="game-characters2"></span>
						    <span class="game-desc">的风格的风</span>
						    <div class="relative game-scroll">
								<span class="smoke"></span>
							</div>
							<div class="game-index2"></div>
						</div>
						<div class="game-banner3">
							<span class="game-characters3"></span>
							<span class="game-desc">的风格的风</span>
							<div class="relative game-scroll">
								<span class="smoke"></span>
							</div>
							<div class="game-index3"></div>
						</div>
					</div>
					<!-- 多数点击轮播 -->
					<div class="slider-mult">
						<swiper :options="swiperOption">
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <swiper-slide><img src="./../../image/speical.jpg"></swiper-slide>
					        <div class="swiper-pagination" slot="pagination"></div>
					        <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
					    </swiper>
				        <div class="dot-line-left"></div>
				        <div class="dot-line-right"></div>
					</div>
					<!--游戏竞猜-->
					<div>
						<img src="./../../image/game-banner1-title.png">
						<div  class="game-list">
						    <p class="game-title">
							    <span>今天赛事</span>
							    <div class="flag-select flag-select-home">
							        选择：
							        <span class="self-select">全部 <span class="triangle-down"></span></span>
							    </div>
						    </p>
						    <ul class="home">
						    	<li class="game-item">
							    	<div class="clearfix game-item-parent">
								        <div class="tag"></div>
								        <div class="star"></div>
								    	<div class="column1">
								    	    <p>
								    	    	<span  class="game-name">LPL夏季赛决赛</span>
									    	    <span class="finish-tag">已参与</span>
								    	    </p>
								    	    <span class="game-t">比赛前</span>
								    	</div>
								    	<div class="column2">
								    	    <p class="game-k"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="column3">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-blue">2.99</p>
								    	</div>
								    	<div class="column4">
								    	    <p class="vs-icon"></p>
								    	    <span class="game-t">剩余12:20</span>
								    	</div>
								    	<div class="column5">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-red">2.99</p>
								    	</div>
								    	<div class="column6">
								    	    <p class="game-we"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="state-finish">已结算</div>
							    	</div>
							    </li>
							    <li class="game-item">
							        <div class="clearfix game-item-parent">
								        <div class="tag"></div>
								        <div class="star"></div>
								    	<div class="column1">
								    	    <p class="game-name">LPL夏季赛决赛</p>
								    	    <span class="game-t">比赛前</span>
								    	</div>
								    	<div class="column2">
								    	    <p class="game-k"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="column3">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-blue">2.99</p>
								    	</div>
								    	<div class="column4">
								    	    <p class="vs-icon"></p>
								    	    <span class="game-t">剩余12:20</span>
								    	</div>
								    	<div class="column5">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-red">2.99</p>
								    	</div>
								    	<div class="column6">
								    	    <p class="game-we"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="state-finish">已结算</div>
							    	</div>
							    </li>
							    <li class="game-item">
							        <div class="clearfix game-item-parent">
							            <div class="tag"></div>
								        <div class="star"></div>
								    	<div class="column1">
								    	    <p class="game-name">LPL夏季赛决赛</p>
								    	    <span class="game-t">比赛前</span>
								    	</div>
								    	<div class="column2">
								    	    <p class="game-k"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="column3">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-blue">2.99</p>
								    	</div>
								    	<div class="column4">
								    	    <p class="vs-icon"></p>
								    	    <span class="game-t">剩余12:20</span>
								    	</div>
								    	<div class="column5">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-red">2.99</p>
								    	</div>
								    	<div class="column6">
								    	    <p class="game-we"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="state-finish">已结算</div>
							    	</div>
							    </li>
						    </ul>
						</div>
						<div  class="game-list">
						    <p class="game-title">明日赛事</p>
						    <ul class="home">
						    	<li class="game-item">
							    	<div class="clearfix game-item-parent">
								        <div class="tag"></div>
								        <div class="star"></div>
								    	<div class="column1">
								    	    <p class="game-name">LPL夏季赛决赛</p>
								    	    <span class="game-t">比赛前</span>
								    	</div>
								    	<div class="column2">
								    	    <p class="game-k"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="column3">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-blue">2.99</p>
								    	</div>
								    	<div class="column4">
								    	    <p class="vs-icon"></p>
								    	    <span class="game-t">剩余12:20</span>
								    	</div>
								    	<div class="column5">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-red">2.99</p>
								    	</div>
								    	<div class="column6">
								    	    <p class="game-we-gray"></p>
								    	    <span class="game-we-color">PNG</span>
								    	</div>
								    	<div class="state-bet" @click="toggleGame">下注中</div>
							    	</div>
							    	<div v-if="gameOpen">
							    	    <ul class="guess-bet">
							    	    	<li>
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
							    	    	<li>
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
										    	<div class="bet-btn-bet" @click="showBetBox('bet')"></div>
							    	    	</li>
							    	    	<li>
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
										    	<div class="bet-btn-append" @click="showBetBox('append')"></div>
							    	    	</li>
							    	    </ul>
							    	</div>
							    </li>
							    <li class="game-item">
								    <div class="clearfix game-item-parent">
								        <div class="tag"></div>
								        <div class="star"></div>
								    	<div class="column1">
								    	    <p class="game-name">LPL夏季赛决赛</p>
								    	    <span class="game-t">比赛前</span>
								    	</div>
								    	<div class="column2">
								    	    <p class="game-k"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="column3">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-blue">2.99</p>
								    	</div>
								    	<div class="column4">
								    	    <p class="vs-icon"></p>
								    	    <span class="game-t">剩余12:20</span>
								    	</div>
								    	<div class="column5">
								    	    <p>2</p>
								    	    <p class="c-pei">赔率</p>
								    	    <p class="c-num-red">2.99</p>
								    	</div>
								    	<div class="column6">
								    	    <p class="game-we"></p>
								    	    <span >PNG</span>
								    	</div>
								    	<div class="state-bet">下注中</div>
							    	</div>
							    </li>
						    </ul>
						</div>
					</div>
					<div class="load-more">加载更多</div>
					<!--真实互动赛-->
					<div class="game2">
						<img src="./../../image/game-banner2-title.png">
						<div  class="game-list">
						    <p class="game-title">今天赛事</p>
						    <ul class="home">
						    	<li v-for="game in gameList">
						    	    <router-link :to="'/match/detail/'+game.id" class="game-item"> 
							    	    <div class="clearfix game-item-parent">
								    	    <div class="tag"></div>
									    	<div class="star"></div>
									    	<div class="column1">
									    	    <p>
										    	    <span class="game-name" v-text="game.title"></span>
									    	    </p>
									    	    <span class="game-t">比赛前</span>
									    	</div>
									    	<div class="column-p">
									    	    <p>
										    	    <span class="gold-all">总奖金</span>
										    	    <span class="c-gold" v-text="'￥'+game.totals"></span>
										    	    <span class="icon-gold"></span>
									    	    </p>
									    	    <span class="game-t">剩余12:20</span>
									    	</div>
									    	<div class="column6 col-num">
									    	    <span >
										    	    <span class="icon-s"></span>
										    	    <span class="person-n" v-text="game.apply_people+'/'+game.activity_people"></span>
									    	    </span>
									    	</div>
									    	<div class="game-btn1">已开赛</div>
								    	</div>
							    	</router-link>  
							    </li>
						    </ul>
						</div>
						<div  class="game-list">
						    <p class="game-title">明日赛事</p>
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
									    	    <span class="icon-gold"> </span>
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
									    	    <span class="icon-gold"> </span>
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
									    	    <span class="icon-gold"></span>
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
		</div>
		<competiton-footer class="footer"></competiton-footer>
		<bet :betSuspendShow="betSuspendShow" suspendBoxType=1 :betType="betType" @getChildMess='listenToBet'></bet>
	</div>
</template>
<script>
    import { swiper } from 'vue-awesome-swiper'
    import Ranking from './../../components/Ranking'
    import Bet from './../../components/Bet'
	export default{
		data:function(){
			return{
				myMatchShow:false, //我的比赛数据是否显示
				gameOpen:false, //赛事投注情况默认隐藏
				betSuspendShow:false,//下注弹框是否显示
				betType:'bet', //下注：bet 追加 append
				swiperOption: {
				    pagination: '.swiper-pagination',
				    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
			        slidesPerView: 5,
			        paginationClickable: true,
			        spaceBetween: 20
			    },
			    swiperOptionSimple:{
			    	pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay: 3000
			    },
			    newPosition:{top:0},
			    index:1,
			    gameList:[] //数据
			}
		},
		components:{swiper,Ranking,Bet},
		computed: {
		    swiper() {
		        return this.$refs.mySwiper.swiper;
		    }
		},
		mounted:function(){
			//是否使用固定滚动条事件
		    var _this = this;
		    var scroll = setInterval(function(){
		    	_this.newScroll();
		    },3000);
		    this.getGameList();
		},
		methods:{
			toggleGame:function(){
				this.gameOpen = !this.gameOpen;
			},
			newScroll:function(){
				var len = 3;
				if(this.index<len){
	                this.newPosition = {
	                	top:"-"+(39*this.index)+"px"
	                };
	                this.index++;
				}else{
					this.index = 0;
				}
			},
			listenToBet(){
				this.betSuspendShow =false;
			},
			showBetBox(type){
				//下注类型 
				this.betSuspendShow =true;
                this.betType = type;
			},
			getGameList:function(){
				//原请求
				this.$http.get("api/activity?type=18&page=1&row=10&gameId=18").then(
		    		respose=>{
		    			//成功后显示列表
		    			if(!respose.data.code){
                            this.gameList = respose.data.data;
		    			}
		    		}
		        );
               //尝试调用的接口		        
	           // this.$http.get("api/activity/sort?gameId=16&date=m").then(
            //        function(result){
            //        	console.log(result);
            //        }
	           // );
			},
			showMyMatchData:function(){
				this.myMatchShow = true;
			}
		}
	}
</script>
<style lang="less">
    @import url('./home.less');
</style>
