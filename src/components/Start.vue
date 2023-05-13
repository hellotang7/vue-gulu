<template>
    <div class="markdown-body">
        <h1 id="开始使用">开始使用</h1>
        <p>请<a href="#/doc/installation">安装</a>本组件库。</p>
        <p>然后在你的项目中写入下面的代码：</p>
        <pre><code>import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "crisps-ui";</code></pre>
        <p>就能使用该组件了。</p>
        <h2 id="vue-单文件组件">Vue 单文件组件</h2>
        <p>代码示例：</p>
        <pre><code>&lt;template&gt;
  &lt;Button&gt;按钮&lt;/Button&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "crisps-ui";
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog. openDialog}
  }
&lt;/script&gt;</code></pre>
    </div>
</template>

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
    }    h1, h2 {
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
