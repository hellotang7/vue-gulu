<template>
<div>导航栏 | <router-link to="/">Tang</router-link>|<router-link to="/x">Tang2</router-link></div>
  <hr/>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',

}
</script>
