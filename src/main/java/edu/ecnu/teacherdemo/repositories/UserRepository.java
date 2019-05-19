package edu.ecnu.teacherdemo.repositories;

import edu.ecnu.teacherdemo.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    // This is totally not safe, but, who cares?
    User findUserByUsernameAndPassword(String username, String password);
}
