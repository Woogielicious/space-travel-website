import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { Technology } from '../shared/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  technology$!: Observable<Technology | undefined>;
  technology: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.technology$ = this.route.params.pipe(
      switchMap((params) => {
        const name = params['name'];
        return this.dataService.getTechnologyByName(name);
      })
    );
  }
}
