import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { DialogService } from "../../services/dialog.service";
@Component({
  selector: 'app-reuseable-dialog',
  templateUrl: './reuseable-dialog.component.html',
  styleUrls: ['./reuseable-dialog.component.css']
})
export class ReuseableDialogComponent {
  title:string;
  message:string;

  constructor(private dialogRef:MatDialogRef<ReuseableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.title=data.title;
      this.message=data.message;
     }
     
     onDialogClose(data)
     {
      return this.dialogRef.close(data);
     }
}
