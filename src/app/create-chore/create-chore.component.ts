import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChoreService } from '../chore.service';


@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrls: ['./create-chore.component.css']
})
export class CreateChoreComponent {

  public static Route = {
    path: 'create_chore',
    component: CreateChoreComponent
  }

  createChoreForm = this.formBuilder.group({
    name: '',
    description: '',
    host_name: '',
    location: '',
    date: '',
    time: ''
  });

  constructor(private formBuilder: FormBuilder, private choreService: ChoreService) {}


}
