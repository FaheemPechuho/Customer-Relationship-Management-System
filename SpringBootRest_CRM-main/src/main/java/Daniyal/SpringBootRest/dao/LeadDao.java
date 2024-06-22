package Daniyal.SpringBootRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import Daniyal.SpringBootRest.entity.Lead;

public interface LeadDao extends JpaRepository<Lead, Integer>  {

}
