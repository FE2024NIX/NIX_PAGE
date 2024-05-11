import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('imageState', [
      state(
        'previous',
        style({
          opacity: 1,
        })
      ),
      state(
        'next',
        style({
          opacity: 0,
        })
      ),
      transition('previous <=> next', animate('0.4s ease-in')),
    ]),
  ],
})
export class ContactComponent {
  isHovered: boolean;

  loading: boolean;
  formSubmitted: boolean;

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
    this.formSubmitted = false;
    this.isHovered = false;

    this.form = this.fb.group(
      {
        from_name: ['', Validators.required],
        to_name: ['Fénix Triad Team'],
        from_email: ['', [Validators.required, Validators.email]],
        from_phone_num: [
          '',
          [Validators.pattern('^[0-9]*$'), this.phoneNumberValidator],
        ],
        message: ['', Validators.required],
      },
      {
        validators: this.atLeastOneFieldRequiredValidator(
          'from_name',
          'from_email',
          'message'
        ),
      }
    );
  }

  // Función para enviar los datos del formulario
  async sendData() {
    this.formSubmitted = true;
    try {
      // Se verifica si el formulario es válido antes de enviar
      if (this.form.invalid) {
        return;
      }
      this.loading = true;
      emailjs.init('m_SPYnjOYDtc8Xitr');

      await emailjs.send('service_0ulyrqg', 'template_zwx4g9g', {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        from_phone_num: this.form.value.from_phone_num,
        message: this.form.value.message,
      });

      this.toastr.success('Tu mensaje ha sido enviado!', 'Mensaje de éxito', {
        timeOut: 3000,
      });

      this.form.reset();
    } catch (error) {
      this.toastr.error(
        'Parece que estamos presentado problemas con nuestro servicio. \n Espere unos minutos e inténtelo nuevamente.',
        'Mensaje de error',
        {
          timeOut: 3000,
        }
      );
    } finally {
      this.loading = false;
    }
  }

  // Función de validación  que verifica si al menos uno de los campos está lleno
  atLeastOneFieldRequiredValidator(...fields: string[]) {
    return (group: FormGroup) => {
      const controls = fields.map(field => group.get(field) as AbstractControl);
      const filledControls = controls.filter(
        control => control.value?.trim() !== ''
      );
      return filledControls.length > 0
        ? null
        : { atLeastOneFieldRequired: true };
    };
  }

  // Función para verificar si el campo de teléfono contiene solo números
  phoneNumberValidator(control: AbstractControl) {
    const phoneNumber = control.value;
    const containsOnlyNumbers =
      phoneNumber === '' || phoneNumber === null || /^\d+$/.test(phoneNumber);

    return containsOnlyNumbers ? null : { containsLetters: true };
  }
}
