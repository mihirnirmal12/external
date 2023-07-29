import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/questionbase';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  formGroup!:FormGroup;
 questions!:QuestionBase;
  constructor(private questionserv:QuestionService) {
      this.formGroup=this.questionserv.formgroup();
  }

  ngOnInit(){
    this.questionserv.allQuestion().subscribe(res=>{
      this.questions=res;
    })
  }
}
