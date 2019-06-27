import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from 'src/app/interfaces/interface';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page implements OnInit {

  categoria: any;
  articles: Article[] = [];
  @ViewChild(IonSegment) segment: IonSegment;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private noticiasService: NoticiasService) {}

categorias: string[] = [
  'bussines',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
  ];

// al entrar en esa vista el valor por default sera en la posicion 0 bussines
ngOnInit() {
  this.segment.value = this.categorias[0];
}

onChange(event) {
  this.categoria = event.detail.value;
  this.noticiasService.getNoticiasPorCategoria(this.categoria)
  .subscribe(noticias => {
    console.log(noticias);
    this.articles.unshift(...noticias.articles);
  });
}

loadData(event) {
  setTimeout(() => {
    console.log('Done');
    this.noticiasService.getNoticiasPorCategoria(this.categoria)
  .subscribe(noticias => {
    console.log(noticias);
    this.articles.unshift(...noticias.articles);
  });
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.articles.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
}
}
