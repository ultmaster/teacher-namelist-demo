package edu.ecnu.teacherdemo.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user")
public class User {

    private @Id
    @GeneratedValue
    Integer id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String password;

    private User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
