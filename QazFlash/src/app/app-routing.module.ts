import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { HistoryComponent } from './history/history.component';
import { ClientComponent } from './client/client.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChargComponent } from './store/products/charg/charg.component';
import { CameraComponent } from './store/products/camera/camera.component';
import { RaykubeComponent } from './store/products/raykube/raykube.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'store', component: StoreComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'client', component: ClientComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'store/products/charg', component: ChargComponent},
  {path: 'store/products/camera', component: CameraComponent},
  {path: 'store/products/raykube', component: RaykubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
