import { Component } from '@angular/core';  
import { FormControl,Validators,FormControlStatus, FormGroup , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

constructor(private fb: FormBuilder){


  
}


get name(){
return this.formUser.get('name')as FormControl;
}

get email(){
  return this.formUser.get('email')as FormControl;
  }

  formUser = this.fb.group({
    'name': ['',Validators.required],
   'email': ['',Validators.required,Validators.email]
  })



  // formUser = new FormGroup({ //TODO:crea el form group el 'name' dependera de que parte del formulario se debe requerir 
  //   'name':  new FormControl('',Validators.required),
  //   'email': new FormControl('',[Validators.required,Validators.email])
  // }


  // );


procesar(){ //TODO:metodo para abreviar los geted (get name get email)

  console.log(this.formUser.value)
}


// name = new FormControl('',Validators.required);
// email = new FormControl('',[Validators.required,Validators.email]);

}
