import { FormGroup, FormControl, FormBuilder, Validators, NgForm, NgModelGroup} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {

  form = new FormGroup({
    nome : new FormControl('', Validators.required),
    email : new FormControl( '', Validators.email),
    cep: new FormControl( '', Validators.required),
    numero: new FormControl( '', Validators.required),
    complemento: new FormControl( '', Validators.required),
    rua: new FormControl( '', Validators.required),
    bairro: new FormControl( '', Validators.required),
    cidade: new FormControl( '', Validators.required),
    estado: new FormControl( '', Validators.required)
  });

  usuario: any = {
    nome: null,
    email: null,
  }

  constructor(private fb: FormBuilder){}

  onSubmit(){
    const dados = this.form;

    console.log(dados)
  }

  ngOnInit(): void {
    console.log(this.usuario);
    this.onSubmit();

    this.form = this.fb.group({
      nome:['', [Validators.required]],
      email:['',[Validators.required, Validators.email]],
      cep:['', [Validators.required]],
      numero:['', [Validators.required]],
      complemento:[''],
      rua:['', [Validators.required]],
      bairro:['', [Validators.required]],
      cidade:['', [Validators.required]],
      estado:['', [Validators.required]],
    })
  }
}
