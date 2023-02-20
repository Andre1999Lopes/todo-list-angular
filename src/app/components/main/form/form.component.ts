import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() blockEvent = new EventEmitter<string>();

  emitBlock(blockName: string) {
    if (!blockName) window.alert('O nome do bloco não pode ser vazio');
    else this.blockEvent.emit(blockName);
  }
}
