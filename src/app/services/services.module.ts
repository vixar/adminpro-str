import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivosService,
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
  SubirArchivosService,
  ModalUploadService

  ],
  declarations: []
})
export class ServicesModule { }
