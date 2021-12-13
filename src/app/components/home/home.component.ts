import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public userGen: RandomUserService,
    private router: Router,
  ) {
    this.userGen.getUsers();
  }

  ngOnInit(): void {
  }

  seeProfile(id: number){
      console.log('Yendo hacia el perfil');
      this.router.navigate(["/profile/user", id]);
  }

}
