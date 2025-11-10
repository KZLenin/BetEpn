import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth'; // asume que tienes uno
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BetsService {
  constructor(private afs: AngularFirestore, private auth: AuthService) {}

  async placeBet(bet: any) {
    const user = await this.auth.getCurrentUser(); // si tu auth retorna promesa o currentUser
    if (!user) throw new Error('Usuario no autenticado');
    const payload = {
      userId: user.uid,
      createdAt: new Date(),
      status: 'PENDING', // PENDING | WON | LOST
      ...bet
    };
    return this.afs.collection('bets').add(payload);
  }

  getUserBets(userId: string) {
    return this.afs.collection('bets', ref => ref.where('userId', '==', userId).orderBy('createdAt', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  updateBet(id: string, data: any) {
    return this.afs.collection('bets').doc(id).update(data);
  }
}
