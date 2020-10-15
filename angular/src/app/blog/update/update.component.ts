import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { Blog } from 'src/app/models/model';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o: Blog;
  title = '';
  /*{imagesInit}*/

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , private fb: FormBuilder, private service: BlogService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;
    this.createForm();

  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Blog): void {
    let sub = null;
    if (o.id === 0) {
      sub = this.service.post(o).subscribe(r => {

        this.dialogRef.close(o);
      });
    } else {
      sub = this.service.put(o.id, o).subscribe(r => {

        this.dialogRef.close(o);
      });
    }

    this.subs.push(sub);
  }

  createForm() {
    this.myForm = this.fb.group({
      id: [this.o.id, [Validators.required, ]],
      titre: [this.o.titre, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new Blog();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
