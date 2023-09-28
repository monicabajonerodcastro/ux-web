import { Component, OnInit } from '@angular/core';
import { MdbModalRef , MdbModalService} from 'mdb-angular-ui-kit/modal';
import { AgregarMedicamentoDosComponent } from '../agregar-medicamento-dos/agregar-medicamento-dos.component';

@Component({
  selector: 'app-agregar-medicamento',
  templateUrl: './agregar-medicamento.component.html',
  styleUrls: ['./agregar-medicamento.component.scss'],
  providers: [MdbModalService]
})
export class AgregarMedicamentoComponent implements OnInit {
  name: string | null = null;
  combo1: string | null = null;
  combo2: string | null = null;
  modalRefTwo: MdbModalRef<AgregarMedicamentoDosComponent> | null = null;

  constructor(public modalRef: MdbModalRef<AgregarMedicamentoComponent>, private modalService: MdbModalService) {}



  openModalTwo() {
    this.modalRef.close()
    this.modalRefTwo = this.modalService.open(AgregarMedicamentoDosComponent, {
      modalClass: '.modal-lg'
    })

  }

  ngOnInit() {
  }

}
