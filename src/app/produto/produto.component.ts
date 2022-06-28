import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

import { Produto } from '../domain/produto';
import { ProdutoModel } from '../model/produto-model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  list: Produto[] = [];

  form: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    valor: new FormControl(null, [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarTabela();
  }

  private carregarTabela() {
    this.get().subscribe((domains: Produto[]) => {
      if (domains) {
        this.list = domains;
      }
    });
  }

  cadastrar(): void {
    const id = this.form.controls['id'].value;
    const produto: ProdutoModel = this.form.getRawValue();
    if (id) {
      this.put(id, produto).subscribe((domain: Produto) => {
        if (domain.id) {
          this.carregarTabela();
          this.form.reset();
        }
      });
    } else {
      this.post(produto).subscribe((domain: Produto) => {
        if (domain.id) {
          this.list.push(domain);
          this.form.reset();
        }
      });
    }
  }

  editar(produto: Produto): void {
    this.form.controls['id'].setValue(produto.id);
    this.form.controls['nome'].setValue(produto.nome);
    this.form.controls['valor'].setValue(produto.valor);
  }

  apagar(produto: Produto): void {
    this.delete(produto.id).subscribe((domain: Produto) => {
      if (domain.id) {
        this.carregarTabela();
        this.form.reset();
      }
    });
  }

  private post(model: ProdutoModel): Observable<Produto> {
    const url = 'http://localhost:8080/produto/cadastrar';
    return this.http.post<Produto>(url, model);
  }

  private put(id: string, model: ProdutoModel): Observable<Produto> {
    const url = 'http://localhost:8080/produto/alterar/' + id;
    return this.http.put<Produto>(url, model);
  }

  private delete(id: string): Observable<Produto> {
    const url = 'http://localhost:8080/produto/remover/' + id;
    return this.http.delete<Produto>(url);
  }

  private get(): Observable<Produto[]> {
    const url = 'http://localhost:8080/produto/consultar';
    return this.http.get<Produto[]>(url);
  }
}
