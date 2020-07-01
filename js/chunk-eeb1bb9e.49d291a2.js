(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eeb1bb9e"],{3451:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[0==e.currentPage?s("div",[s("h2",{staticClass:"title"},[e._v("此目录下为Webpack相关笔记")]),e._l(e.articles,(function(t){return s("div",{key:t.index,staticClass:"title-index",on:{click:function(s){e.currentPage=t.index}}},[e._v(" "+e._s(t.name)+" ")])}))],2):s("div",{staticClass:"markdowns"},[1==e.currentPage?s("AboutWebpack"):e._e()],1)])},n=[],r=s("f276"),p={data:function(){return{currentPage:0,articles:[{index:1,name:"Webpack一些基础知识"}]}},components:{AboutWebpack:r["a"]},mounted:function(){var e=this.$route.params.index;e&&(this.currentPage=e)}},v=p,c=(s("763e"),s("2877")),_=Object(c["a"])(v,a,n,!1,null,"403ee4d8",null);t["default"]=_.exports},"6fe1":function(e,t,s){},"763e":function(e,t,s){"use strict";var a=s("6fe1"),n=s.n(a);n.a},f276:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",[s("strong",[e._v("Webpack")])]),s("h3",[e._v("1，什么是webpack")]),s("p",[e._v("​ 现代的javascript应用的静态"),s("strong",[e._v("模块打包")]),e._v("工具。")]),s("p",[e._v("​")]),s("h3",[e._v("2，webpack作用")]),s("p",[e._v("识别某些写法，将其转化为浏览器能识别的写法。")]),s("p",[e._v("会帮助我们处理模块之间的依赖关系。")]),s("p",[e._v("将项目打包。")]),s("h3",[e._v("3，与gulp对比")]),s("p",[e._v("gulp更强调的是"),s("strong",[e._v("前端流程的自动化")]),e._v("，模块化不是核心。")]),s("p",[e._v("webpack更强调"),s("strong",[e._v("模块化开发")]),e._v("管理。文件压缩，预处理等功能，是他附带的功能。")]),s("h3",[e._v("4，webpack安装")]),s("p",[e._v("本身依赖node.js环境。")]),s("p",[e._v("webpack ./src/main.js -o ./src/bundle.js --mode -development")]),s("h3",[e._v("5，webpack配置")]),s("p",[e._v("开发时依赖")]),s("p",[e._v("运行时依赖")]),s("h3",[e._v("6，loader")]),s("p",[e._v("css文件处理。还需要style.loader。")]),s("p",[e._v("less文件处理。还需要依赖less")]),s("p",[e._v("图片处理。还需要fileloader")]),s("p",[e._v("vueloader处理。")]),s("p",[e._v("babelloader。js转es5处理。")]),s("h3",[e._v("7，plugins")]),s("p",[e._v("1），添加版权声明的横幅plugin new webpack.bannerplugin（'xxxxxxxx'）；")]),s("p",[e._v("2），打包index.html的HtmlWebpackPlugin")]),s("p",[e._v("3），压缩混淆代码插件uglifyjs.。")]),s("p",[e._v("4），webpack-dev-server 当我们保存src文件夹里的代码时，会自动编译到内存中。")]),s("p",[e._v("5），VueLoaderPlugin")]),s("h3",[e._v("8,搭建本地服务器")]),s("p",[e._v("web-dev-server。")]),s("h3",[e._v("9,webpack配置文件的分离")]),s("p",[e._v("1，依赖webpack-merge")]),s("p",[e._v("2，需要为不同环境配置不同的配置文件base.config.js/dev.config.js/prod.config.js")]),s("h3",[e._v("10,webpack的目录结构")]),s("h6",[e._v("entry：")]),s("p",[e._v("webpack启动的入口")]),s("h6",[e._v("output：")]),s("p",[e._v("导出到哪个文件夹，并如何命名导出的文件")]),s("h6",[e._v("loaders：")]),s("p",[e._v("webpack默认只识别javascript和json，loaders允许webpack识别并转化这些类型的文件并且将他们转化为可识别的模块。将这些文件添加到依赖的graph中。")]),s("p",[e._v("通过构建规则的方式，将某一种文件与相应的解析器绑定起来。")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e._v("modeule.exports={\n\t"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("rules")]),e._v(":[\n\t\t{"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("test")]),e._v(":"),s("span",{pre:!0,attrs:{class:"hljs-regexp"}},[e._v("/\\.txt$/")]),e._v(","),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("use")]),e._v(":"),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'raw-loader'")]),e._v("}\n\t]\n}\n")])]),s("h6",[e._v("plugins：")]),s("p",[e._v("为项目提供其他的辅助功能。")]),s("h6",[e._v("mode:")]),s("p",[e._v("可以将模式设置为development，production或者none。")])])}],r=s("2877"),p={},v=Object(r["a"])(p,a,n,!1,null,null,null);t["a"]=v.exports}}]);
//# sourceMappingURL=chunk-eeb1bb9e.49d291a2.js.map