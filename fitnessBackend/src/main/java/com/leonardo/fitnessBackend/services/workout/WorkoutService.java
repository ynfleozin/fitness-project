package com.leonardo.fitnessBackend.services.workout;

import com.leonardo.fitnessBackend.dto.WorkoutDTO;

import java.util.List;

public interface WorkoutService {

    WorkoutDTO postWorkout(WorkoutDTO workoutDTO);

    List<WorkoutDTO> getWorkouts();
}
