import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-forgotpsw',
  templateUrl: './forgotpsw.page.html',
  styleUrls: ['./forgotpsw.page.scss'],
  standalone: false,
})
export class ForgotpswPage  {

  email = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async resetPassword() {
    if (!this.email) {
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message: 'Por favor ingresa tu correo electrónico.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Enviando correo...',
    });
    await loading.present();

    try {
      await this.auth.resetPassword(this.email);
      await loading.dismiss();

      const alert = await this.alertCtrl.create({
        header: 'Correo enviado',
        message: 'Revisa tu bandeja de entrada para restablecer tu contraseña.',
        buttons: ['OK'],
      });
      await alert.present();

      this.router.navigate(['/login']);
    } catch (err: any) {
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No se pudo enviar el correo. Verifica la dirección ingresada.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}