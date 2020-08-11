(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{401:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"正则表达式regular-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式regular-expression"}},[t._v("#")]),t._v(" 正则表达式Regular Expression")]),t._v(" "),a("p",[t._v("RegExp：用来处理字符串的规则")]),t._v(" "),a("ul",[a("li",[t._v("只能处理字符串")]),t._v(" "),a("li",[t._v("他是一个规则，可以验证字符串是否符合某个规则test")]),t._v(" "),a("li",[t._v("也可以把符合规则的内容捕获到exec /match")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"good good study,day day up!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\\d代表0-9之间的一个数字，+代表出现一到多次")]),t._v("\n\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断字符串里是否有数字 //=>false")]),t._v("\n\nstr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-08-12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//捕获str中符合条件的部分")]),t._v("\n\n")])])]),a("p",[t._v("编写正则表达式：")]),t._v(" "),a("p",[t._v("创建方式有两种：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字面量创建方式(两个斜杠之间包起来的，都是用来描述规则的元字符)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造函数方式调用 两个参数(元字符字符串，修饰符字符串)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\d+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("需要转义\n")])])]),a("h3",{attrs:{id:"正则表达式由两部分构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式由两部分构成"}},[t._v("#")]),t._v(" 正则表达式由两部分构成")]),t._v(" "),a("ul",[a("li",[t._v("元字符")]),t._v(" "),a("li",[t._v("修饰符")])]),t._v(" "),a("h3",{attrs:{id:"常见的元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的元字符"}},[t._v("#")]),t._v(" 常见的元字符")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1，量词元字符：设置出现的次数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//*\t\t\t=>0到多次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//+\t\t\t=>1到多次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//?\t\t\t=>0或1次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{n}\t\t=>出现n次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{n,}\t\t=>出现n到多次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{n,m}\t\t=>出现n到m次")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2，特殊元字符：单个或者组合在一起代表特殊的含义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\\t\t=>转义字符(普通->特殊->普通)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .\t\t=>除了\\n以外的任意字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^\t\t=>以哪一个元字符作为开始")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $\t\t=>以哪一个元字符作为结束")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\n\t\t=>换行符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\d\t\t=>0-9之间的一个数字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\D\t\t=>非0~9之间的任何一个数字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\w\t\t=>数字，字母，下划线中的任意一个字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\s\t\t=>一个空白字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\t\t\t=>一个制表符（一个tab键，四个空格）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x|y\t\t=>x或者y中的一个字符  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1|5|9\t=>1或者5或者9中的一个字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [xyz]\t=>xyz中的任何一个字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [^xyz]\t=>非xyz的字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [a-z]\t=>指定a-z这个范围中的任意字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [0-9a-zA-Z_]\t=>0-9,a-z,A-Z,下划线")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \\b\t\t=>匹配一个单词的边界")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ()\t\t=>分组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (?:)\t\t=>只匹配不捕获")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (?=)\t\t=>正向预查")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (?!)\t\t=>负向预查")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3,普通元字符：代表本身含义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zhufeng"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t此正则匹配的就是“zhufeng”\n")])])]),a("h3",{attrs:{id:"常见的修饰符img"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的修饰符img"}},[t._v("#")]),t._v(" 常见的修饰符img")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* i ignorecase\t\t忽略单词大小写匹配\n* m multiline\t\t忽略换行匹配\n* g global\t\t\t全局匹配\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false,大小写不匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true,忽略大小写匹配")]),t._v("\n")])])]),a("h3",{attrs:{id:"x-y"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-y"}},[t._v("#")]),t._v(" "),a("code",[t._v("x|y")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("reg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(18|29)$/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'29'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("code",[t._v("[]")])]),t._v(" "),a("p",[t._v("中括号中的字符一般都代表本身的含义")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("reg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[@+]+$/")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表匹配@或者+出现1到多次，并且以@+开头结尾的字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@@@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+++'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123123123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12@+123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@++++'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中括号中的\\d代表0-9的任意字符")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[\\d]$/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'\\'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VM1442")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Uncaught SyntaxError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Invalid or unexpected token\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中括号中不存在多位数")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[18]$/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);