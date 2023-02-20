import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  invisibleOptions = true;
  isDone = false;
  @Input() title: string = '';
  @Output() deleteTaskEvent = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  clickout(targetElement: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.invisibleOptions = true;
    }
  }

  deleteTask() {
    this.deleteTaskEvent.emit(this.title);
  }

  markTaskAsDone() {
    this.isDone = !this.isDone;
    this.invisibleOptions = true;
  }

  toggleOptionsVisibility() {
    this.invisibleOptions = !this.invisibleOptions;
  }
}
