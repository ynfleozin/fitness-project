package com.leonardo.fitnessBackend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class WorkoutDTO {

    private Long id;

    private String type;

    private Date date;

    private int duration;

    private int caloriesBurned;
}
