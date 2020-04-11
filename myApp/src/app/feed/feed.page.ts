import { Component, OnInit } from '@angular/core';
import { MoovieProvider } from '../api/user.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MoovieProvider
  ]
})

export class FeedPage implements OnInit {
  public objeto_feed = {
    titulo: "Charles França",
    data: "November 5, 1995",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comment: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();
  public loading: HTMLIonLoadingElement;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    private movieProvider: MoovieProvider,
    public loadingController: LoadingController,
    private router: Router
  ) {

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando Filmes...',
    });
    await this.loading.present();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(){
    this.router.navigateByUrl('tabs/feed/detalhes');
  }

  async carregarFilmes(){
    await this.presentLoading();
    this.movieProvider.getLatestMovies().subscribe(
      async data => {
        console.log(data);
        this.lista_filmes = (data as any).results;
        await this.loading.dismiss();
        if (this.isRefreshing) {
          this.refresher.target.complete();
          this.isRefreshing = false;
        }
      }, async error => {
        console.log(error);
        await this.loading.dismiss();
        if (this.isRefreshing) {
          this.refresher.target.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}
