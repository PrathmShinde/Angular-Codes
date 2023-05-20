import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  id: any;
  constructor(private _activeRouter: ActivatedRoute) { }

  ngOnInit() {

    this.id = this._activeRouter.snapshot.params['id']
  }
}
