<template>
  <!-- 尾部组件 -->
  <div>
      <div class="inner footer-content">
          <div class="contract">
            <a href="">联系我们</a>
            <a href="">服务条款</a>
            <a href="">隐私政策</a>
          </div>
          <div class="copy-right">Copyright © 2016-2017 menghuandianj. All Rights Reserved</div>
          <div>蜀ICP备15032036号-1</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contract a{
  color: #ffffff;
  margin-right: 25px;
  text-decoration: none;
}
.footer-content{
  position: absolute;
  bottom: 74px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
}
.copy-right{
  margin:15px 0;
}
</style>
