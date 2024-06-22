package Daniyal.SpringBootRest.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Daniyal.SpringBootRest.service.PropertyService;
import Daniyal.SpringBootRest.entity.Property;

@RestController
public class PropertyController {

    @Autowired
    private PropertyService service;

    @GetMapping("/properties")
    public List<Property> retrieveAllProperties() {
        return service.findAll();
    }

    @GetMapping("/properties/{id}")
    public Property retrieveProperty(@PathVariable int id) {
        return service.findOne(id);
    }

    @PostMapping("/properties")
    public Property createProperty(@RequestBody Property property) {
        Property savedProperty = service.save(property);
        return savedProperty;
    }

    @DeleteMapping("/properties/{id}")
    public void deleteProperty(@PathVariable int id) throws Exception {
        try {
            service.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Not found id: " + id);
        }
    }

    @PutMapping("/properties/{id}")
    public Property updateProperty(@RequestBody Property property, @PathVariable int id) {
        Property existingProperty = service.findOne(id);
        if (existingProperty == null) {
            throw new RuntimeException("Property not found with id: " + id);
        }
        property.setId(id); // Ensure the ID in the request body matches the path variable
        return service.updateProperty(property);
    }
}
