import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { CongressService } from '../../../services/congress.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss']
})
export class ReviewerComponent implements OnInit {

  photo: any = '';
  users: any = [];
  congress:any = [];
  status: boolean;
  page: number = 1;

  constructor(
    private personService: PersonService,
    private congressService: CongressService
  ) {
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.personService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }

  congresById(id: string) {
    this.congressService.getCongressById(id).subscribe(
      (result:any) => {
        this.congress = result.data;
        console.log(this.congress)
      },
      err => console.error(err)
    );
  }

  disableEnableUser(id: string, status: boolean) {
    let dataPerson = {
      status: status
    }
    this.personService.disableEnablePerson(id, dataPerson).subscribe(
      res => {
        if (status == true) {
          Swal.fire({
            icon: 'success',
            title: 'Usuario habilitado',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Usuario inhabilitado',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    );
  }

}
