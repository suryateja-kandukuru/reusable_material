import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDialogModule } from "@angular/material";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModuleModule { }
