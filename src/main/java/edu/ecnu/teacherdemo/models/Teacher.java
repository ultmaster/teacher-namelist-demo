package edu.ecnu.teacherdemo.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "teacher")
public class Teacher {

    private @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    Integer id;
    @Column(nullable = false, name = "teacher_name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "teacher_dept_id", referencedColumnName = "dept_id")
    private Department department;
    @Column(name = "teacher_title")
    private String title;
    @Column(name = "teacher_tel")
    private String tel;
    @Column(name = "teacher_address")
    private String address;
    @Column(name = "teacher_email")
    private String email;

    private Teacher() {
    }

    public Teacher(String name, Department department, String title, String tel, String address, String email) {
        this.name = name;
        this.department = department;
        this.title = title;
        this.tel = tel;
        this.address = address;
        this.email = email;
    }
}
