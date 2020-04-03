# moving-resume
## 页面会动的原理
### 在页面出现123456789，依次出现
```
var result='123456789'
setTimeout(()=>{
  document.body.innerHTML='1'
           },1000)
var result='123456789'
setTimeout(()=>{
  document.body.innerHTML='12'
           },2000)
var result='123456789'
setTimeout(()=>{
  document.body.innerHTML='123'
           },3000)
```
改进
```js
var result = '1234567890'
var n = 0
var id = setInterval(() => {
  n += 1
  document.body.innerHTML = result.substring(0, n)
  console.log(1)

  if (n >=result.length) {
    console.log('ss')
   
window.clearInterval(id)
  }
}, 500)
```
### 样式变化的原理
同时写一个style的标签和pre的标签
### 字体变色的原理
将文本`html`变成`<span style="color:red">html</span>`标签

### 语法高亮库
prism.js

## 异步和回调
### 异步
「不等结果」直接进行下一步操作
问题来了，我要怎么拿到结果？
使用「回调」
1.定闹钟
2.writeCode返回
3.执行fn2()
4.闹钟时间到
5.写第一行代码
//类比
明天六点起床()
玩游戏()
先玩游戏后起床
### 买黄牛票
回调
1.让黄牛去买票，然后自己站着等（同步）
2.让黄牛去买票(买到票去call我），然后自己去做别的。

「回调是拿到异步结果的一种方式」
「回调也能拿到同步结果」 
告诉黄牛，你买到票就打（回）电话给我。
when you get the ticket,call me back

