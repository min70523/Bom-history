// let arr=[];
// console.log(arr.__proto__==Array.prototype);
// console.log(Array.prototype);
// console.log(arr.__proto__);
// console.log(arr);


//BOM
// var a=1;
// console.log(a);
// window.a;
// console.log(window.a);
// window.innerwidth;        //适口宽高，可见区域
// window.innerheight;
// document.documentElement.clientWidth    //文档对象的方法
//           // 元素            客户端  
// window.top;   //获取当前窗口的顶层窗口
// window.parsent;  //父级窗口
// window.self;  //自己本身
//window的方法,window可以省略
//按照某一个周期，不停执行某个函数
// window.setInterval(function(){      
// 	alert(1);
// },1000)    //函数:回调函数 时间单位:毫秒-最小4ms

// window.setInterval(()=>{alert(1)},1000)

// function fn(){
// 	alert(1);
// }
// let t=window.setInterval(fn,1000);  //用变量存下来时间函数的地址

// window.clearInterval(t);     //清除时间函数

// function fn(){
// 	alert(1);
// 	setTimeout(fn,1000);
// }
// fn();     
// // clearTimeout(t);         //执行一次后清除函数，释放内存
// //自带的
// alert();
// prompt();
// confirm();
// open();   //地址，新窗口名字
// location 地址
//属性
//  location.href=''    //链接地址
//  location.protocol   //规则
//  location.host       //
//  location.hostname   //
//  location.port       //端口号(门)
//  location.pathname   //  /s  
//  location.search     //? 属性=属性值&属性=属性值
//  location.hash       //锚点

// //方法
// location.assign('跳转页面')    //有历史记录
// location.reload()    //重新加载 利用本地资源  true所有资源重新请求、下载
// 	                                         //false利用本地资源重新加载 
// // location.replace()  //替换  没有历史记录
// value  //表单
// info.innerText(10)   //标签修改文字 

let str='abc';
let str1='abcd';
console.log(str1.match('ab'));	