1. 基本知识点
    - react库只是为了创建虚拟dom ```React.createElement(标签名, 配置对象, ...children)```
        因此也具有更好的可扩展性
    - react-dom库是为了创建页面的元素 虚拟dom ---> 真实的dom(```ReactDOM.render(要渲染的内容, 挂载到指定的元素上)```)
    - 正常情况下，我们会使用jsx的方式进行开发，此时需要使用```babel```进行编码
    - 使用脚手架搭建工程: create-react-app 在脚手架中即可以使用js作为后缀，也可以使用jsx作为后缀
2. jsx: 就是一个js对象，会被babel进行转义，最终会转换成```React.createElement```
    注意点:
    1. 每一个jsx对象只能存在一个根节点,当一定会使用多个根节点的时候，我们可以使用```<React.Fragment>子节点</React.Fragment>```类似于vue中的template标签,最终不会渲染成真实的dom元素,也可以使用```<></>```来代替
    2. 每一个jsx元素都必须闭合（xml规范）：**自闭合、手动闭合** 比如img标签必须进行闭合
3. 在jsx中嵌入表达式:
    1. 注释内容 直接快捷键ctrl + ?
    2. 将表达式```{表达式}```作为内容的一部分
        - undefined、false、null不会显示在内容中
        - 普通对象(我们定义的对象)不能作为*内容*的一部分,但是可以防止react元素对象可以,也可以作为一个值(比如style中)
        ```原因: 转换成React.createElement()时，就会将当前对象作为一个子元素，进行渲染，但是它不符合虚拟react元素对象```
        - 使用数组: 会遍历数组，将数组的每一项都作为一个子元素进行渲染
        - 属性使用小驼峰命名法,比如类名className
    3. 防注入攻击
        - 自动编码(react已经处理)
        - dangerouslySetInnerHTML属性解除自动编码,还必须配置__html
    4. react元素不可变性:
        - jsx元素是一个对象，但是所有属性都是只读的 ```Object.freeze```进行冻结
        - 确实需要改变值，只能重新渲染一个jsx，此时不一定会很耗性能，因为创建对象损耗极小，此时可能存在复用dom元素的操作