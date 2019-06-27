import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];

  constructor(private servicioNoticias: NoticiasService) {}

ngOnInit() {
  this.servicioNoticias.getNoticias().subscribe(noticias => {
    console.log(noticias);
  // actualizar las nuevas noticias, solo carga las nuevas agrgadas y no todas
    this.articles.push(...noticias.articles);
  });
}

}
