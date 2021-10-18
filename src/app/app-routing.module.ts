import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };

const routes: Routes = [

  { path: '',
  children: [
    // {path: 'newbill', component: NewBillComponent},
    // {path: 'main', component: MainInterfaceComponent},
    // {path: 'products', component: ProductsComponent},
    // {path: 'RefreshComponent', component: NewBillComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' },  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }



