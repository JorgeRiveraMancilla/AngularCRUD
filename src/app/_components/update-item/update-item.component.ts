import { Component, OnInit } from '@angular/core';
import { Item } from "../../_models/item";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemService } from "../../_services/item.service";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  item: Item | undefined;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loadItem();
  }

  updateItem(): void {
    if (!this.item) return;
    this.itemService.updateItem(this.item).subscribe({
      next: message => {
        console.log(message);
        this.router.navigateByUrl('items');
      },
      error: error => {
        console.log(error);
      }
    })
  }

  loadItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.itemService.getItem(id).subscribe({
      next: item => {
        this.item = item;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
