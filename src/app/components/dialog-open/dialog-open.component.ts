import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/reuse-material/services/dialog.service';

@Component({
  selector: 'dialog-open',
  templateUrl: './dialog-open.component.html',
  styleUrls: ['./dialog-open.component.css']
})
export class DialogOpenComponent  {

  public dialogTitle="Confirm Dialog";
  public message="Choose your decision";
  constructor(private dialogService:DialogService){}
  openDialogBox()
  {
    const dialog= this.dialogService.openConfirmDialog(this.dialogTitle,this.message);
    dialog.afterClosed().subscribe((res)=>{
      console.log(res);
    })
  }
}
