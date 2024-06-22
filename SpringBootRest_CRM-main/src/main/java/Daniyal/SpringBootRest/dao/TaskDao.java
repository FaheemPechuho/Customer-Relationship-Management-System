package Daniyal.SpringBootRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Daniyal.SpringBootRest.entity.Task;

@Repository
public interface TaskDao extends JpaRepository<Task, Integer> {
}
