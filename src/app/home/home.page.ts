import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SportsApiService } from 'src/app/services/sport-api';
import { BetsService } from 'src/app/services/bet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  matches: any[] = [];
  leagueId = '4328';
  loading = false;

  showBetModal = false;
  selectedMatch: any = null;

  amount: number = 5;
  odds: number = 1.5;

  constructor(private sports: SportsApiService, private bets: BetsService) {}

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.loading = true;
    this.sports.getNextLeagueMatches(this.leagueId).subscribe({
      next: (res: any) => {
        this.matches = res.events || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  openBetModal(match: any) {
    this.selectedMatch = match;
    this.amount = 5;
    this.odds = Number((Math.random() * (4 - 1.2) + 1.2).toFixed(2));
    this.showBetModal = true;
  }

  closeModal() {
    this.showBetModal = false;
  }

  confirmarApuesta() {
    const bet = {
      matchId: this.selectedMatch.idEvent,
      league: this.selectedMatch.strLeague,
      homeTeam: this.selectedMatch.strHomeTeam,
      awayTeam: this.selectedMatch.strAwayTeam,
      selection: 'HOME_WIN',
      odds: this.odds,
      amount: this.amount,
      createdAt: new Date()
    };

    this.bets.placeBet(bet)
      .then(() => {
        alert('✅ Apuesta creada correctamente');
        this.closeModal();
      })
      .catch(() => alert('❌ Error al crear apuesta'));
  }
}
