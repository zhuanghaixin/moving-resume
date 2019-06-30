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
            fn.call()
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
#code{

}

*{
transition:all 1s;
}
html{
  background:rgba(222,222,222)
  font-size:16px;
}
#code{
 border:1px solid red;
 padding:16px
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

/* 加点3D效果*/
#code{
    transform:rotate(360deg);
}
/* 不玩了，我来介绍一下我自己*/
/* 我需要一张白纸*/

#code{
position:fixed;
left:0;
width:50%;
height:100%;
}

#paper{
position:fixed;
display:flex;
right:0;
// justify-content:center;
// align-items:center;
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


writeCode('',result,()=>{
    console.log("哦，结束了")
    createPaper(()=>{
        writeCode(result,result2)
    })
})

//类比
//明天六点起床()
//玩游戏()


function createPaper(fn){
    var paper=document.createElement('div')
    paper.id='paper'
    var content=document.createElement('div')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()

}
function fn3(preResult) {
    console.log(1234)

    var n = 0
    var id = setInterval(() => {
        n += 1
        console.log(preResult)
        console.log('result')
        console.log(result)
        code.innerHTML = preResult+result.substring(0,n)
        code.innerHTML=Prism.highlight(preResult, Prism.languages.css, 'css');
        styleTag.innerHTML = preResult+result.substring(0,n)
        // console.log(1)

        if (n >= result.length) {
            console.log('ss')
            window.clearInterval(id)

        }
    }, 10)

}
