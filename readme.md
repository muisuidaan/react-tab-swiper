

项目中有这样的需求：
每组导航中有张数不同的图片，点击tab导航切换到每组图片的第一张，左右滑动图片时到极限值时切换导航，同时如果导航条不在当前页面让导航条出现在页面中
自己尝试用react写了个例子，其中导航条保持在可视区采用的是h5的scrollIntoView();


#React项目结构#

**commons**

>*components*--------------------全局公共组件
>
>*images*--------------------公共图片资源
>
>*css*--------------------公共样式
>
>*less*--------------------公共less代码
>
>*utils*--------------------全局通用基础功能代码
>
>*config*--------------------配置文件
>
>*libs*--------------------外部库或插件

**module1**

>*components*--------------------模块公共组件

>*images*--------------------模块公共图片资源

>*css*--------------------模块公共css样式

>*less*--------------------模块公共less代码

>*utils*--------------------模块内部基础功能代码

>*tmpl*--------------------静态页面模版

>*routes*--------------------模块路由，一般对应具体的页面

>>*Route1*--------------------路由1

>>>*components*--------------------页面路由组件

>>>*routes*--------------------页面子路由，结构同模块路由(可选，部分页面可能没有子路由即没有这个目录)

>>>>*ChildRoute1*--------------------子路由1，结构同路由1

>>>>>*components*--------------------子路由组件

>>>>>*index.js*--------------------子路由配置

>>>>*ChildRoute2*--------------------同子路由1，以下同子路由1对应目录

>>>>>*components*

>>>>>*index.js*

>>>*index.js*--------------------路由1配置

>>*Route2*--------------------同路由1，以下同路由1对应目录

>>>*components*--------------------同路由1

>>>*index.js*--------------------同路由1


**常用命令：
- npm install 安装程序依赖包
- npm start 运行本地测试服务 默认访问地址：http://localhost:8080/ ，页面地址：http://localhost:8080/ +路由
- webpack 生成发布文件
**
