import { Component, OnInit } from '@angular/core';
import { Item } from "../../_models/item";
import { ItemService } from "../../_services/item.service";

@Component({
  selector: 'app-update-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe({
      next: items => {
        this.items = items;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe({
      next: () => {
        this.loadItems();
      },
      error: error => {
        console.log(error)
      }
    });
  }
}
