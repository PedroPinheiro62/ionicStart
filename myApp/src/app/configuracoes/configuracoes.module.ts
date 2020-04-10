import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracoesPageRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesPage } from './configuracoes.page';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracoesPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ConfiguracoesPage }])
  ],
  declarations: [ConfiguracoesPage]
})
export class ConfiguracoesPageModule {}
