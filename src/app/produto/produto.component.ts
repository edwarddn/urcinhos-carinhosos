import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProdutoModel } from '../model/produto-model';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  list: ProdutoModel[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    valor: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregarTabela();
  }

  private carregarTabela() {
    this.produtoService.consultar().subscribe((domains: ProdutoModel[]) => {
      if (domains) {
        this.list = domains;
      }
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const produto: ProdutoModel = this.form.getRawValue();
    if (id) {
      this.produtoService.alterar(id, produto).subscribe((domain: ProdutoModel) => {
        if (domain.id) {
          this.carregarTabela();
          this.form.reset();
        }
      });
    } else {
      this.produtoService.cadastrar(produto).subscribe((domain: ProdutoModel) => {
        if (domain.id) {
          this.list.push(domain);
          this.form.reset();
        }
      });
    }
  }

  editar(produto: ProdutoModel): void {
    this.form.controls['id'].setValue(produto.id);
    this.form.controls['nome'].setValue(produto.nome);
    this.form.controls['valor'].setValue(produto.valor);
  }

  apagar(produto: ProdutoModel): void {
    this.produtoService.remover(produto.id).subscribe((domain: ProdutoModel) => {
      if (domain.id) {
        this.carregarTabela();
        this.form.reset();
      }
    });
  }
}
