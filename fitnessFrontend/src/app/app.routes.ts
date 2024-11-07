import { Routes } from '@angular/router';
import { WorkoutComponent } from './components/workout/workout.component';
import { ActivityComponent } from './components/activity/activity.component';
import { GoalComponent } from './components/goal/goal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {path: "atividades", component: ActivityComponent},
  {path: "treinos", component: WorkoutComponent},
  {path: "metas", component: GoalComponent},
  {path: "painel", component: DashboardComponent}
];
