import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModelGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {

  @Input() endereco!: NgModelGroup;
  @Input() cep!: Object;

  form = new FormGroup({
    nome : new FormControl('', Validators.required),
    email : new FormControl( '', Validators.email),
    endereco: new FormGroup({
      cep: new FormControl( '', Validators.required),
      numero: new FormControl( '', Validators.required),
      complemento: new FormControl( '', Validators.required),
      rua: new FormControl( '', Validators.required),
      bairro: new FormControl( '', Validators.required),
      cidade: new FormControl( '', Validators.required),
      estado: new FormControl( '', Validators.required)
    })

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
    this.consultaCEP(this.cep);

    this.form = this.fb.group({
      nome:['', [Validators.required]],
      email:['',[Validators.required, Validators.email]],
      endereco : new FormGroup ({
        cep: new FormControl,
        numero: new FormControl,
        complemento: new FormControl,
        rua: new FormControl,
        bairro: new FormControl,
        cidade: new FormControl,
        estado: new FormControl,
      })
    })
  }

  consultaCEP(cep:any){
    //console.log(cep);
  }
}
