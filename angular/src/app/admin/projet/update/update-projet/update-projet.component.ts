import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { Projet } from 'src/app/models/model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {

  subs: Subscription[] = [];
  titile = '';
  myForm: FormGroup;
  o: Projet;

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
                               , private fb: FormBuilder, private service: ProjetService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.titile = this.data.title;
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: Projet): void {
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
      nom: [this.o.nom, [Validators.required, ]],
      date: [this.o.date, [Validators.required, ]],
      imageUrl: [this.o.imageUrl, [Validators.required, ]],
      git: [this.o.git, [Validators.required, ]],
      url: [this.o.url, [Validators.required, ]],
      description: [this.o.description, [Validators.required, ]],
      technologie: [this.o.technologie, [Validators.required, ]],

    });
  }

  resetForm() {
    this.o = new Projet();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
