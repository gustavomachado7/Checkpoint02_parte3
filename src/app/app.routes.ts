import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedorDetalheComponent } from './components/fornecedor-detalhe/fornecedor-detalhe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fornecedor/:id', component: FornecedorDetalheComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: '**', component: HomeComponent },
];
