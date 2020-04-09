import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
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

  constructor() { }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ngOnInit() {
    //this.somaDoisNumeros(10, 99);
  }

}
