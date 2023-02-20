import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  taskList: Array<string> = [];
  invisibleBlockOptions = true;
  invisibleTaskCreationOptions = true;
  @Input() title = '';
  @Output() deleteBlockEvent = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  clickout(targetElement: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.reset();
    }
  }

  toggleBlockOptionsVisibility() {
    this.invisibleBlockOptions = !this.invisibleBlockOptions;
  }

  toggleTaskOptionsVisibility() {
    this.invisibleTaskCreationOptions = !this.invisibleTaskCreationOptions;
    this.invisibleBlockOptions = !this.invisibleBlockOptions;
  }

  addTask(taskName: string) {
    let task = this.taskList.find((t) => t === taskName);
    if (!taskName) {
      window.alert('O nome da tarefa não pode estar vazio');
    } else if (!!task) {
      window.alert('A tarefa já existe');
    } else {
      this.taskList.push(taskName);
    }
  }

  removeTask(taskName: string) {
    const newTaskList = this.taskList.filter((task) => taskName !== task);
    this.taskList = newTaskList;
  }

  reset() {
    this.invisibleBlockOptions = true;
    this.invisibleTaskCreationOptions = true;
  }

  deleteBlock() {
    this.deleteBlockEvent.emit(this.title);
  }
}
