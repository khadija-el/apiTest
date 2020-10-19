
import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { DeleteService } from '../components/delete/delete.service';
import { Projet } from '../models/model';
import { ProjetService } from '../services/projet.service';
import { UpdateProjetComponent } from './update/update-projet/update-projet.component';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Projet[] = [];
  displayedColumns = [ 'imageUrl','nom', 'date', 'git', 'url', 'description', 'technologie', 'option'];

  panelOpenState = false;

  nom = new FormControl('');
  date = new FormControl('');
  imageUrl = new FormControl('');
  git = new FormControl('');
  url = new FormControl('');
  technologie = new FormControl('');
  description = new FormControl('');

  constructor(public service: ProjetService, public dialog: MatDialog
    , private mydialog: DeleteService) {
  }
  ngOnInit(): void {

    const sub = merge(...[this.sort.sortChange, this.paginator.page, this.update]).pipe(startWith(null as any)).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.nom.value === '' ? '*' : this.nom.value,
        );
      }
    );
    this.subs.push(sub);
  }

  reset() {
    this.nom.setValue('');
    this.update.next(true);
  }

  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, nom) {
    const sub = this.service.getAll(startIndex, pageSize, sortBy, sortDir, nom).subscribe(
      (r: any) => {
        console.log(r);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  openDialog(o: Projet, text, bool) {
    const dialogRef = this.dialog.open(UpdateProjetComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }


  add() {
    this.openDialog(new Projet(), `Ajouter Projet`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Projet) {
    this.openDialog(o, `Modifier Projet`, false).subscribe((result: Projet) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog('Projet').toPromise();
    if (r === 'ok') {
      const sub = this.service.delete(id).subscribe(() => this.update.next(true));
      this.subs.push(sub);
    }
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
