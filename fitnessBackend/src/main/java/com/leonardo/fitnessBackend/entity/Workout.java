package com.leonardo.fitnessBackend.entity;

import com.leonardo.fitnessBackend.dto.WorkoutDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    private Date date;

    private int duration;

    private int caloriesBurned;

    public WorkoutDTO getWorkoutDto(){
        WorkoutDTO workoutDTO = new WorkoutDTO();

        workoutDTO.setId(id);
        workoutDTO.setDate(date);
        workoutDTO.setDuration(duration);
        workoutDTO.setType(type);
        workoutDTO.setCaloriesBurned(caloriesBurned);

        return workoutDTO;
    }
}
