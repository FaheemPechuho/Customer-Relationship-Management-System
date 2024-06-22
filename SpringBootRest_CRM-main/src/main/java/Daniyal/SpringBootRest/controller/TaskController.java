package Daniyal.SpringBootRest.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Daniyal.SpringBootRest.service.TaskService;
import Daniyal.SpringBootRest.entity.Task;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping("/tasks")
    public List<Task> retrieveAllTasks() {
        return service.findAll();
    }

    @GetMapping("/tasks/{id}")
    public Task retrieveTask(@PathVariable int id) {
        return service.findOne(id);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        Task savedTask = service.save(task);
        return savedTask;
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable int id) throws Exception {
        try {
            service.deleteById(id);
        } catch (Exception e) {
            throw new Exception("Not found id: " + id);
        }
    }

    @PutMapping("/tasks/{id}")
    public Task updateTask(@RequestBody Task task, @PathVariable int id) {
        Task existingTask = service.findOne(id);
        if (existingTask == null) {
            throw new RuntimeException("Task not found with id: " + id);
        }
        task.setId(id); // Ensure the ID in the request body matches the path variable
        return service.updateTask(task);
    }
}
