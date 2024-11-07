package com.leonardo.fitnessBackend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class GoalDTO {
    private Long id;

    private String description;

    private Date startDate;

    private Date endDate;

    private boolean achieved;
}
