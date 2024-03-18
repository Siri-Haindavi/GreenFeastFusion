import {Component, Input} from '@angular/core';
import {Meal} from "../interfaces/meal";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-meal-modal',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './meal-modal.component.html',
  styleUrl: './meal-modal.component.css'
})
export class MealModalComponent {
  @Input()
  meal: Meal | undefined;

  constructor() {

  }


}
