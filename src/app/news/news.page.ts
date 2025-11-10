import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news-api';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: false,
})
export class NewsPage implements OnInit {
  articles: any[] = [];
  loading = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.loading = true;
    this.newsService.getSportsHeadlines('us').subscribe({
      next: (res: any) => {
        this.articles = res.articles || [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
  openArticle(url: string) {
  window.open(url, '_blank');
}

}
