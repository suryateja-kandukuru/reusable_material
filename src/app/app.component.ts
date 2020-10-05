import { Component } from '@angular/core';
import { DialogService } from "./reuse-material/services/dialog.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reuseMaterial';
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
