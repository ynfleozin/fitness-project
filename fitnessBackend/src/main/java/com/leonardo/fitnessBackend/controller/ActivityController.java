package com.leonardo.fitnessBackend.controller;

import com.leonardo.fitnessBackend.dto.ActivityDTO;
import com.leonardo.fitnessBackend.entity.Activity;
import com.leonardo.fitnessBackend.repository.ActivityRepository;
import com.leonardo.fitnessBackend.services.activity.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ActivityController {

    private final ActivityService activityService;

    @PostMapping("/activity")
    public ResponseEntity<?> postActivity(@RequestBody ActivityDTO dto){
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(activityService.postActivity(dto));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }

    @GetMapping("/activities")
    public ResponseEntity<?> getActivities(){
        try{
            return ResponseEntity.ok(activityService.getActivities());
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }

}
