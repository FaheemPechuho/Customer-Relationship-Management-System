package Daniyal.SpringBootRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Daniyal.SpringBootRest.entity.Meeting;

@Repository
public interface MeetingDao extends JpaRepository<Meeting, Integer> {
}
