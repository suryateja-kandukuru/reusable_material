import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { ReuseableDialogComponent } from "../components/dialog/reuseable-dialog.component";
import { MatDialogRef,MatDialog } from "@angular/material/dialog";
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openConfirmDialog(title:string,message:string,width="400px",height="250px"):MatDialogRef<ReuseableDialogComponent>
  {
    return this.matDialog.open(ReuseableDialogComponent,{
      data:{title:title,message:message},
      width,
      height
    });
  }
}
