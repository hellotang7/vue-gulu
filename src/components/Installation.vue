<template>
    <div class="markdown-body" ><h1 id="安装">安装</h1>
        <p>打开终端运行下列命令：</p>
        <pre><code>npm install crisps-ui</code></pre>
        <p>或者</p>
        <pre><code>yarn add crisps-ui</code></pre>
        <p>下一节： <router-link to="/doc/start">开始使用</router-link></p>
    </div></template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
  div {
    background: #d2d2d1;
    color: #24292e;
    @media (max-width: 700px) {
      background: #eaeae9;
    }
    h1, h2 {
      border-bottom: 1px solid #eaecef;
    }

    a {
      background-color: initial;
      color: #0366d6;
    }

    pre {
      background-color: #f6f8fa;
    }
  }
</style>
