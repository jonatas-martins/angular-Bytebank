import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.componente.html',
  styleUrls: ['./nova-transferencia.componente.scss'],
})
export class NovaTransfernciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Transferencia Solicitada');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparcampos();
  }

  limparcampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
