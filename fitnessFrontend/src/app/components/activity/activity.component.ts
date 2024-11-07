import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  }

  activityForm!: FormGroup;
  activities: any;

  constructor (private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService
  ){}

  ngOnInit(){
    this.activityForm = this.fb.group({
      caloriesBurned: [null, [Validators.required]],
      steps: [null, [Validators.required]],
      distance: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });

    this.getAllActivities();
  }

  submitForm(){
    this.userService.postActivity(this.activityForm.value).subscribe(res => {
      this.message.success("Atividade adicionada com sucesso.", {nzDuration: 3000});
      this.activityForm.reset();
      this.getAllActivities();
    }, error => {
      this.message.error("Erro ao adicionar atividade", {nzDuration: 3000});
    })
  }

  getAllActivities(){
    this.userService.getActivities().subscribe(res => {
      this.activities = res;
    })
  }
}
