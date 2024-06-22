package Daniyal.SpringBootRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import Daniyal.SpringBootRest.entity.User;

public interface UserDao extends JpaRepository<User, Integer>  {

}
