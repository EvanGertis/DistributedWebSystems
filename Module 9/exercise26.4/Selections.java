/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sessiontracking;

/**
 *
 * @author eg08014
 */

import java.io.Serializable;
import java.util.HashMap;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

//@ManagedBean indicates that JSF should create and manage the selectoinsBean
@ManagedBean(name="selectionsBean")
//  A session represents a unique client on a website.
@SessionScoped
public class Selections {
    
    public static class Book {
        
        public Book(String genre, String title, int price){
            this.genre = genre;
            this.title = title;
            this.price = price;
        }
        
        public String getTitle(){
            return title;
        }
        
        public String getGenre(){
            return genre;
        }
        
        public int getPrice(){
            return price;
        }
        
        public String title;
        public String genre;
        public int price;
    }
    
    private static final HashMap<String, Book> selectionsMap = new HashMap<String, Book>();
    
    static
    {
        selectionsMap.put("java",new Book("java","Java How to Program",10));
        selectionsMap.put("cpp", new Book("iphone","How to program iOS",20));
        selectionsMap.put("iphone", new Book("android", "How to program android", 20));
        selectionsMap.put("android", new Book("cpp","C++ How to program", 15));
    }
    
    private List<Book> selections = new ArrayList<Book>();
    private String selection;
    
    public int getNumberOfSelections(){
        return selections.size();
    }
    
    public String getSelection(){
        return selection;
    }
    
    public void setSelection(String topic){
        String genre = selectionsMap.get(topic).genre;
        selection = selectionsMap.get(topic).title;
        selections.add(booksMap.get(genre));
    }
    
    public List<Book> getSelections(){
        return selections;
    }
}
