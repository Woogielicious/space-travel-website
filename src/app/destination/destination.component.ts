import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { Destination } from '../shared/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  destination$!: Observable<Destination | undefined>;
  destination: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.destination$ = this.route.params.pipe(
      switchMap((params) => {
        const name = params['name'];
        return this.dataService.getDestinationByName(name);
      })
    );
  }
}
