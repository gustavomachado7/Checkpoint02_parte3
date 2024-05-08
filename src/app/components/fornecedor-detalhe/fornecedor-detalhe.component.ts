import { Fornecedor } from './../../interfaces/Fornecedor';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fornecedor-detalhe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fornecedor-detalhe.component.html',
  styleUrl: './fornecedor-detalhe.component.css',
})
export class FornecedorDetalheComponent {
  fornecedor?: Fornecedor;
  fornecedorForm: FormGroup = new FormGroup({});
  constructor(
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService,
    private formbuilder: FormBuilder
  ) {
    this.getFornecedorById();
  }

  id?: string;
  getFornecedorById() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this.fornecedorService
      .getById(this.id)
      .subscribe(
        (fornecedorResponse) => (this.fornecedor = fornecedorResponse)
      );
    //fornecedorResponse é a resposta que está vindo do subscribe
    this.fornecedorForm = this.formbuilder.group({
      nome: [this.fornecedor?.nome],
      endereco: [this.fornecedor?.endereco],
      telefone: [this.fornecedor?.telefone],
      id: [this.fornecedor?.id],
    });
  }

  update(): void {
    if (this.fornecedorForm.valid) {
      const fornecedorAlterado: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        endereco: this.fornecedorForm.value.endereco,
        telefone: this.fornecedorForm.value.telefone,
        id: this.fornecedorForm.value.id,
      };
      this.fornecedorService.atualizar(fornecedorAlterado).subscribe();
      alert('Fornecedor alterado com sucesso!!');
    }
  }
}
