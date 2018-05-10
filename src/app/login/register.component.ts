import { UsuarioService } from './../services/services.index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


const swal: SweetAlert = _swal as any;

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }
  // comprar valores en el formulario
  sonIguales(campo1: string, campo2: string ) {
    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {

        return null;

      }
       return {
          sonIguales: true
        };

    };
  }

  ngOnInit() {

    init_plugins();

    // formulario
    this.forma = new FormGroup({

      nombre: new FormControl( null , Validators.required ),
      email: new FormControl( null, [Validators.email, Validators.required]),
      password: new FormControl(null , Validators.required),
      password2: new FormControl(null , Validators.required),
      condiciones: new FormControl( false ),

    }, { validators: this.sonIguales('password', 'password2')});


    this.forma.setValue({
      nombre: 'Test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });



  }

  registrarUsuario() {

    if ( this.forma.invalid) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
      // console.log('debe de completara los campos');
        swal ('Importante!', 'es necesario aceptar las condiciones', 'warning');
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password,
    );

    this._usuarioService.crearUsuario( usuario )
           .subscribe(resp => this.router.navigate(['/login']));

  }

}
