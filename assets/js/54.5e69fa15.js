(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{403:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" "),s("strong",[a._v("Webpack")])]),a._v(" "),s("h3",{attrs:{id:"_1，什么是webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1，什么是webpack"}},[a._v("#")]),a._v(" 1，什么是webpack")]),a._v(" "),s("p",[a._v("​\t现代的javascript应用的静态"),s("strong",[a._v("模块打包")]),a._v("工具。")]),a._v(" "),s("p",[a._v("​")]),a._v(" "),s("h3",{attrs:{id:"_2，webpack作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2，webpack作用"}},[a._v("#")]),a._v(" 2，webpack作用")]),a._v(" "),s("p",[a._v("识别某些写法，将其转化为浏览器能识别的写法。")]),a._v(" "),s("p",[a._v("会帮助我们处理模块之间的依赖关系。")]),a._v(" "),s("p",[a._v("将项目打包。")]),a._v(" "),s("h3",{attrs:{id:"_3，与gulp对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3，与gulp对比"}},[a._v("#")]),a._v(" 3，与gulp对比")]),a._v(" "),s("p",[a._v("gulp更强调的是"),s("strong",[a._v("前端流程的自动化")]),a._v("，模块化不是核心。")]),a._v(" "),s("p",[a._v("webpack更强调"),s("strong",[a._v("模块化开发")]),a._v("管理。文件压缩，预处理等功能，是他附带的功能。")]),a._v(" "),s("h3",{attrs:{id:"_4，webpack安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4，webpack安装"}},[a._v("#")]),a._v(" 4，webpack安装")]),a._v(" "),s("p",[a._v("本身依赖node.js环境。")]),a._v(" "),s("p",[a._v("webpack ./src/main.js -o ./src/bundle.js  --mode -development")]),a._v(" "),s("h3",{attrs:{id:"_5，webpack配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5，webpack配置"}},[a._v("#")]),a._v(" 5，webpack配置")]),a._v(" "),s("p",[a._v("开发时依赖")]),a._v(" "),s("p",[a._v("运行时依赖")]),a._v(" "),s("h3",{attrs:{id:"_6，loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6，loader"}},[a._v("#")]),a._v(" 6，loader")]),a._v(" "),s("p",[a._v("css文件处理。还需要style.loader。")]),a._v(" "),s("p",[a._v("less文件处理。还需要依赖less")]),a._v(" "),s("p",[a._v("图片处理。还需要fileloader")]),a._v(" "),s("p",[a._v("vueloader处理。")]),a._v(" "),s("p",[a._v("babelloader。js转es5处理。")]),a._v(" "),s("h3",{attrs:{id:"_7，plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7，plugins"}},[a._v("#")]),a._v(" 7，plugins")]),a._v(" "),s("p",[a._v("1），添加版权声明的横幅plugin\tnew webpack.bannerplugin（'xxxxxxxx'）；")]),a._v(" "),s("p",[a._v("2），打包index.html的HtmlWebpackPlugin")]),a._v(" "),s("p",[a._v("3），压缩混淆代码插件uglifyjs.。")]),a._v(" "),s("p",[a._v("4），webpack-dev-server 当我们保存src文件夹里的代码时，会自动编译到内存中。")]),a._v(" "),s("p",[a._v("5），VueLoaderPlugin")]),a._v(" "),s("h3",{attrs:{id:"_8-搭建本地服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-搭建本地服务器"}},[a._v("#")]),a._v(" 8,搭建本地服务器")]),a._v(" "),s("p",[a._v("web-dev-server。")]),a._v(" "),s("h3",{attrs:{id:"_9-webpack配置文件的分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-webpack配置文件的分离"}},[a._v("#")]),a._v(" 9,webpack配置文件的分离")]),a._v(" "),s("p",[a._v("1，依赖webpack-merge")]),a._v(" "),s("p",[a._v("2，需要为不同环境配置不同的配置文件base.config.js/dev.config.js/prod.config.js")]),a._v(" "),s("h3",{attrs:{id:"_10-webpack的目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-webpack的目录结构"}},[a._v("#")]),a._v(" 10,webpack的目录结构")]),a._v(" "),s("h3",{attrs:{id:"entry："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry："}},[a._v("#")]),a._v(" entry：")]),a._v(" "),s("p",[a._v("webpack启动的入口")]),a._v(" "),s("h3",{attrs:{id:"output："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output："}},[a._v("#")]),a._v(" output：")]),a._v(" "),s("p",[a._v("导出到哪个文件夹，并如何命名导出的文件")]),a._v(" "),s("h3",{attrs:{id:"loaders："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loaders："}},[a._v("#")]),a._v(" loaders：")]),a._v(" "),s("p",[a._v("webpack默认只识别javascript和json，loaders允许webpack识别并转化这些类型的文件并且将他们转化为可识别的模块。将这些文件添加到依赖的graph中。")]),a._v(" "),s("p",[a._v("通过构建规则的方式，将某一种文件与相应的解析器绑定起来。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("modeule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\trules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("test"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/\\.txt$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("use"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'raw-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"plugins："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins："}},[a._v("#")]),a._v(" plugins：")]),a._v(" "),s("p",[a._v("为项目提供其他的辅助功能。")]),a._v(" "),s("h3",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[a._v("#")]),a._v(" mode:")]),a._v(" "),s("p",[a._v("可以将模式设置为development，production或者none。")])])}),[],!1,null,null,null);t.default=r.exports}}]);