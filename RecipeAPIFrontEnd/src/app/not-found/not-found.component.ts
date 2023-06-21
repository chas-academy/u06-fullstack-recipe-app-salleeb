import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  
  title = "";

  constructor(private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.title = data['title'];
    })
  }


}
