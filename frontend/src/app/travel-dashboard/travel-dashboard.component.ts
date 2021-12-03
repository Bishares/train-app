import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrainStation } from './train-station.state';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss'],
})
export class TravelDashboardComponent implements OnInit {
  trainStations: TrainStation[];
  selectedTrainStation: TrainStation;

  selectedTime: string;

  selectedDate = new FormControl(new Date().toISOString());

  selectedDepartureOrArrival: string;
  departureOrArrival: string[] = ['Abfahrt', 'Ankunft'];

  everythingSelected: boolean = false;
  searchClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    this.searchClicked = true;
    console.log('time to search!');
  }

  // evaluateSelections(): boolean{
  //   // TODO:
  //   if(this.selectedTrainStation && this.selectedTrainStation != "" &&)
  //   return
  // }
}
