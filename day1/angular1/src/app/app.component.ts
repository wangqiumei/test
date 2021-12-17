import { Component } from '@angular/core';

//angular核心模块中导入组件装饰器
//装饰器定义组件元数据
//selector 相当于组件名称
//templateUrl 定义模板文件地址
//styleUrls  定义模板的样式文件地址
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'angular1';

}
