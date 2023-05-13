import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ItemListComponent } from "./_components/item-list/item-list.component";
import { UpdateItemComponent } from "./_components/update-item/update-item.component";
import { CreateItemComponent } from "./_components/create-item/create-item.component";
import { HomeComponent } from "./_components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'items/:id', component: UpdateItemComponent},
  {path: 'create', component: CreateItemComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
