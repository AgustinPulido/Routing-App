import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomUserService } from '../../services/random-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number = this.route.snapshot.params.id;

  constructor(
    private route: ActivatedRoute,
    public userGen: RandomUserService,
  ) {}

  ngOnInit(): void {
  }

}
