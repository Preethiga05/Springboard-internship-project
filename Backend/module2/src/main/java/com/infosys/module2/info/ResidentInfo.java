package com.infosys.module2.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResidentInfo {
    private String name;
    private String phoneNo;
    private String postal;
    private String societyName;
    private String flatNo;
}
