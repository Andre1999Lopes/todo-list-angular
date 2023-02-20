import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  blockList: Array<string> = [];

  addBlock(blockName: string) {
    const name = this.blockList.find((b) => b === blockName);
    if (!!name) {
      window.alert('O bloco já existe');
    } else {
      this.blockList.push(blockName);
    }
  }

  removeBlock(blockName: string) {
    const newBlockList = this.blockList.filter((b) => blockName !== b);
    this.blockList = newBlockList;
  }
}
