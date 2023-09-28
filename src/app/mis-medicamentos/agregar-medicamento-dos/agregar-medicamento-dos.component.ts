import { Component, OnInit } from '@angular/core';
import { MdbModalRef , MdbModalService} from 'mdb-angular-ui-kit/modal';
import { AgregarMedicamentoComponent } from '../agregar-medicamento/agregar-medicamento.component';

@Component({
  selector: 'app-agregar-medicamento-dos',
  templateUrl: './agregar-medicamento-dos.component.html',
  styleUrls: ['./agregar-medicamento-dos.component.scss'],
  providers: [MdbModalService]
})
export class AgregarMedicamentoDosComponent implements OnInit {
  modalRefOne: MdbModalRef<AgregarMedicamentoComponent> | null = null;

  constructor(public modalRef: MdbModalRef<AgregarMedicamentoDosComponent>, private modalService: MdbModalService) {}


  openModalOne() {

    this.modalRefOne = this.modalService.open(AgregarMedicamentoComponent, {
      modalClass: '.modal-lg', data: { combo1: '200gr c/8 horas' , combo2: '500gr c/12 horas'}
    })

  }



  ngOnInit() {
  }

}
