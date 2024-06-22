package Daniyal.SpringBootRest.service;

import Daniyal.SpringBootRest.entity.User;
import java.util.List;
import Daniyal.SpringBootRest.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
//method that retrieve all users from the list  
	public List<User> findAll() {
		return userDao.findAll();
	}
	

//method that add the user in the list   
	public User save(User user) {
		
		return userDao.save(user);
	}

//method that find a particular user from the list  
	public User findOne(int id) {
		return userDao.findById(id).get();
	}

	// method that delete a user resource
	public void deleteById(int id) {
		User entity = userDao.findById(id).get();
		userDao.delete(entity);
	}
		
	// Method to update an existing user
	public User updateUser(User updatedUser) {
		userDao.save(updatedUser);
		return updatedUser;
	}
	public List<User> getAllUsers() {
        return userDao.findAll();
    }

    public void addUser(User user) {
        userDao.save(user);
    }

    public void deleteUser(int id) {
        Optional<User> existingUser = userDao.findById(id);
        if (existingUser.isPresent()) {
            userDao.deleteById(id);
        } else {
            throw new RuntimeException("User not found with id: " + id);
        }
    }

}
