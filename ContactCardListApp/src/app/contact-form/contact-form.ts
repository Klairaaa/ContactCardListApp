import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  name: string = "Kyla Roxanne";
  contactNumber: number = 639063393972;
  email: string = "kylaroxannemaghari@gmail.com";
}
