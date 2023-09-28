import { Component, OnInit} from '@angular/core';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-mis-medicamentos',
  templateUrl: './mis-medicamentos.component.html',
  styleUrls: ['./mis-medicamentos.component.scss'],
  providers: [MdbModalService]
})
export class MisMedicamentosComponent implements OnInit {

  modalRef: MdbModalRef<AgregarMedicamentoComponent> | null = null;
  bgColor = 'none';
  constructor(private modalService: MdbModalService) {}

  openModal() {
    //this.bgColor = '#CBD9E5';
    this.modalRef = this.modalService.open(AgregarMedicamentoComponent, {
      modalClass: '.modal-lg', data: { combo1: '200gr c/8 horas' , combo2: '500gr c/12 horas'}
    })
  }

  openModalItemOne() {
    this.modalRef = this.modalService.open(AgregarMedicamentoComponent, {
      modalClass: '.modal-lg', data: { name: 'Levotiroxina', combo1: '200gr c/8 horas' , combo2: '500gr c/12 horas'}
    })
  }

  openModalItemTwo() {
    this.modalRef = this.modalService.open(AgregarMedicamentoComponent, {
      modalClass: '.modal-lg', data: { name: 'Acetaminofén', combo1: '500gr c/12 horas',  combo2: '200gr c/8 horas' }
    })
  }


  ngOnInit() {
  }

}
