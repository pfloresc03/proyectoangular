import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dni: new FormControl('',[Validators.required, dniValido()]),
    telefono: new FormControl(undefined,[Validators.required, Validators.pattern(/^[0-9]\d*$/), telefonoValido()])
  })
  formRegister2 = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    password: ['',[Validators.required,Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.email]],
    dni: ['',[Validators.required]],
    telefono: [undefined,[Validators.required, telefonoValido()]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  evaluaForm(): void {
    console.log("Evaluando formulario")
    console.log(this.formRegister.getRawValue())
    if (this.formRegister.valid){
      console.log("Todo correcto")
    } else {
      console.log("Vete a tomar por culo")
    }
  }
  get nombre1() {return this.formRegister.get("nombre")}
  get apellidos1() {return this.formRegister.get("apellidos")}
  get password1() {return this.formRegister.get("password")}
  get email1() {return this.formRegister.get("email")}
  get dni1() {return this.formRegister.get("dni")}
  get telefono1() {return this.formRegister.get("telefono")}
  evaluaForm2(): void {
    console.log("Evaluando formulario")
    console.log(this.formRegister.getRawValue())
    if (this.formRegister2.valid){
      console.log("Todo correcto")
    } else {
      console.log("Vete a tomar por culo")
    }
  }
}
