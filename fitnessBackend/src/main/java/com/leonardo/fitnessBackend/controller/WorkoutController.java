package com.leonardo.fitnessBackend.controller;

import com.leonardo.fitnessBackend.dto.WorkoutDTO;
import com.leonardo.fitnessBackend.services.workout.WorkoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class WorkoutController {
    private final WorkoutService workoutService;

    @PostMapping("/workout")
    public ResponseEntity<?> postWorkout(@RequestBody WorkoutDTO dto) {
        try {
            return ResponseEntity.ok(workoutService.postWorkout(dto));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }

    @GetMapping("/workouts")
    public ResponseEntity<?> getWorkouts(){
        try{
            return ResponseEntity.ok(workoutService.getWorkouts());
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }
}
