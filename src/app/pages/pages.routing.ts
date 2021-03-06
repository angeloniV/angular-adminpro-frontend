import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AcoountSettingsComponent } from './acoount-settings/acoount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: "Dashboard"} },
      { path: 'progress', component: ProgressComponent, data: {titulo: "Progress"} },
      { path: 'charts', component: Grafica1Component, data: {titulo: "Grafica"} },
      { path: "account-settings", component: AcoountSettingsComponent, data: {titulo: "Account Settings"}},
      { path: "promesas", component: PromesasComponent, data: {titulo: "Promesas"}},
      { path: "rxjs", component: RxjsComponent, data: {titulo: "RxJs"}}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
