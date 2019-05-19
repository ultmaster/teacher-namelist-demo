package edu.ecnu.teacherdemo.repositories;

import edu.ecnu.teacherdemo.models.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface TeacherRepository extends PagingAndSortingRepository<Teacher, Integer> {

    @Query("select teacher from Teacher teacher join teacher.department department join teacher.department.father father " +
            "where teacher.name like %:keyword% or teacher.address like %:keyword% or " +
            "teacher.department.name like %:keyword% or teacher.title like %:keyword% or " +
            "teacher.tel like %:keyword% or teacher.email like %:keyword% or " +
            "teacher.department.father.name like %:keyword%")
    Page<Teacher> findTeachersByKeyword(@Param("keyword") String keyword, Pageable pageable);
}
