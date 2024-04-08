function start(){    // Function to start the encryption or decryption process
    var text = document.getElementById("input-text").value;  // Get the input text
    var key = parseInt(document.getElementById("input-key").value);  // Get the input key
    if(validation(text, key)){   // Check if the input text and key are valid
        if (document.getElementById("flexRadioDefault1").checked == true){  // Check if the encryption radio button is checked
            encrypt(text, key);  // Encrypt the text
        } else if(document.getElementById("flexRadioDefault2").checked == true){  // Check if the decryption radio button is checked
            decrypt(text, key);  // Decrypt the text
        }
    } else{   // If the input text or key is invalid
        document.getElementById("result").style.display = "enter text and key";  // Display an alert
    }
}

function encrypt(text, key){    // Function to encrypt the text
    var encrypted = "";   // Variable to store the encrypted text
    for(var i = 0; i < text.length; i++){  // Loop through each character of the text
        var ascii = text.charCodeAt(i);  // Get the ASCII value of the character
        if(ascii >= 65 && ascii <= 90){  // Check if the character is an uppercase letter
            encrypted += String.fromCharCode((ascii - 65 + key) % 26 + 65);  // Encrypt the character
        } else if(ascii >= 97 && ascii <= 122){  // Check if the character is a lowercase letter
            encrypted += String.fromCharCode((ascii - 97 + key) % 26 + 97);  // Encrypt the character
        } else{  // If the character is not a letter
            encrypted += text[i];  // Add the character as it is
        }
    }
    document.getElementById("result").textContent = "Encrypted text: " + encrypted;  // Display the encrypted text
    document.getElementById("result").style.display = "block";  // Display the result
}

function decrypt(text, key){    // Function to decrypt the text
    var decrypted = "";  // Variable to store the decrypted text
    for(var i = 0; i < text.length; i++){  // Loop through each character of the text
        var ascii = text.charCodeAt(i);  // Get the ASCII value of the character
        if(ascii >= 65 && ascii <= 90){  // Check if the character is an uppercase letter
            decrypted += String.fromCharCode((ascii - 65 - key + 26) % 26 + 65);  // Decrypt the character
        } else if(ascii >= 97 && ascii <= 122){  // Check if the character is a lowercase letter
            decrypted += String.fromCharCode((ascii - 97 - key + 26) % 26 + 97);  // Decrypt the character
        } else{  // If the character is not a letter
            decrypted += text[i];  // Add the character as it is
        }
    }
    document.getElementById("result").textContent = "Decrypted text: " + decrypted;  // Display the decrypted text
    document.getElementById("result").style.display = "block";  // Display the result

}

function validation(text, key){  // Function to validate the input text and key
    bool_text = Boolean(text);  // Convert the text to boolean
    bool_key = Boolean(key);  // Convert the key to boolean
    if(!(text && key)){  // Check if the input text is empty
        alert("Please enter valid text or key to encrypt"); // Display an alert
        return false; // Return false
    } else if(isNaN(key)){  // Check if the input key is not a number
        alert("Please enter a valid key");  // Display an alert
        return false;  // Return false
    } else {
        return true; // Return true if the input text and key are valid
    }
}