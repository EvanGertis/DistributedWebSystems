<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Forms</title>
</head>
<body onload="main()">
    <h1>Feedback Form</h1>
    <p>Please fill out this form to help us improve our site</p>
    <form action="post">
        <p>
            <input type="hidden" vlaue="dietel@deitel.com"/>
            <input type="hidden" name="subject" vlaue="Feedback Form"/>
            <input type="hidden" name="redirect" value="main.html" />
        </p>
        <p><label for="Name">Name:
            <input id="name" name="name" type="text" size="25"/>
        </label></p>

        <!-- <textarea> creates a multiline textbox -->
        <p><label for="comments">Comments:<br/>
            <textarea id="comments" name="comments" cols="36" rows="4"></textarea>
        </label></p>

        <p><label for="email">E-mail Address:
            <input id="email" type="password" name="email" size="25"/>
        </label></p>

        <p>
            <strong>Things you liked:</strong><br/>
            <label>Site design
                <input id="thingsliked" type="checkbox" name="thingsliked" value="Design"/>
            </label>
            <label>Ease of use
                <input type="checkbox" name="thingsliked" value="Ease"/>
            </label>
            <label>Images
                <input type="checkbox" name="thingsliked" value="Images"/>
            </label>
            <label>Source code
                <input type="checkbox" name="thingsliked" value="Code"/>
            </label>
        </p>

        <p>
            <strong>How did you get to our site?:</strong><br/>
            <label>Search engine
                <input name="howtosite" type="radio" value="search engine" checked="checked"/>
            </label>
            <label>Links from another site
                <input name="howtosite" type="radio" value="link" checked="checked"/>
            </label>
            <label>Reference in a book
                <input name="howtosite" type="radio" value="book"/>
            </label>
            <label>Other
                <input name="howtosite" type="radio" value="other"/>
            </label>
        </p>

        <p>
            <label>Rate our site:

                <select name="rating">
                    <option selected="selected">Amazing</option>
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                    <option>Awful</option>
                </select>
            </label>
        </p>
        <p>
            <input type="submit" value="Submit"/>
            <input type="reset" value="Clear"/>
        </p>
    </form>
</body>
    
</html>
<script src="16.7.js"></script>