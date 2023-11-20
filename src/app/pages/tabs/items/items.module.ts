import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { ItemComponent } from 'src/app/components/item/item.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RestaurentDetailComponent } from 'src/app/components/restaurent-detail/restaurent-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ItemsPage, ItemComponent, RestaurentDetailComponent],
})
export class ItemsPageModule {}
