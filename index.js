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

`




var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML=code.innerHTML.replace('html','<span style="color:red">html</span>')
    styleTag.innerHTML = result.substring(0, n)
    console.log(1)

    if (n >= result.length) {
        console.log('ss')

        window.clearInterval(id)
    }
}, 50)
