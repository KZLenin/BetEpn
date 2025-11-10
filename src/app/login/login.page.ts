import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage  {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async login() {
    if (!this.email || !this.password) {
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        message: 'Por favor ingrese su correo y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const loading = await this.loadingCtrl.create({ message: 'Iniciando sesión...' });
    await loading.present();

    try {
      await this.auth.login(this.email, this.password);
      await loading.dismiss();
      this.router.navigate(['/home']);
    } catch (err: any) {
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Credenciales incorrectas o usuario inexistente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
  goForgotPassword() {
  this.router.navigate(['/forgotpsw']);
}

}
