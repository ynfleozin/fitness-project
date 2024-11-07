import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postGoal(goalDto:any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/goal", goalDto)
  }

  postActivity(activityDto: any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/activity", activityDto);
  }

  postWorkout(workoutDto: any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/workout", workoutDto);
  }

  getGoals(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/goals")
  }

  getWorkouts(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/workouts");
  }

  getActivities(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/activities")
  }

  updateGoalStatus(id:number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/goal/status/"+id)
  }

  getStats(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/stats")
  }

  getGraphStats(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/graphs")
  }
}
