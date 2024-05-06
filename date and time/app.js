function calculateTimeFromBirth() {
    var birthdate = document.getElementById('birthdate').value;
    var userBirthdate = new Date(birthdate);
    var currentDate = new Date();
    
    // Calculate the time difference in milliseconds
    var timeDiff = currentDate.getTime() - userBirthdate.getTime();

    // Convert milliseconds to days 
    var millisecondsInADay = 1000 * 60 * 60 * 24;
    var daysElapsed = Math.floor(timeDiff / millisecondsInADay);
    
    // Display the result 
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Days Elapsed since Birth: ' + daysElapsed;
}
