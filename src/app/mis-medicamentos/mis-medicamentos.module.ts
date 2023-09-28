import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisMedicamentosComponent } from './mis-medicamentos.component';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';
import { AgregarMedicamentoDosComponent } from './agregar-medicamento-dos/agregar-medicamento-dos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MisMedicamentosComponent, AgregarMedicamentoComponent, AgregarMedicamentoDosComponent],
  exports: [MisMedicamentosComponent,AgregarMedicamentoComponent, AgregarMedicamentoDosComponent]
})
export class MisMedicamentosModule { }
