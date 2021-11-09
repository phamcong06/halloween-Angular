import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandyComponent } from './candy.component';

const routes: Routes = [{ path: '', component: CandyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandyRoutingModule { }
