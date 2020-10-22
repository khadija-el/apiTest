import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjetComponent } from 'src/app/admin/projet/projet.component';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Projet } from 'src/app/models/model';
import { ProjetService } from 'src/app/services/projet.service';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-servicee',
  templateUrl: './servicee.component.html',
  styleUrls: ['./servicee.component.scss']
})
export class ServiceeComponent implements OnInit {
  list: Projet[];
  @Output() deleteToParent = new EventEmitter();
  @Output() editToParent = new EventEmitter();

  constructor(public session: SessionService, private router: Router,
    public dialog: MatDialog, private mydialog: DeleteService, private service: ProjetService) { }

  ngOnInit(): void {
    this.getProjets();

  }

  getProjets() {
    this.service.get().subscribe(
      (r) => {
        console.log(r);
        this.list = r ;
      }
    );
  }

}
