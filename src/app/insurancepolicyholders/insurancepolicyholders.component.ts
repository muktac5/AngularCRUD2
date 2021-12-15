import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { policyHolder } from './policyholders';


@Component({
  selector: 'app-insurancepolicyholders',
  templateUrl: './insurancepolicyholders.component.html',
  styleUrls: ['./insurancepolicyholders.component.css']
})
export class InsurancepolicyholdersComponent implements OnInit {

  
  formValue !: FormGroup;
  policyData !:any;
  policyObj:policyHolder=new policyHolder();
  policySearchObj:policyHolder=new policyHolder();
  showAdd!:boolean;
  showUpdate!:boolean;
  filterTerm:string="";
  constructor(private formbuilder:FormBuilder, private restService:RestService) { 
    
  }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      policyNo: [''],
      policyHolderName:[''],
      policyAmount:[''],
      EMIAmount:[''],
      nomineeName:['']
    })

    this.getAllEmployee();
  }

  clickAddPolicy(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postPolicyDetails(){
    this.policyObj.policyNo=this.formValue.value.policyNo;
    this.policyObj.policyHolderName=this.formValue.value.policyHolderName;
    this.policyObj.policyAmount=this.formValue.value.policyAmount;
    this.policyObj.EMIAmount=this.formValue.value.EMIAmount;
    this.policyObj.nomineeName=this.formValue.value.nomineeName;

    this.restService.postPolicy(this.policyObj).subscribe(res=>{
      console.log(res);
      alert("Policy details added successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },

    err=>{
      alert("Something went wrong");
    }
    )
  }

  getAllEmployee(){
    this.restService.getPolicy(this.policyObj).subscribe(res=>{
      this.policyData= res;


    })

    }
    deletePolicy(row:any){
      console.log("delete button clicked");
      this.restService.deletePolicy(row.id)
      .subscribe(res=>{
          alert("policy details deleted");
          this.getAllEmployee();
        }
      )
    }

    editPolicy(row:any){
      this.policyObj.id=row.id;
      this.showAdd=false;
    this.showUpdate=true;
      this.formValue.controls['policyNo'].setValue(row.policyNo);
      this.formValue.controls['policyHolderName'].setValue(row.policyHolderName);
      this.formValue.controls['policyAmount'].setValue(row.policyAmount);
      this.formValue.controls['EMIAmount'].setValue(row.EMIAmount);
      this.formValue.controls['nomineeName'].setValue(row.nomineeName);
    }

    updatePolicy()
    {
    this.policyObj.policyNo=this.formValue.value.policyNo;
    this.policyObj.policyHolderName=this.formValue.value.policyHolderName;
    this.policyObj.policyAmount=this.formValue.value.policyAmount;
    this.policyObj.EMIAmount=this.formValue.value.EMIAmount;
    this.policyObj.nomineeName=this.formValue.value.nomineeName;
    
    this.restService.updatePolicy(this.policyObj,this.policyObj.id)
    .subscribe(res=>{
      alert("Details updated");

      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

}

