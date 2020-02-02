import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationGuard } from '@app/core/guards/authorization.guard';

import { ContentLayoutComponent } from '@app/core/layouts/content-layout/content-layout.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthorizationGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'order',
        loadChildren: () =>
          import('@app/features/orders/orders.module').then(m => m.OrdersModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@app/features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
