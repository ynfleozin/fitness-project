package com.leonardo.fitnessBackend.services.stats;

import com.leonardo.fitnessBackend.dto.GraphDTO;
import com.leonardo.fitnessBackend.dto.StatsDTO;
import org.springframework.stereotype.Service;

@Service
public interface StatsService {

    StatsDTO getStats();

    GraphDTO getGraphStats();
}
