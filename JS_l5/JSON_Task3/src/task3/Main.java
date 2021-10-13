package task3;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson; 
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken; 

public class Main {

	public static void main(String[] args) {
		GsonBuilder builder = new GsonBuilder(); 
		builder.setPrettyPrinting(); 
		Gson gson = builder.create();
		List<User> users = createUsers();
		String collection = gson.toJson(users);
		System.out.println("List to JSON: " + collection);
		
		saveToFile(collection, "users.json");

//		User[] array = { first, second, third };
//		String arrayToJson = gson.toJson(array);
//		System.out.println("Array to JSON: " + arrayToJson);

		users = gson.fromJson(collection, new TypeToken<List<User>>() {
		}.getType());
		System.out.println("JSON to List: " + users);
		
		
		
		

	}
	
	public static List<User> createUsers() {
		List<User> users = new ArrayList<>();
		User firstUser = new User("arc12","arc@gmail.com","2341Sdw34");
		User secondUser = new User("leon","lymbda@gmail.com","jHyhg6dfH");
		User thirdUser = new User("UrI","mail@gmail.com","oiuH&TYf5F");
		users.add(firstUser);
		users.add(secondUser);
		users.add(thirdUser);
		
		return users;	
	}
	
	private static void saveToFile(String jsonString, String filename) {
		try (PrintWriter out = new PrintWriter(filename)) {
		    out.println(jsonString);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

}
