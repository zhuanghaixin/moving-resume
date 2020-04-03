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
    }, 30)

}
let result = `/*
 * 面试官你好，我是庄海鑫
 * 下面是我的会动的简历~
 */
 
/* 首先给所有元素加上过渡效果 */
*{
 transition: all 1s;
}
/* 白色背景太单调了，我们来点背景 */
html{
    background: #ddd;
}
/* 文字离边框太近了 */
#code-wrapper{
    padding: 20px;
}
/* 加个边框 */
#code{
    border: 1px solid #888;
    padding: 24px;
}

/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}

/* 来点呼吸效果 */
#code{
    animation: breath 0.5s infinite alternate-reverse;
}
`;


let result2 = `

/* 接下来给自己准备一张白纸 */
#code-wrapper{
    position: fixed;
    width: 50%;
    left: 0;
    height: 100%;
    padding: 20px;
}
#code{
    border: 1px solid #888;
}
#paper{
    position: fixed;
    right: 0;
    width:50%;
    height:100%;
    background: #444;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
   background: white;
   width: 100%;
   height: 100%;
}
/* 好了，我开始写简历了 */
`;
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
- [Vue小米商城](https://github.com/zhuanghaixin/xiaomi-mall-pc-demo)
- [Vue组件库](https://github.com/zhuanghaixin/hisen)
- [vue-admiin-dashboard](https://github.com/zhuanghaixin/vue-admin-dashboard)
- [会动的简历](https://github.com/zhuanghaixin/moving-resume)
- [简历介绍页面](https://zhuanghaixin.github.io/Cool-resume/src)
- [皮卡丘动画](https://github.com/zhuanghaixin/Pikaqu)
- [画板](https://github.com/zhuanghaixin/Canvas-drawing-board)
- [书签](https://zhuanghaixin.github.io/myBookmarks/)

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
