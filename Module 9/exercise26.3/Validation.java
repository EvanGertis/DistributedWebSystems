/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author eg08014
 */
package validation;

import java.io.Serializable;
import javax.faces.bean.ManagedBean;



@ManagedBean(name= "validationBean")
public class ValidationBean
        implements Serializable {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    // return the name String
    public String getFirstName() {
        return firstName;
    } // end method getName

    // set the firstName String
    public void setFirstName(String firstName) {
        this.firstName
                = firstName;
    } // end method setFirstName
    
    // return the lastName String
    public String getLastName() {
        return lastName;
    } // end method getLastName

    // set the lastName String
    public void setLastName(String lastName) {
        this.lastName
                = lastName;
    } // end method setLastName

    // return the email String
    public String getEmail() {
        return email;
    } // end method getEmail

    // set the email String
    public void setEmail(String email) {
        this.email
                = email;
    } // end method setEmail

    // return the phone String
    public String getPhone() {
        return phone;
    } // end method getPhone

    // set the phone String
    public void setPhone(String phone) {
        this.phone
                = phone;
    } // end method setPhone

    // returns result for rendering on the client
    public String getResult() {
        if (lastName
                != null
                && firstName
                != null
                && email
                != null
                && phone
                != null) {
            return "<p style=\"background-color:yellow;width:200px;"
                    + "padding:5px\">LastName: "
                    + getLastName()
                    + "<br/>FirstName"
                    + getFirstName()
                    + "<br/>E-Mail: "
                    + getEmail()
                    + "<br/>Phone: "
                    + getPhone()
                    + "</p>";
        } else {
            return ""; // request has not yet been made
        }
    } // end method getResult
} // end class ValidationBean
