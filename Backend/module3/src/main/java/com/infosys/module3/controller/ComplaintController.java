package com.infosys.module3.controller;

import com.infosys.module3.dto.ComplaintDto;
import com.infosys.module3.model.Complaint;
import com.infosys.module3.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ComplaintController {
    @Autowired
    ComplaintService complaintService;
    @PostMapping("/addComplaint")
    public Complaint addComplaint(@RequestHeader ("Authorization") String jwt, @RequestBody ComplaintDto complaintDto){
        return complaintService.addComplaint(jwt,complaintDto);
    }

    @GetMapping("/getAllComplaints")
    public List<Complaint> getAllComplaints(@RequestHeader("Authorization") String jwt){
        return complaintService.getAllComplaints();
    }

    @PutMapping("/closeComplaint/{id}")
    public Complaint closeComplaint(@RequestHeader("Authorization") String jwt,@PathVariable Long id){
        return complaintService.closeComplaint(id);
    }
}
