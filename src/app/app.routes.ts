import { Routes } from '@angular/router';
import { CadastroMonstroComponent } from './components/monstro/cadastro-monstro/cadastro-monstro.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
    {
        path:'',  redirectTo:'cadastro-monstro', pathMatch:'full'
    },
    {
        path:'cadastro-monstro', component: CadastroMonstroComponent
    },
    {
        path:'cadastro-produto', component: CadastroProdutoComponent
    },

];
