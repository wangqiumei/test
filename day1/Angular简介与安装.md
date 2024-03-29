# Angular简介

1. 谷歌开源的JavaScript库
2. 新版采用TypeScript进行开发
3. 可用组件构建Angular
   - 一个组件由三个部分构成
     - 处理数据和功能的组件类
     - 决定UI和HTML模板
     - 定义外观的组件专属样式

# Angular安装

1. ```
   npm install -g @angular/cli
   ```

# 创建Angular项目

```
ng new xxx(项目名)
```

### 想自己安装模块

```
ng new xxx(项目名)  --skip-install
npm install
```

# 项目目录介绍

1. app：用于存放项目主要代码
   - app.module.ts为核心文件![image-20211203104848532](F:\WebStudy\Angular学习\day1\image\image-20211203104848532.png)
     - 如果要修改根组件，可以将bootstrap的数据修改成想要的组件名称
   - app.component.html是整个项目的html文件，可在你们修改结构![image-20211203145956406](F:\WebStudy\Angular学习\day1\image\image-20211203145956406.png)
   - app.component.less是整个项目的样式文件![image-20211203105151599](F:\WebStudy\Angular学习\day1\image\image-20211203105151599.png)
   - app.component.ts用于整个项目的js文件![image-20211203145921875](F:\WebStudy\Angular学习\day1\image\image-20211203145921875.png)
2. assets：用于存放资源，比如图片
3. environments：用于设置开发/生成环境
4. index.html：中心html文件
   - 所有内容会追加到该文件的<app-root></app-root>组件标签中

# 启动开发服务命令

```bash
npm start
```

# 创建新组件

1. 自动生成文件

   ```
   ng g component 组件要存放的目录/xxx(组件名)
   ```

2. ![image-20211203151344955](F:\WebStudy\Angular学习\day1\image\image-20211203151344955.png)

# 在根组件中使用自定义组件

![image-20211203151701417](F:\WebStudy\Angular学习\day1\image\image-20211203151701417.png)

