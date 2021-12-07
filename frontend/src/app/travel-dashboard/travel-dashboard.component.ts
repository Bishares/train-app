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

  selectedDate = new FormControl(new Date());
  selectedIsoDate: string;

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

  displayFn(trainstation: TrainStation) {
    return trainstation && trainstation.name ? trainstation.name : '';
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

  getStation(station) {
    this.selectedTrainStation = station;
  }

  private _filter(value: TrainStation): TrainStation[] {
    let filterValue;
    if (value.name) {
      filterValue = value.name.toLowerCase();
    } else {
      filterValue = '';
    }

    return this.trainStations.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  prepareDate(isoDate: string): string {
    return isoDate.substr(0, isoDate.indexOf('T'));
  }

  onSave() {
    this.selectedIsoDate = this.prepareDate(
      this.selectedDate.value.toISOString()
    );

    this.searchClicked = true;

    if (this.isEverythingSelected()) {
      this.everythingSelected = true;
    }

    if (this.everythingSelected) {
      if (this.selectedPlace == 'Abfahrt') {
        this.departureArrivalService
          .getDeparturesForIdDateAndTime(
            this.selectedTrainStation.id,
            this.selectedIsoDate,
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
            this.selectedIsoDate,
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
      this.selectedIsoDate != null &&
      this.selectedTime != null &&
      this.selectedPlace != null
    );
  }
}
