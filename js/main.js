// Select the form with the class "new-user-form"
var userForm = document.querySelector('.new-user-form');

// Add event listener on the form for "submit" event

var isFormValid = true;
(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.

    // Add your code here
    userForm.addEventListener('submit', function(event) {

        // Preventing default
        event.preventDefault();
    
        // Setting form to true on submittion
        isFormValid = true;

        // Accessing the form elements using the "elements" attribute on the event target
        var usernameElement = event.target.elements.username;
        var cityElement = event.target.elements.city;
        var provinceElement = event.target.elements.province;
    
        // Creating variables to store user data
        var username = usernameElement.value.trim();
        var city = cityElement.value.trim();
        var province = provinceElement.value.trim();
    
        // Logging the values to the console
        console.log("Username:", username);
        console.log("City:", city);
        console.log("Province:", province);

        // Displaying errors for invalid data
        if (!isValueNotEmpty(username) || hasWhiteSpace(username)){
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }
        else{
            usernameElement.classList.remove('is-invalid');
        }

        if (!isValueNotEmpty(city) || hasWhiteSpace(city)){
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }
        else{
            cityElement.classList.remove('is-invalid');
        }

        if (!isValueNotEmpty(province) || hasWhiteSpace(province)){
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }
        else{
            provinceElement.classList.remove('is-invalid');
        }

        // Verifying that the form data is correct
        if(isFormValid == true){

            // Adding users to the list
            addUser(username, city, province);

            // Resetting all values
            usernameElement.value = "";
            cityElement.value = "";
            provinceElement.value = "";
        }

    });

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();