package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= {"C:\\Users\\Shabeen N\\eclipse-workspace\\bddcucumber\\src\\test\\java\\features"},	
		glue= {"steps"},
		plugin= {"pretty",
				"html:results/html",
			    "json:results/json/results.json",
			    "junit:results/junit/cucumber.xml"
				
		}
		)

public class testrunner {

}
