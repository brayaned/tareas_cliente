import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(): void {
    // Aquí puedes manejar el envío del formulario
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
  }
}