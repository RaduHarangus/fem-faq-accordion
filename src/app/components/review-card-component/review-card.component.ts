import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-review-card',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
})
export class ReviewCardComponent {
  ratingScale = Array.from({ length: 5 }, (_, i) => ({
    value: i + 1
  }));
  private router:Router = inject(Router);


  form = new FormGroup({
    rating: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    this.router.navigate(['/thank-you', this.form.value.rating]);
  }
}
