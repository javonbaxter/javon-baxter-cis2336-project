/*
ArtConnect JavaScript
Developer: Javon Baxter
CIS2336 Web Applications
*/


// =====================================================
// FAQ Accordion Functionality
// =====================================================

const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button => {

    button.addEventListener("click", function() {

        const answer = this.nextElementSibling;


        if (answer.style.display === "block") {

            answer.style.display = "none";

        }

        else {

            answer.style.display = "block";

        }

    });

});




// =====================================================
// Event Details Expansion
// =====================================================

const eventButtons = document.querySelectorAll(".event-button");


eventButtons.forEach(button => {

    button.addEventListener("click", function() {

        const details = this.nextElementSibling;


        if (details.style.display === "block") {

            details.style.display = "none";

            this.textContent = "View Details";

        }

        else {

            details.style.display = "block";

            this.textContent = "Hide Details";

        }

    });

});




// =====================================================
// Artist Submission Form Validation + Backend Connection
// =====================================================

const artistForm = document.getElementById("artist-form");


if (artistForm) {

    artistForm.addEventListener("submit", async function(event) {

        event.preventDefault();


        // Get form values
        const name = document.getElementById("artist-name").value.trim();

        const email = document.getElementById("email").value.trim();

        const price = document.getElementById("price").value.trim();

        const message = document.getElementById("form-message");


        // -------------------------------------------------
        // Required Field Validation
        // -------------------------------------------------

        if (name === "" || email === "" || price === "") {

            message.textContent = "Please complete all required fields.";

            message.style.color = "red";

            return;

        }


        // -------------------------------------------------
        // Email Validation
        // -------------------------------------------------

        if (!email.includes("@")) {

            message.textContent = "Please enter a valid email address.";

            message.style.color = "red";

            return;

        }


        // -------------------------------------------------
        // Price Validation
        // -------------------------------------------------

        if (isNaN(price) || Number(price) < 0) {

            message.textContent = "Please enter a valid non-negative price.";

            message.style.color = "red";

            return;

        }


        // -------------------------------------------------
        // Collect Artwork Information
        // -------------------------------------------------

        const artworkData = {

            artistName: name,

            email: email,

            artTitle: document.getElementById("art-title").value.trim(),

            category: document.getElementById("category").value,

            price: Number(price),

            description: document.getElementById("description").value.trim()

        };


        // -------------------------------------------------
        // Send Artwork to Node.js / Express Backend
        // -------------------------------------------------

        try {

            const response = await fetch("http://localhost:3000/api/artworks", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(artworkData)

            });


            const result = await response.json();


            // -------------------------------------------------
            // Successful Submission
            // -------------------------------------------------

            if (response.ok) {

                message.textContent = result.message;

                message.style.color = "green";

                artistForm.reset();

            }


            // -------------------------------------------------
            // Backend Validation Error
            // -------------------------------------------------

            else {

                message.textContent = result.message;

                message.style.color = "red";

            }


        }


        // -------------------------------------------------
        // Backend Connection Error
        // -------------------------------------------------

        catch (error) {

            console.error("Submission error:", error);

            message.textContent =
                "Unable to connect to the ArtConnect server. Please try again.";

            message.style.color = "red";

        }

    });

}