import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  children: [
      {
          path: '',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
          path: 'about',
          loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
      },
      {
          path: 'candy',
          loadChildren: () => import('./pages/candy/candy.module').then(m => m.CandyModule)
      },
      {
          path: 'new',
          loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule)
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
