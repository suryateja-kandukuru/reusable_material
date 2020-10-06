import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { ReuseableDialogComponent } from "../components/dialog/reuseable-dialog.component";
import { MatDialogRef,MatDialog } from "@angular/material/dialog";
import { Overlay } from '@angular/cdk/overlay';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openConfirmDialog(title:string,message:string,width="400px",height="250px"):MatDialogRef<ReuseableDialogComponent>
  {
    return this.matDialog.open(ReuseableDialogComponent,{
      data:{title:title,message:message},
      width, //width
      height, // height
      disableClose:true, //disableClose :boolean
      position: { top:"20px",left:"50px" }, //position takes and object 
      direction:"ltr", // direction left to right or right to left
      panelClass:'my-panel' ,
      backdropClass:'my-backdrop',
      hasBackdrop:true,
      autoFocus:true,
      closeOnNavigation:true,
      
    });
  }
}
