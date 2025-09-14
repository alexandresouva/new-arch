import { Component, effect, signal } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  copyArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CdkDrag, CdkDropList],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent {
  protected readonly availableItems = signal([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4'
  ]);
  protected readonly selectedItems = signal([
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8'
  ]);
  protected readonly cdkDropListConnectedTo = this.getDraggedItemId();

  constructor() {
    effect(() => {
      console.log(this.selectedItems());
      console.log(this.availableItems());
    });
  }

  protected getDraggedItemId(): string[] {
    return this.selectedItems()
      .map((_, index) => `item-${index + 1}`)
      .concat('selected-items');
  }

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event.container.id);

    this.selectedItems.update((items) => {
      const item = event.item.data as string;
      if (items.includes(item)) {
        return items;
      }
      return [...items, item];
    });
  }

  noReturnPredicate(): boolean {
    return true;
  }
}
