package edu.ecnu.teacherdemo.models;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.*;

@Data
@Entity
@Table(name = "department")
public class Department {

    private @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dept_id")
    Integer id;
    @Column(nullable = false, unique = true, name = "dept_name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "father_id", referencedColumnName = "dept_id")
    private Department father;

    private Department() {
    }

    public Department(String name, Department father) {
        this.name = name;
        this.father = father;
    }
}
