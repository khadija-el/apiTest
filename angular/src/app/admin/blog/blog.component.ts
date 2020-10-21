import { Component, OnInit, ViewChild, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { merge, Subscription, Subject } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { DeleteService } from 'src/app/components/delete/delete.service';
import { Blog } from 'src/app/models/model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  subs: Subscription[] = [];

  dataSource: Blog[] = [];
  displayedColumns = ['titre', 'option'];

  panelOpenState = false;

  titre = new FormControl('');

  constructor(public service: BlogService, public dialog: MatDialog
    , private mydialog: DeleteService) {
  }

  ngOnInit() {
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
          this.titre.value === '' ? '*' : this.titre.value,
        );
      }
    );
    this.subs.push(sub);
  }

  reset() {
    this.titre.setValue('');
    this.update.next(true);
  }

  search() {
    this.update.next(true);
  }

  getPage(startIndex, pageSize, sortBy, sortDir, titre) {
    const sub = this.service.getAll(startIndex, pageSize, sortBy, sortDir, titre).subscribe(
      (r: any) => {
        console.log(r);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );

    this.subs.push(sub);
  }

  openDialog(o: Blog, text, bool) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '1100px',
      disableClose: true,
      data: { model: o, title: text, visualisation: bool }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Blog(), `Ajouter blog`, false).subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Blog) {
    this.openDialog(o, `Modifier blog`, false).subscribe((result: Blog) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(id: number) {
    const r = await this.mydialog.openDialog('Blog').toPromise();
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


