import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { MisMedicamentosComponent } from './mis-medicamentos/mis-medicamentos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign', component: SignComponent },
  { path: 'main', component: MisMedicamentosComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
