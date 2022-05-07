## react

对于有跨平台能力的 react 来说, 分包可以将抽象逻辑与平台实现分开.
react 包是抽象逻辑, 包含了 react 的主干逻辑, 例如组件实现/更新调度等.

### 生命周期

constructor()
getDerivedStateFromProps()
// if its' update : shouldComponentUpdate
render
// if its' update : getSnapShotBeforeUpdate
react 更新 dom 和 props
componentDidMount // if its' update : componentDidUpdate

## react-dom

react-dom 只负责和 Web 页面的 dom 的处理

## redux

可以理解成一个严格规定了使用模式的库. 借鉴了函数式编程的思想, 采用了单向数据流的理念.
通过一些列的魔法和约定模式, 使得数据状态变得可预测/ 可追溯, 对编程体验和开发维护以及 bug 排查是及其重要的.
