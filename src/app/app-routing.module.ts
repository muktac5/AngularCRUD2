import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InsurancepolicyholdersComponent } from './insurancepolicyholders/insurancepolicyholders.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'policyholders',component:InsurancepolicyholdersComponent},
  {path:'policyholders/:id',component:InsurancepolicyholdersComponent},
  {path:'**',component:NoPageFoundComponent}
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
