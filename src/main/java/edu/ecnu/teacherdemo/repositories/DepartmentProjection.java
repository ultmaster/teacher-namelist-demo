package edu.ecnu.teacherdemo.repositories;

import edu.ecnu.teacherdemo.models.Department;
import org.springframework.data.rest.core.config.Projection;

@Projection(
        name = "departmentProjection",
        types = {Department.class})
public interface DepartmentProjection {
    String getName();
    Department getFather();
}
