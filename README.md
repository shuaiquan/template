# 使用 JavaScript 开发的项目模板
这是一份可以快速开发 JS 项目的模版

### 目录说明

开发目录为 `src` 文件夹，入口文件 `src/index.js`。
```javascript
import { hot } from 'hot';

// 实际逻辑业务

// Enable HMR
hot(module);
```
入口文件中调用 `hot` 模块可开启模块热更新

`dist` 文件夹为编译后的产物

### 开发说明
项目启动：
```
npm start
```
默认端口为：9000

编译项目：
```
npm run build
```

### 备注说明
当前模板使用 webpack 进行模块的打包编译，默认仅支持 JS 文件
