import { Component, OnInit } from '@angular/core';
import { CongressService }  from '../../services/congress.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  page: number = 1;
  congress: any = [];

  constructor(
    private congressService: CongressService
  ) { }

  ngOnInit(): void {
  this.getCongress();
  }

  getCongress() {
    return this.congressService.getCongress().subscribe(
      res => {
        this.congress = res;
      },
      err => console.error(err)
    );
  }

}
