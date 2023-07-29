export interface QuestionBase{
  controls:Array<question>;
}

export interface question{
    name: string;
    label: string;
    value: string|undefined;
    type: string;
    options: {key: string, value: string}[];
    rangeoptions: {min:number,max:number,step:number,icon:string};
    validators: { required?: boolean, minLength?: number};  
}