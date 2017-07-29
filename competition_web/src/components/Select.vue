<template>
    <!-- 下拉框组件 -->
	<div class="select left relative" style="margin-top:-5px;" @click="toggleSelect" :class="{'select-normal':!isShow,'select-open':isShow}">
	    <span>{{selectedValue}}<img src="./../image/select.png"></span>
	    <ul class="select-content" v-if="isShow" >
	    	<li v-for="s in selectArray" v-text="s.name" @click="getSelectValue(s.name)" :class="{'option':selected ==s.id}">
	    	</li>
	    </ul>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				isShow:false,
				selectArray:[],
				selectedValue:'',
			}
		},
		props:['dataArray','selected'], 
		mounted:function(){
            this.selectArray = eval(this.dataArray);
            //根据id显示之前选中的值
            for(let v of this.selectArray) {
				if(this.selected == v.id){
                    this.selectedValue = v.name;
				}
			}
		},
		methods:{
			//显示隐藏下拉框
			toggleSelect(){
				this.isShow = !this.isShow;
			},
			//获取选中的值并显示
			getSelectValue(value){
                this.selectedValue = value;
			}
		}
	}
</script>
