import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Project } from '../../../models/project';

@Component({
  selector: 'app-authorizations-tab-content',
  templateUrl: './authorizations-tab-content.component.html',
  styleUrls: ['./authorizations-tab-content.component.scss']
})
export class AuthorizationsTabContentComponent implements OnInit, OnDestroy {
  // public properties
  loading: boolean;
  project: Project;

  // private fields
  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.route.parent.data.subscribe(
      (data: { project: Project }) => this.project = data.project,
      error => console.log(error),
      () => this.loading = false
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
