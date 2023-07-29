import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../models/questionbase';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 

  private file:string="../assets/question.json"
  private questions!:QuestionBase;
 

  constructor(private http:HttpClient) { 
    this.formgroup()
  }
  
allQuestion(){
  return this.http.get<QuestionBase>(this.file);
}

  formgroup(){
    const group:any={};
    var arr:FormArray;

    this.http.get<QuestionBase>(this.file).subscribe((res)=>{
         res.controls.forEach(control=>{
        if(control.type=='checkbox'){
          arr=new FormArray([new FormControl()])
          control.options.forEach(element => {
            arr.push(new FormControl(false));
          });
          arr.removeAt(0);
        }

        group[control.name]= control.validators.required &&control.validators.minLength?new FormControl(control.value||'',[Validators.required,Validators.minLength(control.validators.minLength)]):control.validators.required?new FormControl(control.value||'',Validators.required):control.type=='checkbox' && control.options?arr:new FormControl(control.value||'') 
      })
    });
    return new FormGroup(group);
  }



   
  
  




}
