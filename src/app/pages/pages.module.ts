import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2- charts
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

// temporal
import { IncrementardorComponent } from './../components/incrementardor/incrementardor.component';
import { SharedModule } from '../shared/shared.module';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { GraficoPieComponent } from '../components/grafico-pie/grafico-pie.component';
import { GraficoBarraComponent } from '../components/grafico-barra/grafico-barra.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';







@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementardorComponent,
        GraficoDonaComponent,
        GraficoPieComponent,
        GraficoBarraComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        PerfilComponent,
        UsuariosComponent,
        ModalUploadComponent

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule

    ]
})

export class PagesModule { }
