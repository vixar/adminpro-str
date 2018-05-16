import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivosService
} from './services.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivosService
  ],
  declarations: []
})
export class ServicesModule { }
