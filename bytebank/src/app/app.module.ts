import { HttpClientModule } from '@angular/common/http';
import { NovaTransfernciaComponent } from './nova-transfencia/nova-transferencia.componente';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localept, 'pt');

@NgModule({
  declarations: [AppComponent, NovaTransfernciaComponent, ExtratoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
