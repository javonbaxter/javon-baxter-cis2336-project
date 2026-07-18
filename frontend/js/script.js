/*
ArtConnect JavaScript
Developer: Javon Baxter
CIS2336 Web Applications
*/



// FAQ Accordion Functionality


const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button => {


    button.addEventListener("click", function(){


        const answer = this.nextElementSibling;


        if(answer.style.display === "block"){

            answer.style.display = "none";

        }

        else {

            answer.style.display = "block";

        }


    });


});






// Event Details Expansion


const eventButtons = document.querySelectorAll(".event-button");


eventButtons.forEach(button => {


    button.addEventListener("click", function(){


        const details = this.nextElementSibling;


        if(details.style.display === "block"){

            details.style.display = "none";

            this.textContent = "View Details";

        }


        else {

            details.style.display = "block";

            this.textContent = "Hide Details";

        }


    });


});






// Artist Submission Form Validation


const artistForm = document.getElementById("artist-form");


if(artistForm){


artistForm.addEventListener("submit", function(event){


event.preventDefault();



const name = document.getElementById("artistName").value;

const email = document.getElementById("email").value;

const price = document.getElementById("price").value;


const message = document.getElementById("form-message");



if(name === "" || email === "" || price === ""){


message.textContent = "Please complete all required fields.";

message.style.color = "red";


}

else if(!email.includes("@")){


message.textContent = "Please enter a valid email address.";

message.style.color = "red";


}


else {


message.textContent =
"Artwork submission completed successfully!";


message.style.color = "green";


artistForm.reset();


}



});


}