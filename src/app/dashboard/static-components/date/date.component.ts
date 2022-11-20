import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  //date
  date: { year: number, months: { index: number, month: string, days: number[] }[] }[] = []
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  monthDays: number[][] = [
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(28).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1)]

  days: number[] | undefined = Array.from(Array(31).keys()).map(val => val + 1);
  month: number = new Date().getMonth();
  @Input() start: number = 2022;
  @Input() biyear: number = 2024;
  @Input() yearRange: number = 20;
  day: number = new Date().getDate();
  @Input() year: number = new Date().getFullYear();

  //OUTPUTS
  @Output() selectedYear = new EventEmitter<number>();
  @Output() selectedMonth = new EventEmitter<number>();
  @Output() selectedDay = new EventEmitter<number>();
  //constructor
  constructor() {
  }

  ngOnInit(): void {
    let veintenueve = Array.from(Array(29).keys()).map(val => val + 1);
    let years = Array.from(Array(this.yearRange).keys()).map(val => val + this.start);
    this.date = years.map(value => {
      if (value == this.biyear) {
        this.biyear = value + 4;
        return {
          year: value, months: this.months.map((month, index) => {
            if (index == 1)
              return { index, month, days: veintenueve }
            else
              return { index, month, days: this.monthDays[index] }

          })
        }
      }
      else {
        return {
          year: value, months: this.months.map((month, index) => {
            return { index, month, days: this.monthDays[index] }
          })
        }
      }
    })
  }

  //manejo de eventos
  handleSelectYear(event: MatSelectChange): void {
    this.days = this.date.find((date => {
      return date.year == event.value && date.months[this.month].index == this.month;
    }))?.months[this.month].days;
    this.year = event.value;
    this.selectedYear.emit(this.year);
  }
  handleSelectMonth(event: MatSelectChange): void {
    this.days = this.date.find((date => {
      return date.year == this.year && date.months[event.value].index == event.value;
    }))?.months[this.month].days;
    this.month = event.value;
    this.selectedMonth.emit(this.month);
  }

  handleSelectDay(event: MatSelectChange): void {
    this.selectedDay.emit(this.day);
  }


}
