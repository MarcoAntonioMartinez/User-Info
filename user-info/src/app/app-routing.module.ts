import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesAssignmentComponent } from './ses-assignment/ses-assignment.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
	{
	  path: '',
	  component: SesAssignmentComponent
	},
	{
	  path: 'display-data',
	  component: DisplayDataComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
