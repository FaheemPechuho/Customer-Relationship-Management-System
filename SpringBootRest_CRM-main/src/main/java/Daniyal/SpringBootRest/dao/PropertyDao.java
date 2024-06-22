package Daniyal.SpringBootRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import Daniyal.SpringBootRest.entity.Property;

public interface PropertyDao extends JpaRepository<Property, Integer>  {

}
