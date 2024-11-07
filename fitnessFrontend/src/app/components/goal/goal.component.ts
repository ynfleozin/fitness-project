import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../service/user.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  }

  goalForm!: FormGroup;
  goals: any;

  constructor (private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService
  ){}

  ngOnInit(){
    this.goalForm = this.fb.group({
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });

    this.getAllGoals();
  }

  submitForm(){
    this.userService.postGoal(this.goalForm.value).subscribe(res => {
      this.message.success("Meta adicionada com sucesso.", {nzDuration: 3000});
      this.goalForm.reset();
      this.getAllGoals();
    }, error => {
      this.message.error("Erro ao adicionar meta.", {nzDuration: 3000});
    })
  }

  getAllGoals(){
    this.userService.getGoals().subscribe(res => {
      this.goals = res;
    })
  }

  updateStatus(id:number){
    this.userService.updateGoalStatus(id).subscribe(res => {
      this.message.success("Meta atualizada com sucesso", {nzDuration: 3000});
      this.getAllGoals();
    }, error => {
      this.message.error("Erro ao atualizar meta.", {nzDuration: 3000});
    })
  }
}
