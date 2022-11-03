import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.componente.html',
  styleUrls: ['./nova-transferencia.componente.scss'],
})
export class NovaTransfernciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Transferencia Solicitada');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparcampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparcampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
