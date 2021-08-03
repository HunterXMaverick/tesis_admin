import { Component, OnInit } from '@angular/core';
import { CongressService }  from '../../services/congress.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  page: number = 1;
  congress: any = [];

  constructor(
    private congressService: CongressService,
    private router: Router
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


  disableCongress(id: string, status_congress: string) {
    let dataCongress = {
      status_congress: status_congress
    }
    this.congressService.disableEnableCongress(id, dataCongress).subscribe(
      res => {
        if (status_congress === 'Habilitado') {
          Swal.fire({
            icon: 'success',
            title: 'Congreso habilitado',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Congreso Pendiente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    );
  }
}