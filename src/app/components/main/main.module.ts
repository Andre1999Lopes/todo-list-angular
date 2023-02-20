import { BlockComponent } from './block/block.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './block/task/task.component';

@NgModule({
  declarations: [MainComponent, FormComponent, BlockComponent, TaskComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class MainModule {}
