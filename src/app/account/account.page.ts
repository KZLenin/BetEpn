import { Component, OnInit } from '@angular/core';
import { BetsService } from '../services/bet';
import { AuthService } from '../services/auth';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false,
})
export class AccountPage implements OnInit {

  bets: any[] = [];
  totalSpent = 0;

  constructor(private betsSrv: BetsService, private auth: AuthService) {}

  async ngOnInit() {
    const user = await this.auth.getCurrentUser();
    if (!user) return;

    this.betsSrv.getUserBets(user.uid).subscribe((data: any[]) => {
      this.bets = data;
      this.totalSpent = data.reduce((sum, b) => sum + (b.amount || 0), 0);
    });
  }

  logout() {
    this.auth.logout();
  }
}