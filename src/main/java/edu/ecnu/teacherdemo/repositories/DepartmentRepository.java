package edu.ecnu.teacherdemo.repositories;

import edu.ecnu.teacherdemo.models.Department;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = DepartmentProjection.class)
public interface DepartmentRepository extends CrudRepository<Department, Integer> {
}
