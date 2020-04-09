import { Component, OnInit } from '@angular/core';
import { MoovieProvider } from '../api/user.service';

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

  constructor(
    private movieProvider: MoovieProvider
  ) { }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ngOnInit() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);
        this.lista_filmes = (data as any).results;
      }, error => {
        console.log(error);
      }

    )
  }
}
