import { DatePipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from './../../service/user.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CategoryScale, Chart } from 'chart.js/auto';

Chart.register(CategoryScale);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DatePipe],
})
export class DashboardComponent {
  statsData: any;

  workouts: any;
  activities: any;

  @ViewChild('workoutLineChart') private workoutLineChartRef: ElementRef;
  @ViewChild('activityLineChart') private activityLineChartRef: ElementRef;

  constructor(private userService: UserService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getStats();
    this.getGraphStats();
  }

  getGraphStats() {
    this.userService.getGraphStats().subscribe((res) => {
      this.workouts = res.workouts;
      this.activities = res.activities;
      console.log(this.workouts, this, this.activities);
      if (this.workoutLineChartRef || this.workoutLineChartRef) {
        this.createLineChart();
      }
    });
  }

  ngAfterViewInit(){
    if(this.workouts && this.activities){
      this.createLineChart();
    }
  }

  createLineChart() {
    const workoutCtx = this.workoutLineChartRef.nativeElement.getContext('2d');
    const activityCtx =
      this.activityLineChartRef.nativeElement.getContext('2d');

    new Chart(workoutCtx, {
      type: 'line',
      data: {
        labels: this.workouts.map((data: { date: any }) =>
          this.datePipe.transform(data.date, 'dd/MM')
        ),
        datasets: [
          {
            label: 'Calorias queimadas',
            data: this.workouts.map(
              (data: { caloriesBurned: any }) => data.caloriesBurned
            ),
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(80,200,120,0.6)',
            borderColor: 'rgba(0,100,0,1)',
          },
          {
            label: 'Duração',
            data: this.workouts.map((data: { duration: any }) => data.duration),
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(120,180,200,0.6)',
            borderColor: 'rgba(0,100,150,1)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(activityCtx, {
      type: 'line',
      data: {
        labels: this.activities.map((data: { date: any }) =>
          this.datePipe.transform(data.date, 'dd/MM')
        ),
        datasets: [
          {
            label: 'Calorias queimadas',
            data: this.activities.map(
              (data: { caloriesBurned: any }) => data.caloriesBurned
            ),
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(255,100,100,0.6)',
            borderColor: 'rgba(255,0,0,1)',
          },
          {
            label: 'Passos',
            data: this.activities.map((data: { steps: any }) => data.steps),
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(255,180,200,0.6)',
            borderColor: 'rgba(255,100,150,1)',
          },
          {
            label: 'Distância',
            data: this.activities.map((data: { distance: any }) => data.distance),
            fill: false,
            borderWidth: 2,
            backgroundColor: 'rgba(255,180,200,0.6)',
            borderColor: 'rgba(255,100,150,1)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getStats() {
    this.userService.getStats().subscribe((res) => {
      this.statsData = res;
    });
  }
}
