import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrainStation } from './train-station.state';
import { StationService } from '../station.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DepartureArrivalService } from '../departure-arrival.service';
import { Arrival } from './arrival.state';
import { Departure } from './departure.state';

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

  arrivals: Arrival[] = [];
  departures: Departure[] = [];

  constructor(
    private stationService: StationService,
    private departureArrivalService: DepartureArrivalService
  ) {}

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

    if (this.isEverythingSelected()) {
      this.everythingSelected = true;
    }

    if (this.everythingSelected) {
      if (this.selectedPlace == 'Abfahrt') {
        this.departureArrivalService
          .getDeparturesForIdDateAndTime(
            this.selectedTrainStation.id,
            this.selectedDate.value,
            this.selectedTime
          )
          .toPromise()
          .then((departures) => {
            this.departures = departures;
            console.log(this.departures);
          });
      } else {
        this.departureArrivalService
          .getArrivalsForIdDateAndTime(
            this.selectedTrainStation.id,
            this.selectedDate.value,
            this.selectedTime
          )
          .toPromise()
          .then((arrivals) => {
            this.arrivals = arrivals;
            console.log(this.arrivals);
          });
      }
    }
    console.log('time to search!');
  }

  private isEverythingSelected(): boolean {
    return (
      this.selectedTrainStation != null &&
      this.selectedDate != null &&
      this.selectedTime != null &&
      this.selectedPlace != null
    );
  }
  // evaluateSelections(): boolean{
  //   // TODO:
  //   if(this.selectedTrainStation && this.selectedTrainStation != "" &&)
  //   return
  // }
}
