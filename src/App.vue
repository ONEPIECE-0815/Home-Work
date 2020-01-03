<template>
  <!-- <div id="app"> -->
    <!-- <div id="nav">
      <router-link to="/user-login">登录</router-link> |
      <router-link to="/user-register">注册</router-link>
    </div> -->
		<transition name="slide-right" mode="out-in">
			<router-view/>
		</transition>
  <!-- </div> -->
</template>

<style lang="less">
	@import './style/public';
	@import './style/iconfont.css';
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
