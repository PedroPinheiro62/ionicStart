import { Component, OnInit } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  rootPage = PerfilPage;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  abrirPerfil(){
    this.router.navigateByUrl('tabs/settings/perfil');
  }

  abrirSobre(){
    this.router.navigateByUrl('tabs/settings/sobre');
  }

}
