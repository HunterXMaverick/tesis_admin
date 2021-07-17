import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  email: string
  dataUser: any = []
  profile_picture_url: string = '';

  constructor(
    private personService: PersonService
  ) {
    this.email = personService.email;
    // this.dataUser = JSON.parse(sessionStorage.getItem('_user-data')!);
    // this.getUserProfilePic(); 
  }

  ngOnInit() {
    this.getPersonByEmail();
  }

  getPersonByEmail() {
    return this.personService.getUserByEmail(this.email).subscribe(
      (res: any) => {
        this.dataUser = res.data;
        console.log(this.dataUser._id);
        this.personService.getUserById(this.dataUser._id).
        subscribe((res: any)=>{
          if (res.data.profile_picture) {
            this.profile_picture_url = `http://localhost:3500/api/file/${res.data.profile_picture}`;
          } else {
            this.profile_picture_url = `https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png`;
          }
        })
      },
      (err) => console.error(err)
    );
  }
}
