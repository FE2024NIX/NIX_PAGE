import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  loading: boolean;

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Fénix Triad Team',
    from_email: '',
    from_phone_num: '',
    message: '',
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.loading = false;
  }

  // Función para enviar los datos del formulario
  async sendData() {
    try {
      this.loading = true;
      emailjs.init('m_SPYnjOYDtc8Xitr');

      await emailjs.send('service_0ulyrqg', 'template_zwx4g9g', {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        from_phone_num: this.form.value.from_phone_num,
        message: this.form.value.message,
      });

      // Alerta al enviar el mensaje con éxito
      this.toastr.success('Tu mensaje ha sido enviado!', 'Notificación', {
        closeButton: true,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-center',
        timeOut: 5000,
        extendedTimeOut: 1000,
      });

      this.form.reset();
    } catch (error) {
      //Manejo de errores
    } finally {
      this.loading = false;
    }
  }
}
