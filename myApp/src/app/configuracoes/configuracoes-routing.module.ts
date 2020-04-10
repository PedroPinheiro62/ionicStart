import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesPage } from './configuracoes.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage,
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'sobre', 
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sobre/sobre.module').then(m => m.SobrePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/settings/perfil',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesPageRoutingModule {}
