package com.leonardo.fitnessBackend.services.activity;

import com.leonardo.fitnessBackend.dto.ActivityDTO;

import java.util.List;

public interface ActivityService {

    ActivityDTO postActivity(ActivityDTO dto);

    List<ActivityDTO> getActivities();
}
