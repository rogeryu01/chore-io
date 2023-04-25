import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Chore, ChoreService } from '../chore.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrls: ['./create-chore.component.css']
})
export class CreateChoreComponent {

  public static Route = {
    path: 'create',
    component: CreateChoreComponent
  }

  createChoreForm = this.formBuilder.group({
    chore_name: '',
    assigned_to: '',
    due_date: '',
    repeat_for: '',
    status: '',
    points: ''
  });

  constructor(private formBuilder: FormBuilder, private choreService: ChoreService) {}

  onSubmit(): void {
    let chore_info = this.createChoreForm.value;
    let chore_name = chore_info.chore_name ?? "";
    let assigned_to = chore_info.assigned_to ?? "";
    let due_date = chore_info.due_date ?? "";
    let repeat_for = chore_info.repeat_for ?? "";
    let status = chore_info.status ?? "";
    let points = chore_info.status ?? "";

    if (chore_name == "") {
      alert("A chore must have a name");
      return;
    }
    if (assigned_to == "") {
      alert("A chore must be assigned to someone");
      return;
    }
    if (due_date == "") {
      alert("A chore must have a due date");
      return;
    }
    if (repeat_for == "") {
      alert("A chore must have a repeat for");
      return;
    }
    if (status == "") {
      alert("A chore status cannot be empty");
      return;
    }

    if (points == "") {
      alert("A chore must have points");
      return;
    }
    
    let chore: Chore =
    {
      choreId: null,
      name: chore_name,
      assignedTo: assigned_to,
      dueDate: due_date,
      repeatFor: repeat_for,
      status: status,
      points: points
    
    }


    this.choreService.createChore(chore).subscribe( 
      {
        next: () => this.onSuccess(),
        error: () => this.onError()
      }
    );  
  }

  private onSuccess() {
    this.createChoreForm.reset();
    alert("Submitted");
  }

  private onError() {
    alert("Unknown Error")
  }
  
}
