import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { IDialogEventArgs, IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  @Input()
  public title = '';

  @Output()
  public ok = new EventEmitter<any>();

  @Output()
  public cancel = new EventEmitter<IDialogEventArgs>();

  @ViewChild(IgxDialogComponent, { static: true }) dialog: IgxDialogComponent;

  private confirmEntity: any;

  constructor() { }

  public okClicked() {
    this.ok.emit(this.confirmEntity);
    this.dialog.close();
  }

  public cancelClicked(args: IDialogEventArgs) {
    this.cancel.emit(args);
    this.dialog.close();
  }

  public onClose() {
    this.confirmEntity = null;
  }

  public open(entity) {
    this.confirmEntity = entity;
    this.dialog.open();
  }
}
