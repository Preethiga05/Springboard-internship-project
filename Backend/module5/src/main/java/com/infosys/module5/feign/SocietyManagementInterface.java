package com.infosys.module5.feign;

import com.infosys.module5.dto.FlatDto;
import com.infosys.module5.dto.ResidentDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.List;

@FeignClient(name = "societymanagementservice")
public interface SocietyManagementInterface {
    @GetMapping("/api/getAllFlats")
    public List<FlatDto> getAllFlats();

    @GetMapping("/api/getResidentByJWT")
    public ResidentDto getResidentByJWT(@RequestHeader("Authorization") String jwt);

    @GetMapping("/api/residents")
    public List<ResidentDto> getResidents();
}
