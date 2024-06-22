package Daniyal.SpringBootRest.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Daniyal.SpringBootRest.dao.TaskDao;
import Daniyal.SpringBootRest.entity.Task;

@Service
public class TaskService {

    @Autowired
    private TaskDao taskDao;

    // Method to retrieve all tasks
    public List<Task> findAll() {
        return taskDao.findAll();
    }

    // Method to add a task
    public Task save(Task task) {
        taskDao.save(task);
        return task;
    }

    // Method to find a particular task by ID
    public Task findOne(int id) {
        Optional<Task> task = taskDao.findById(id);
        return task.orElse(null);
    }

    // Method to delete a task by ID
    public void deleteById(int id) {
        taskDao.deleteById(id);
    }

    // Method to update an existing task
    public Task updateTask(Task updatedTask) {
        taskDao.save(updatedTask);
        return updatedTask;
    }
}
