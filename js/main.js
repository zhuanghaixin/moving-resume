
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
`




var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = result.substring(0, n)
    console.log(1)

    if (n >= result.length) {
        console.log('ss')

        window.clearInterval(id)
    }
}, 30)
