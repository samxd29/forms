import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @Input('formGroup') nome: string = '';
  @Input('formGroup') email: string = '';

  form = new FormGroup({
    nome : new FormControl('', Validators.required),
    email : new FormControl( '', Validators.email),
  });

  usuario: any = {
    nome: null,
    email: null,
  }

  constructor(private fb: FormBuilder){
  }

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
    })
  }
}
