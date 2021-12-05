import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrainStation } from './train-station.state';
import { StationService } from '../station.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss'],
})
export class TravelDashboardComponent implements OnInit {
  //trainStationVariables
  myControl = new FormControl();
  //stationOptions: string[] = [];
  filteredOptions: Observable<TrainStation[]>;
  trainStations: TrainStation[] = [];
  selectedTrainStation: TrainStation;

  selectedTime: string;

  selectedDate = new FormControl(new Date().toISOString());

  selectedPlace: string;
  places: string[] = ['Abfahrt', 'Ankunft'];

  everythingSelected: boolean = false;
  searchClicked: boolean = false;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  getStations(event: any) {
    let searchTerm = '';
    searchTerm += event.target.value;
    if (searchTerm.length >= 2) {
      let success: any = {};
      this.stationService
        .getLocationsForName(searchTerm)
        .toPromise()
        .then((trainStations) => {
          success = trainStations;
          this.trainStations = success;
          console.log(this.trainStations);
        });
    }
  }

  private _filter(value: string): TrainStation[] {
    const filterValue = value.toLowerCase();

    return this.trainStations.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

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
