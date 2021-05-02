// GuestBook.java
// Bean for interacting with the AddressBook database
package guestbookbean;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.faces.bean.ManagedBean;
import javax.sql.DataSource;
import javax.sql.rowset.CachedRowSet;

@ManagedBean(name
        = "guestbookBean")
public class GuestBook {
    // instance variables that represent one address

    private String date;
    private String name;
    private String email;
    private String message;

    // allow the server to inject the DataSource
    @Resource(name
            = "jdbc/sample")
    DataSource dataSource;
    
    public String getDate(){
        return this.date;
    }
    
    public void setDate(String date){
        this.date = date;
    }
    
    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email){
        this.email = email;
    }
    
    public String getName(){
        return this.name;
    }
    
    public void setName(String name){
        this.name = name;
    }
    
    public String getMessage(){
        return this.message;
    }
    
    public void setMessage(String message){
        this.message = message;
    }

    // return a ResultSet of entries
    public ResultSet getGuests()
            throws SQLException {
        // check whether dataSource was injected by the server
        if (dataSource
                == null) {
            throw new SQLException("Unable to obtain DataSource");
        }

        // obtain a connection from the connection pool
        Connection connection
                = dataSource.getConnection();

        // check whether connection was successful
        if (connection
                == null) {
            throw new SQLException("Unable to connect to DataSource");
        }

        try {
            // create a PreparedStatement to insert a new address book entry
            PreparedStatement getGuests
                    = connection.prepareStatement(
                            "SELECT DATE, NAME, EMAIL, MESSAGE FROM GUESTBOOK");

            CachedRowSet rowSet
                    = new com.sun.rowset.CachedRowSetImpl();
            rowSet.populate(getGuests.executeQuery());
            return rowSet;
        } // end try
        finally {
            connection.close(); // return this connection to pool
        } // end finally
    } // end method getAddresses

    // save a new address book entry
    public String save()
            throws SQLException {
        // check whether dataSource was injected by the server
        if (dataSource
                == null) {
            throw new SQLException("Unable to obtain DataSource");
        }

        // obtain a connection from the connection pool
        Connection connection
                = dataSource.getConnection();

        // check whether connection was successful
        if (connection
                == null) {
            throw new SQLException("Unable to connect to DataSource");
        }

        try {
            // create a PreparedStatement to insert a new address book entry
            PreparedStatement addEntry
                    = connection.prepareStatement("INSERT INTO GUESTBOOK "
                            + "(DATE,NAME,EMAIL,MESSAGE)"
                            + "VALUES ( ?, ?, ?, ?)");

            // specify the PreparedStatement's arguments
            addEntry.setString(1,
                    getDate());
            addEntry.setString(2,
                    getName());
            addEntry.setString(3,
                    getEmail());
            addEntry.setString(4,
                    getMessage());
            
            addEntry.executeUpdate(); // insert the entry
            return "index"; // go back to index.xhtml page
        } // end try
        finally {
            connection.close(); // return this connection to pool
        } // end finally
    } // end method save
} // end class GuestBook
