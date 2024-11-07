import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  gridStyle = {
    width: '100%',
    textAlign: 'center'
  }

  workoutForm: FormGroup;
  workouts:any;

  listOfType: any[] = [
    "Cardio",
    "Força",
    "Flexibilidade",
    "HIIT",
    "Pilates",
    "Dança",
    "Natação",
    "Ciclismo",
    "Corrida",
    "Caminhada",
    "Boxe",
    "CrossFit",
    "Remo",
    "Alongamento",
    "Artes Marciais",
    "Ginástica",
    "Escalada",
    "Pliometria",
  ];

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
  ) {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.getWorkouts();
  }

  submitForm(){
    this.userService.postWorkout(this.workoutForm.value).subscribe(res=>{
      this.message.success("Atividade adicionada com sucesso", {nzDuration:5000});
      this.workoutForm.reset();
      this.getWorkouts();
    }, error=>{
      this.message.error("Erro ao postar atividade", {nzDuration: 5000});
    })
  }

  getWorkouts(){
    this.userService.getWorkouts().subscribe(res=>{
      this.workouts = res;
    })
  }
}
