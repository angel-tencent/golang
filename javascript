https://developer.mozilla.org/zh-CN/ 中文文档
https://npm.taobao.org/mirrors/node/
先装js再装vscode再下载node exec 
console.log('helloworld') F8运行打印输出hello world表示成功
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript js学习地址
var 声明一个变量
let 声明一个块作用域中的局部变量
const 声明一个常量
js中的变量声明和初始化是可以分开的
var a=1;
let b;
const f = 1;
d=5;

function a(){
    var b
    b=2000
    console.log(b)
}
a()
字符串和数值类型
number  数值型 包括整型 浮点型
boolean 布尔型true 和false
string 字符串 
null 只有一个值null
symbol ES6新引入类型
object类型 是以上基本类型的复合类型 是容器 
null 只有一个值 null 
undefined 变量声明 未赋值的 对象未定义的属性
console.log(a=3+'magedu',typeof(a)) #自动有强制类型转换
console.log(a=null+'magedu',typeof(a))
console.log(a=true+'magedu',typeof(a))
数字
console.log(a=null+3,typeof(a)) 
console.log(a=null+3,typeof(a))
console.log(a=true+3,typeof(a))
console.log(a=undefined+3,typeof(a)) 未定义的无法识别
console.log(a=null+true,typeof(a)) 0+1
console.log(a=null+false,typeof(a)) ）0+0
console.log(a=undefined+true,typeof(a))
console.log(a=undefined+false,typeof(a))
字符串处理
//字符串处理
let school='magedu'
console.log(school.charAt(2))
console.log(school[2])
console.log(school.toUpperCase())
console.log(school.concat('.com')) //连接8
console.log(school.slice(3)) //切片支持索引
console.log(school.slice(3,5)) 切3-5
console.log(school.slice(-2,-1))
console.log(school.slice(-2))

//字符串处理
let url="www.magedu.com"
console.log(url.split('.')) //以.为分隔符切割成列表
console.log(url.substr(7,2)) //从7下标开始取两个字符
console.log(url.substring(7,10)) //从7下标开始取到19的字符

//字符串处理
let s='www.magedu.edu'
console.log(s.indexOf('ed')) //找到子字符串第一次出现索引的位置
console.log(s.indexOf('ed',4)) //从4开始做找的话出现的是第七
s='\tmag edu \r\n'
console.log(s.trim()) //去掉两端的空白字符

数值number
console.log(a=Number.parseFloat('123'),typeof a) //将字符串转换成数字
console.log(a=parseInt('456'))
console.log(Math.PI)
console.log(Math.abs)
console.log(Math.random())
console.log(1/2)
console.log(parseInt(1/2)) //取整
console.log(3/2)
console.log(Math.floor(3/2)) //向下取整
console.log(Math.ceil(3/2)) //像上取整
console.log(Math.round(1/2))
console.log(Math.round(3/2))


console.log(1/2)
console.log(1/0)
console.log(5%3)
console.log(parseInt(1/2))
console.log(parseInt(3/2))
console.log(Math.floor(3/2))
console.log(Math.ceil(3/2))
console.log(Math.round(3/2))
console.log(Math.round(1/2))



let i=0
let a=i++ //先让a=0 i再自增
console.log(a,i)
console.log(a,i++) //用完以后才自增1
a=++i //先+后用所以输出的应该是3
console.log(a,i)

i=0
let a=++i+i+++i+++i
console.log(a)
console.log(100>'20') //弱类型的语言支持隐式转换
== //隐士转换
===恒等不能转换


&& || !  与 或 非
js运行多个表达式写在一起
let a=4+5,b=true,c=a>20?'t':'f'
console.log(c)

instanceof 判断是否属于指定类型
typeof 返回类型字符串
delete delete操作符 删除一个对象或一个对象的属性

表达式
let a=4+5,b=true,c=a>20?'t':'f'
console.log(c)
if (a>0){  //必须加()
    a++
}else {
    console.log(a)
}


let x=5  //跳到5的时候再判断case4 
switch (x){
    case 0:
    console.log('zero')
    break;
    case 1:
        console.log('one')
    case 2:
        console.log('two')
    case 3:
        console.log('three')
        break
        case 5:
        case 4:
            console.log('four')
        default:
            console.log('other')
            //break;
}
 


let x=5
if (x=0)
console.log('zero')
else if(x==1||x==2||x==3){

}else if (x==4||x==5) {
    console.log("four");
    console.log("other")
}
else
console.log('other')

for循环
for (let i=0;i<10;i++){
    console.log(i)
}
for(var x=0,y=9;x<10;x++,y--){
    console.log(x*y)
}
for (let i=0;i<10;i+=3){
    console.log(i)
}

let x=10
while (x--){
  console.log(x)
 }
 do {
 console.log(x);
 } while(x++<10) -1-9


写一个乘法表
for(var x=1;x<10;x++){
    line='';
    for (var j=1;j<=x;j++)
        line += `${j}*${x}=${x*j} `;
    console.log(line);
}

let arr = [10,20,30,40]
console.log(arr[1])
for (let x in arr)
console.log(x);
for (let index in arr)
    console.log(`${index}:${arr[index]}`) //插值 取index的值
for (let i=0;i<arr.length;i++)
console.log(arr[i])

函数表达式
www.w3cschool.cn/html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>思迅运维管理平台</title>
    <style type="text/css">
        table{
            width: 2cm;color:red
        }
        </style>
    <script>
        function a() {
            s=document.getElementById('s1');
            alert(s.value);
            s.value='abc';
            alert(s.value);
        }
        function b() {
        $.post('http://www.magedu.com/python',{
            'username':1,
            'password':'abc',
        },function (data) {
            //处理data就行了 data里面有你要的数据
        })
        }
    </script>
</head>
<body>
<from action="http://www.magedu.com/python/user/add" method="post" onsubmit="b()">
<table >
                        深圳运维常用链接
</table>
<div id="root">
    <p><a href="192.168.1.1:8080">zabbix.sissyun.com.cn</a></p>
    <p><a href="192.168.2.1:8080">nginx.sissyun.com.cn(admin:admin)</a></p>
    <p><a href="oa.sissyun.com.cn">公司办公门户网站</a></p>
    <table >
        武汉运维常用链接
    </table>
    <p><a href="128.0.01.1:8000">武汉开发环境rabbitmq</a></p>
    <p><a href="128.0.01.1:8000">武汉开发环境rabbitmq</a></p>
    <button onclick="a()">ok</button>
    <p>2</p>
    <ul>
        <li>1</li>
    </ul>
        <input id="s1" type="text" value="1234"onchange="alert(this.value)">
        <input type="submit" value="submit"/>
        </div>
    </from>
</body>
</html>





