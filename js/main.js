function writeCode(prefix,code,fn){
    console.log('fn')
    console.log(fn)
    let domCode=document.querySelector('#code')
    let n = 0
    console.log("设置闹钟")
    let id = setInterval(() => {
        n += 1
        console.log("开始执行代码");
        domCode.innerHTML =Prism.highlight(prefix+code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML =prefix+ code.substring(0, n)
        //页面滚动
        domCode.scrollTop=10000
        if (n >= code.length) {
            console.log('ss')
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 1)

}
var result = `
/* 面试官你好，我是XXX
 * 我将以动画的形式来描述自己
 * 只有文字介绍太单调了
 * 我用代码来介绍吧
 * 首先我会准备一些样式
 */

*{
transition:all 1s;
}
html{
  background:rgba(222,222,222)
  font-size:16px;
}

*{
transition:all 1s;
}
html{
  background:rgba(222,222,222)
}
#code{
 border:1px solid #aaa;
 padding:16px;
}

/* 我需要代码高亮*/
.token.selector{
    color:#690;
}
.token.function{
    color:#dd4a68;
}
.token.property{
    color:#905;
}
/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/* 加点3D效果*/
#code{
    transform:rotate(360deg);
}




/* 现在正式开始 */
/* 我需要一张白纸 */

#code{
position:fixed;
left:0;
width:50%;
height:100%;
}
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}

#paper{
position:fixed;
display:flex;
right:0;

align-items:staet;
width:50%;
height:100%;
background-color:black;
padding:10px;
}
#paper>.content{
background-color:white;
width:100%;
height:100%;
}
`


var result2=`
 #paper{

  }


    `
// writeCode(result)   // 设置闹钟；10毫秒后开始写第一行代码
// console.log("执行fn2");
// fn2()
//1。定闹钟
//2。writeCode返回
//3.执行fn2()
//4.闹钟时间到
//5。写第一行代码

var md=`
# 前端工程师简历
## 基本信息
- 姓名：庄海鑫
- 年龄：22岁
- 电话：13604903685
- 微信：zhxzuishuai0515
- 邮箱：649308293@qq.com
## 社交主页
- gihub:[https://github.com/zhuanghaixin](https://github.com/zhuanghaixin)
## 掌握技能
- 掌握HTML5/CSS3，熟悉传统布局、Flex布局、Grid布局、移动端适配等
- JavaScript 基础掌握良好，例如 this、闭包、原型链、作用域等基本概念。
- 熟悉Vue技术栈如Vue-Router、Vuex、Vue-CLI及相关流行库的使用，理解其重要概念,能够编写简单的 Vue.js 基础组件，以及完成相应的单元测试
- 掌握常用的 Git 命令
- 能够使用 ESlint 规范自己的代码风格，使用有意义的变量名以及意义明确的代码，提高代码的可读性
## 教育经历
09/2012~06/2015
###沈阳市第二十七中学
09/2015~07/2019
### 沈阳化工大学
软件工程
- 辽宁省计算机设计大赛二等奖---《舒乘网》
- 辽宁省大学生创新创业计划--《舒乘网》
- 英语四级：472
- 二次二等院级奖学金,两次三等院级奖学金
- 院级文艺活动展出(唱歌）
## 项目经历
09/2013~07/2017
## 基于Vue的UI组件库的设计与实现
- 项目介绍： 该项目的是参考目前流行的前端UI组件库Ant Design,iView进而设计的一款属于自己的组件库，实现了常有组件类型，基础组件，布局组件，导航组件，表单组件，视图组件 。项目使用Vue技术栈，组件库文档使用的是VuePress。
- 技术栈：vue、vue cli3、es6、parcel、karma、
- 项目地址: https://github.com/zhuanghaixin/hisen
03/2019~04/2019
## 基于Vue的仿CNode网站
- 项目介绍： 该项目的目的是搭建线上学习平台，把线下课堂的完整学习流程搬到线上，平台包括课程展示、购买、直播、录播、作业、权限管理、停课复课、试听等几十个大功能。该项目采用前后分离的技术方案， 我主要负责前端部分的开发。项目前端部分使用Vue技术栈，移动端平台使用自己实现的vue ui组件库。
- 技术栈：vue、vue-router、vuex、element-ui、typescript、webpack、es6、移动端
- 项目成果: 项目支撑饥人谷日常教学活动、运营活动的正常开展，支持数千学生的日常线上学习，几十万用户的日常访问。
09/2013~07/2017
## 会动的简历
- 项目介绍： 该项目的目的是搭建线上学习平台，把线下课堂的完整学习流程搬到线上，平台包括课程展示、购买、直播、录播、作业、权限管理、停课复课、试听等几十个大功能。该项目采用前后分离的技术方案， 我主要负责前端部分的开发。项目前端部分使用Vue技术栈，移动端平台使用自己实现的vue ui组件库。
- 技术栈：vue、vue-router、vuex、element-ui、typescript、webpack、es6、移动端
- 项目地址: 项目支撑饥人谷日常教学活动、运营活动的正常开展，支持数千学生的日常线上学习，几十万用户的日常访问。
- 项目预览: 项目支撑饥人谷日常教学活动、运营活动的正常开展，支持数千学生的日常线上学习，几十万用户的日常访问。
09/2013~07/2017
## 网易云音乐
- 项目介绍： 该项目的目的是搭建线上学习平台，把线下课堂的完整学习流程搬到线上，平台包括课程展示、购买、直播、录播、作业、权限管理、停课复课、试听等几十个大功能。该项目采用前后分离的技术方案， 我主要负责前端部分的开发。项目前端部分使用Vue技术栈，移动端平台使用自己实现的vue ui组件库。
- 技术栈：vue、vue-router、vuex、element-ui、typescript、webpack、es6、移动端
- 项目成果: 项目支撑饥人谷日常教学活动、运营活动的正常开展，支持数千学生的日常线上学习，几十万用户的日常访问。
## 个人评价
对前端有着浓厚的兴趣，很喜欢网页界面设计，会经常下载各种app和浏览一些网页，关注产品的用户体验。 未来三年规划，希望自己可以成长为独当一面的以产品为方向的前端工程师 每天学习英语半小时以上，我深知英语对前端的重要性，不论是对新技术的学习还是技术的深挖 会经常写博客总结自己所学。
`

let result3= `
/* 接下来把Markdown变成HTML - marked.js
*/

/* 接下来给HTML加样式
*/
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

writeCode('',result,()=> {
    console.log("哦，结束了")
    createPaper(() => {
        writeCode(result, result2, () => {
            console.log('写markdown')
            writeMarkdown(md, () => {
                console.log('markdownTohtml')
                convertMarkdownToHtml(() => {
                    writeCode(result + result2, result3, () => {
                        console.log('完成')
                    })
            })

            })
        })
    })
})
//类比
//明天六点起床()
//玩游戏()


function createPaper(fn){
    var paper=document.createElement('div')
    paper.id='paper'
    var content=document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()

}
function writeMarkdown(markdown,fn) {
    let domPaper=document.querySelector('.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML =markdown.substring(0, n)
        //页面滚动
       domPaper.scrollTop=10000
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 0)
}
// function fn3(preResult) {
//     console.log(1234)
//
//     var n = 0
//     var id = setInterval(() => {
//         n += 1
//         console.log(preResult)
//         console.log('result')
//         console.log(result)
//         code.innerHTML = preResult+result.substring(0,n)
//         code.innerHTML=Prism.highlight(preResult, Prism.languages.css, 'css');
//         styleTag.innerHTML = preResult+result.substring(0,n)
//         // console.log(1)
//
//         if (n >= result.length) {
//             console.log('ss')
//             window.clearInterval(id)
//
//         }
//     }, 10)
//
// }
//
function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}
