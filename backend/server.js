const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary storage for artwork submissions
const artworkSubmissions = [];

// GET route to confirm the server is running
app.get("/api", (req, res) => {
    res.json({
        message: "ArtConnect backend is running successfully."
    });
});

// GET route to retrieve submitted artworks
app.get("/api/artworks", (req, res) => {
    res.json(artworkSubmissions);
});

// POST route to submit artwork
app.post("/api/artworks", (req, res) => {
    const {
        artistName,
        email,
        artTitle,
        category,
        price,
        description
    } = req.body;

    // Validate required fields
    if (
        !artistName ||
        !email ||
        !artTitle ||
        !category ||
        price === undefined ||
        price === "" ||
        !description
    ) {
        return res.status(400).json({
            success: false,
            message: "Please complete all required artwork fields."
        });
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email address."
        });
    }

    // Validate price
    const numericPrice = Number(price);

    if (Number.isNaN(numericPrice) || numericPrice < 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be a valid non-negative number."
        });
    }

    // Create artwork object
    const newArtwork = {
        id: artworkSubmissions.length + 1,
        artistName: artistName.trim(),
        email: email.trim(),
        artTitle: artTitle.trim(),
        category: category.trim(),
        price: numericPrice,
        description: description.trim()
    };

    // Store artwork temporarily
    artworkSubmissions.push(newArtwork);

    // Return confirmation
    res.status(201).json({
        success: true,
        message: "Artwork submitted successfully to ArtConnect!",
        artwork: newArtwork
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "The requested endpoint was not found."
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`ArtConnect backend is running at http://localhost:${PORT}`);
});