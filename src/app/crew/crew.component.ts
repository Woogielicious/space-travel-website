import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { Crew } from '../shared/crew.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent {
  crew$!: Observable<Crew | undefined>;
  crew: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.crew$ = this.route.params.pipe(
      switchMap((params) => {
        const name = params['name'];
        return this.dataService.getCrewByName(name);
      })
    );
  }
}
