import { Component } from '@angular/core';
import { ItemService } from "../../_services/item.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-update-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  model: any = {};

  constructor(private itemService: ItemService, private router: Router) {
  }

  createItem(): void {
    this.itemService.createItem(this.model).subscribe({
      next: item => {
        console.log(item);
        this.router.navigateByUrl('/items');
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
