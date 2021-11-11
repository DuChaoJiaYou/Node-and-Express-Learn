# 2021年11月8日 ~2021年11月12日 工作周报



### 一、FormData()

FormData.append

FormData.delete

FormData.entries

FormData.forEach

FormData.get

FormData.getAll

FormData.has

FormData.keys

FormData.set

FormData.values



## 一、基础

#### （1）模板语法

1. 文本插值： `{{}}`
2. 动态绑定属性：

针对于标签内的常用属性或 自定义属性，可以使用`v-bind：`来进行动态绑定，意味着后面所跟属性不是静态，需要动态计算。
简写形式： `:`

3. 相关指令： 在vue中指令是指带有`v-`前缀的特殊attribute，

常用的相关指令： 

> v-bind ： 缩写  `:`
> v-on     : 缩写  `@`
> v-for  
> v-if 、 v-else-if  、 v-else
> v-show

#### （2）计算属性和侦听器

1.  使用computed(){}函数来包含所要计算的相关变量，计算属性返回的也是data中的属性，所以也可以安装正常data()中所定义的属性方式来使用

```javascript
computed:{
  now:function(){
     return Date.now()
  }
}
```

2. 为了通过对某个数据的变化来进行响应，`watch`选项提供了一个更通用的方法

```javascript
计算属性 VS 侦听器 vs methods

1. 计算属性应对的场景主要是来对视图数据层的相关数据想要做进一步处理，
否则把这些操作直接放在模板中太庞大了，并且可以达到一个响应式的变化，同
时只有在数据放生变化时才会重新计算，否则会使用计算缓冲中的结果，这一点
是相比方法的优点，但是computed中不可以异步操作，

2. watch中可以进行相关异步操作
```

#### （3） class 与style绑定

动态的绑定class，改变相关样式操作在日常使用中非常常用，
常用的动态绑定有两种方式，一种是以**数组**的方式来绑定

```javascript
<div v-bind:class="[activeClass,errorClass]"></div>

data:{
 activeClass: 'active',
 errorClass:'text-danger'
}
这样实际渲染为：
<div class="active text-danger"></div>

实际开发中个人经常使用的一种方式是：
<div class="[isActive ? 'active' : '' , static ]"></div>
这样就可以通过三元运算符的计算结果来判定是否绑定相应属性
```

**另一种是以对象的方式来绑定**

```html
<div
    class='static'
    v-bind:class = "{ active: isActive ,'text-danger':hasError }"
   >
</div>

在相应的data中：
   data:{
      isActive:true,
      hasError:false
   }
```

## 二、 组件间的传值

日常工作中，常用的组件传值情况会有以下几种：
**1.父组件给子组件传值**
使用props的方法进行传输，可以传递基本数据类型或者引用数据类型

**2.父组件使用子组件的相关属性或方法**
通过给子组件定义ref,然后使用refs调用实例的方式来使用子组件的相关属性或方法
**3.子组件触发调用父组件的相关方法**
通过 $emits的方式，通过给子组件绑定传入一个自定义事件，然后在子组件中通过$emits('事件名' + 可选参数)的方式进行传值
**4.provide / indeject 注入的方式**
**5.使用vuex的方法进行传值**

## 三、 关于v-model

**一、input标签**

在vue中输入框等相关标签中可以使用`v-model`来进行双向绑定值，针对于`input`标签
其实v-model的本质就是绑定了`value`值，和input事件，即每当输入框中的值发生改变后，input事件会重新把该值赋值给data中的某个属性

**二、其他标签，诸如checkbox 、 select**

其他，诸如checkbox中其的v-model实则是绑定的是checked属性和change事件

而select是将value作为prop进行传入，绑定的change事件

## 四、路由

使用vue中的路由，简单可以概括为三个步骤：

1. 引入VueRouter
2. 建立routes路由对象数组，其中关于路由的书写可以有两种方式，一种是path，另一种是以name命名

同时可以建立子路由

3. 将routes数组包含在VueRouter中

## 五、slots

实际开发中会经常使用到插槽，

使用较多的有：

**具名插槽**

如果没有给插槽命名，那么默认在子组件标签中的内容就会渲染在该插槽中

如果给`template`标签中命名slot=''或者最新的语法v-slot:加上子组件中给slot 赋予的name名称。就可以将想要渲染的内容对应的渲染到对应的插槽中

**作用域插槽**

作用域插槽可以解决父组件中可以在将子组件传来的值以想要的方式展示出来

个人使用到的场景例如：

当在表格中渲染数据时，很多时候不只是把数据直观的渲染出来，而是要渲染成诸如颜色按钮，气泡等，这就需要从row中将数据拿到，针对于不同的状态以不同的风格展示

**使用语法是**：

1. slot-scope={}
2. v-slot:name={} 

传来的值支持解构

## 六、生命周期

在vue2的版本中，经常使用到会有created，mounted等生命周期函数



###### 下期博客，在开发中，已经通过使用composition-api的库来使用到了很多vue3的风格，在一些地方发生了很大的变化，那么这么做的好处在哪里呢？

###### 那就下期和小伙伴们分享啦！



##### `router-link`

[入门 | Vue Router (vuejs.org)](https://next.router.vuejs.org/zh/guide/#javascript)



**Apache DolphinScheduler pr登记地址**

 http://conf.cmss.com/pages/viewpage.action?pageId=134823118



 'Task Definition': 'Task Definition',

 'Create task': 'Create task',

 'Task Type': 'Task Type',



=======

 'Process execute type': 'Process execute type',

 parallel: 'parallel',

 'Serial wait': 'Serial wait',

 'Serial discard': 'Serial discard',

 'Serial priority': 'Serial priority',

 'Recover serial wait': 'Recover serial wait',



### Git  对 commit进行的相关 操作

1. **按作者打印commit**： git log --author=“git用户名”

2. **合并commit** :  git rebase  -i  HEAD~

对于合并命令，可以使用：

**pick**： 保留该commit （缩写: **p**）

**squash**： 将该commit的注释添加到上一个commit注释中 (缩写： **s**)

**fixup**: 放弃当前commit的注释 (缩写：**f**)

**drop**: 丢弃该commit （缩写： **d**）



3. **放弃rebase** : git rebase --abort
4. 



哥。关于mu-cli 的简单使用，

1. 在壳子项目（我们现在的base-web）的package.json中配置mu，如果有新模块就添加一个，主要是添加名称，分支名和gitlab地址
2. 使用 mu create 创建一个子模块 ，在其package.json中配置属于哪个壳子，

 然后npm run init ，打包， 将dist文件夹改名为release

然后之前创建i

还需要做哪些工作？



## 关于 DolphinScheduler 项目 任务定义  提交  bug 问题描述及解决办法



#### 问题描述： 将本地 运行  .env文件不小心传到个人仓库里了，也发送了pr到了公共仓库，现在将个人仓库里的 .env文件也删除了

#### 现在需要需要需要将   .env文件中的地址修改为默认地址，并恢复

> 答案：  
>
> 1. 使用  git reset  加 恢复到的commit 号 ， 可以恢复到 之前的状态
> 2. 然后解决冲突，将  .env文件中的地址还原为远程仓库的默认地址
> 3. 再次强制提交， git push  origin 本地分支名：远程个人仓库分支名  -f

**需要注意的是，虽然本地文件改来改去，但是只要和远程仓库的文件相比没有变化，则不会出现在file changes 中，就不算文件的改变**





## Process-access-gateway 源码笔记

### 一、Node.js学习笔记

![image-20211111100057337](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\image-20211111100057337.png)

同样作为JavaScript的运行环境，Node.js和浏览器都包含了ECMAScript, 浏览器还包含了BOM（Browser Object Model ，浏览器对象）,也就是window对象，和DOM（Document Object Model, 文档对象模型），也就是document对象

**使用node运行js文件时的console **

同在浏览器中运行console.log的区别：

1. 在浏览器中运行console.log是调用了BOM，实际上执行的是window.console.log('Hello World')
2. 而Node首先是在所处的操作系统中创建了一个新的进程，然后向标准输出打印指定的字符串

实际上执行的是`process.stdout.write('Hello World ! \n')`

**浏览器全局对象：**

1. document
2. window

**Node 全局对象**

1. process

**JavaScript全局对象的分类**

![image-20211111102456153](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\image-20211111102456153.png)

**浏览器专属：** window   、 alert

**Node专属：** process  、 Buffer 、 `__dirname`  、  `__filename`

**浏览器和Node共有，但是实现方式不同，例如`console`**，setTimeout  、 setInterval等

**浏览器和Node共有，并且属于ECMAScript语言定义的一部分**：例如： Date 、String 、Promise



#### Node 专属全局对象解析

`process`全局对象时管理当前Node.js进程状态的对象，提供了与操作系统的简单接口

**process对象的重要属性**

1. **pid**: 进程编号

2. **env**: 系统环境变量

3. **argv**: 命令行执行次脚本时的输入参数

4. **platform**: 当前操作系统的平台



**Buffer**

Buffer全局对象让JavaScript处理二进制数据流，结合Node的流接口（Stream）

**__filename  和 __dirname**

分别代表当前所运行Node脚本的**文件路径**和**所在目录路径**


### Node模块机制

> 模块机制的引入



**模块化规范：**

1. **AMD**( Asynchronous Module Definition) 规范
2. **CommonJS**规范： **Node.js所实现的正是这一模块标准**

3. **ECMAScript 2015** (ES6)标准为JavaScript语言引入了全新的模块机制（称为 **ES 模块**， 全称 ECMAScript Modules ）, 并提供了`import`和`export`关键词

**什么是Node模块？**（重要）

通常来说，Node模块可以分为两大类：

1. **核心模块：**Node提供的内置模块，在安装Node时已经被编译成二进制可执行文件
2. **文件模块：**用户编写的模块，可以是自己写的，也可以是通过npm安装的

其中，文件模块可以是一个**单独的文件**（以 `.js` 、`.node`、`.json` 结尾），

或者一个**目录**，**当这个模块是一个目录时，模块名就是目录名**，有两种情况：

* 目录中有一个`package.json`文件，则这个Node模块的入口就是其中`main`字段指向的文件
* 目录中有一个名为`index`的文件，拓展名为：`.js`、`.node`、`.json`，此文件则为模块入口文件

**Node模块机制**

Node引入了三个新的全局对象，1）**require**  2)  **exports**  3) **module**

1. **require** : 
   require用于导入其他Node模块，其参数接收一个字符串代表模块的名称或路径，通过被称为模块标识符，具体有以下三种形式：

* 直接写模块名称，通常是核心模块或第三方文件模块，例如： os , express
* 模块的相对路径，指向项目中的其他Node模块，例如 `./utils`
* 模块的绝对路径，例如 `/home/xxx/MyProject/utils`

> **提示**
>
> 在通过路径导入模块时，通常省略文件名中的`.js`后缀

```
//导入内置库 或第三方模块
const os = require('os');
const express = require('express');

// 通过相对路径导入其他模块
const utils = require('./utils')

//通过绝对路径导入其他模块
const utils = require('/home/xxx/Myproject/utils')
```

> 通过名称导入Node模块时，是从哪里找到这个模块的 ? 实际上每个模块都有个路径搜索列表`module.paths`

2. **exports** : 
   `exports对象`可以用来导出Node模块中的函数，

```
//myModule.js
function add(a,b){
  return a  + b;
}
// 导出函数
exports.add = add;
```

**重点：**通过将add函数添加到exports对象中，外面的模块就可以通过以下代码使用这个函数。在myModule.js旁边创建一个main.js，代码如下：

````
//main.js
const  myModule = require('./myModule')

//调用 myModule.js中的add函数
myModule.add(1,2)

````

3. **module**: 
   通过require和exports，已经知道如何导入、导出Node模块中的内容，

​      **module模块对象**

​     如果我们在模块文件和main.js文件中都打印一下：

````
console.log(module)
````

运行后会发现

`module`对象有以下字段：

| id                |                                                              |
| ----------------- | ------------------------------------------------------------ |
| path 、  filename |                                                              |
| exports           |                                                              |
| parent / children |                                                              |
| loaded            |                                                              |
| **paths**         | 这个就是Node搜索文件模块的路径列表，Node会从第一个路径到最后一个路径依次搜索指定的Node模块，找到了则导入，否则报错 |

​     ![image-20211111151839962](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\image-20211111151839962.png)


![image-20211111152447349](C:\Users\DC\AppData\Roaming\Typora\typora-user-images\image-20211111152447349.png)

**深入理解`module.exports`**

exports对象本质上是module.exports的引用，所以下面代码是等价的

```
exports.add  = add

module.exports.add = add
```

实际上还有第二种导出方式，直接把函数赋值给module.exports对象：

module.exports = add

这种方式相当于在引入的时候直接就引入了该函数，直接调用就可以。

> os.userInfo() 打印用户信息
>
> process.pid 打印进程号
>
> __filename  文件路径