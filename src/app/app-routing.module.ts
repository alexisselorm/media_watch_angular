import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const routes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
