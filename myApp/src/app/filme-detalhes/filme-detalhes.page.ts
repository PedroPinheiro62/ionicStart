import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoovieProvider } from '../api/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
  providers: [MoovieProvider]
})
export class FilmeDetalhesPage implements OnInit {
  public filme;
  public filmeId;
  public loading: HTMLIonLoadingElement;

  constructor(
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public movieProvider: MoovieProvider
  ) {

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando Detalhes do Filme...',
    });
    await this.loading.present();
  }

  async ngOnInit() {
    
  }

  async ionViewDidEnter() {
    await this.presentLoading();
    this.filmeId = this.route.snapshot.paramMap.get('id');
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(
      async data => {
        this.filme = data;
        console.log(this.filme);
        await this.loading.dismiss();
    }, async error => {
      console.log(error);
      await this.loading.dismiss();
    });
  }

}
