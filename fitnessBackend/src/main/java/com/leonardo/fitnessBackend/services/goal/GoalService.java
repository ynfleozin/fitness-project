package com.leonardo.fitnessBackend.services.goal;

import com.leonardo.fitnessBackend.dto.GoalDTO;

import java.util.List;

public interface GoalService {

    GoalDTO postGoal(GoalDTO dto);

    List<GoalDTO> getGoals();

    GoalDTO updateStatus(Long id);
}
