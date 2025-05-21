import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Addiction {
  name: string;
  checkedDays: { [date: string]: boolean };
}

@Component({
  selector: 'app-szn',
  imports: [FormsModule, NgFor],
  templateUrl: './szn.component.html',
  styleUrl: './szn.component.css'
})
export class SznComponent {
  addictions: Addiction[] = [];
  newAddiction: string = '';

  constructor() {
    const stored = localStorage.getItem('addictions');
    if (stored) {
      this.addictions = JSON.parse(stored);
    }
  }

  get today(): string {
    const d = new Date();x
    return d.toISOString().slice(0, 10);
  }

  addAddiction() {
    const trimmed = this.newAddiction.trim();
    if (trimmed) {
      this.addictions.push({ name: trimmed, checkedDays: {} });
      this.newAddiction = '';
      this.saveAddictions();
    }
  }

  removeAddiction(index: number) {
    this.addictions.splice(index, 1);
    this.saveAddictions();
  }

  toggleToday(addiction: Addiction) {
    const today = this.today;
    addiction.checkedDays[today] = !addiction.checkedDays[today];
    this.saveAddictions();
  }

  private saveAddictions() {
    localStorage.setItem('addictions', JSON.stringify(this.addictions));
  }
}
