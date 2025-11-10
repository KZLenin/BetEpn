import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async register() {
    const loading = await this.loadingCtrl.create({ message: 'Creando cuenta...' });
    await loading.present();

    try {
      await this.auth.register(this.email, this.password);
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Cuenta creada correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/login']);
    } catch (err) {
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No se pudo crear la cuenta. Revisa tus datos.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  goLogin() {
  this.router.navigate(['/login']);
  }

}
