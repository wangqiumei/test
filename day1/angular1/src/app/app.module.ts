import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';

// 装饰器，装饰class AppModule { }
@NgModule({
  declarations: [
    //导入需要用到的组件
    AppComponent,
    NewsComponent
  ],
  imports: [
    //导入服务(核心模块)
    BrowserModule   //该模块用来编译的
  ],
  providers: [],   // 自定义服务或模块存放地
  bootstrap: [AppComponent]   //首页组件存放位置
})
export class AppModule { }
