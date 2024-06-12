//..Decision Making (if-else and switch):

//..Leap Year Checker:


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}



//..Weather Clothing Adviser:

function clothingAdviser(temperature, raining) {
    if (temperature < 60) {
        if (raining) {
            return "You should wear a warm coat and take an umbrella.";
        } else {
            return "You should wear a warm coat.";
        }
    } else {
        if (raining) {
            return "You should take an umbrella.";
        } else {
            return "You don't need any additional clothing.";
        }
    }
}

// Example usage:
let temperature = parseInt(prompt("Enter the current temperature: "));
let raining = prompt("Is it raining? (yes/no): ").toLowerCase() === "yes";
console.log(clothingAdviser(temperature, raining));


//..Recursion:

//..Fibonacci Sequence:

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
let n = parseInt(prompt("Enter the value of n: "));
console.log("The " + n + "th Fibonacci number is " + fibonacci(n) + ".");

//..Palindrome Checker:

function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (s.length <= 1) {
        return true;
    } else if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return isPalindrome(s.substring(1, s.length - 1));
    }
}

// Example usage:
let string = prompt("Enter a string: ");
if (isPalindrome(string)) {
    console.log(string + " is a palindrome.");
} else {
    console.log(string + " is not a palindrome.");
}
