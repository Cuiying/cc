import { Component, OnInit } from '@angular/core';

import {ToastService} from '../shared/toast/toast.service';
import {ToastConfig,ToastType} from '../shared/toast/toast-model';

@Component({
  selector: 'toast-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-info" (click)="openInfo()">Info toast</button>
              <button type="button" class="btn btn-warning" (click)="openWarning()">Warning toast</button>
              <button type="button" class="btn btn-success" (click)="openSuccess()">Success toast</button>
              <button type="button" class="btn btn-danger" (click)="openError()">Error toast</button>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
              组件目录:src/app/modules/shared/toast
             </div>
           </div>
        </div>
    </div>
  `
})
export class ToastDemoComponent{

  constructor(private toastService: ToastService){}

  openInfo(){
     const toastCfg = new ToastConfig(ToastType.INFO,'这是一条INFO消息!','', 3000);
     this.toastService.toast(toastCfg);
  }


  openWarning(){
     const toastCfg = new ToastConfig(ToastType.WARNING,'这是一条WARNING消息!','', 3000);
     this.toastService.toast(toastCfg);
  }

  openSuccess(){
     const toastCfg = new ToastConfig(ToastType.SUCCESS,'这是一条SUCCESS消息!','', 3000);
     this.toastService.toast(toastCfg);
  }

  openError(){
     const toastCfg = new ToastConfig(ToastType.ERROR,'这是一条ERROR消息!','', 3000);
     this.toastService.toast(toastCfg);
  }

}