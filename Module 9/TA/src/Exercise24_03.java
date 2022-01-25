package com.company.app.service;

import java.io.File;
import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;
import java.util.logging.LogManager;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.app.model.WordMatch;


@Service
public class WordMatchService {
	private static final Logger logger =  LogManager.getLogger(WordMatchService.class);

	
	@Autowired
	WordMatchService(){
	}

	public void saveContent(WordMatch wordMatch){
		logger.info(wordMatch);
		try {
		File file = new File("wordmatch0.html");
		String html = wordMatch.toString();
		String cleanedHTML = html.replace("WordMatch(content=","").replace(")","");
		logger.info(cleanedHTML);
		if (file.createNewFile()) {
			System.out.println("File created: " + file.getName());
			try {
				FileWriter myWriter = new FileWriter("word_match.html");
				myWriter.write(cleanedHTML);
				myWriter.close();
				System.out.println("Successfully wrote to the file.");
			} catch (IOException e) {
				System.out.println("An error occurred.");
				e.printStackTrace();
			}
		} else {
			String fileName = file.getName().toString();
			String index = fileName.substring(fileName.indexOf("h") + 1);
			index = index.substring(0, index.indexOf("."));
			Integer parsedInt = Integer.parseInt(index);
			System.out.println(parsedInt);
			Stream<Path> files = Files.list(Paths.get("C:\\your\\local\\path"));
			long numberOfFiles = files.map(Path.class::cast)
			                          .filter(path -> path.getFileName().toString().startsWith("wordmatch"))
			                          .count();
			parsedInt+=1;
			fileName = fileName.replace(index,parsedInt.toString());
			System.out.println(fileName);
			System.out.println("fileName should have been printed by now");
			file = new File(fileName);
			FileWriter myWriter = new FileWriter(file);
			myWriter.write(cleanedHTML);
			myWriter.close();
			//TODO add method to write file name with new index
			System.out.println("File already exists.");
		}
		} catch (IOException e) {
		System.out.println("An error occurred.");
		e.printStackTrace();
		}
	}
}
