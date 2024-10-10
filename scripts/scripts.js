// scripts/scripts.js

// Function to handle card click events
function handleCardClick(event) {
  const card = event.currentTarget;
  const cardId = card.id;

  if (window.innerWidth <= 600) {
    // On mobile devices

    // If the click is on the description overlay or desc-image, do nothing here
    // as they have their own event listeners
    if (
      event.target.closest(".description") ||
      event.target.closest(".desc-image")
    ) {
      return;
    }

    // Hide other cards' description overlays and desc-images
    document.querySelectorAll(".card").forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.querySelector(".description").classList.remove("active");
        otherCard.querySelector(".desc-image").classList.remove("active");
      }
    });

    // Toggle description overlay and description image for the clicked card
    const description = card.querySelector(".description");
    const descImage = card.querySelector(".desc-image");

    if (description.classList.contains("active")) {
      description.classList.remove("active");
      descImage.classList.remove("active");
    } else {
      description.classList.add("active");
      descImage.classList.add("active");
    }
  } else {
    // On desktop, navigate to the subpage with fade-out effect
    const subPage = getSubPage(cardId);
    if (subPage) {
      fadeOutAndRedirect(subPage);
    }
  }
}

// Function to handle description overlay and desc-image click on mobile
function handleDescriptionClick(event, cardId) {
  if (window.innerWidth <= 600) {
    // On mobile devices, navigate to the subpage with fade-out effect
    const subPage = getSubPage(cardId);
    if (subPage) {
      fadeOutAndRedirect(subPage);
    }
  }
  event.stopPropagation(); // Prevent card click event
}

// Helper function to get subpage URL based on card ID
function getSubPage(cardId) {
  switch (cardId) {
    case "card1":
      return "poody-token.html";
    case "card2":
      return "poodytoons.html";
    case "card3":
      return "poodytech.html";
    default:
      return "";
  }
}

// Function to fade out and redirect to a subpage
function fadeOutAndRedirect(url) {
  const fadeOverlay = document.getElementById("fade-overlay");

  // Add the active class to start the fade-in to white
  fadeOverlay.classList.add("active");

  // Wait for the fade-in transition to complete
  setTimeout(() => {
    // Redirect to the subpage
    window.location.href = url;
  }, 500); // Match the timeout to the CSS transition duration (0.5s)
}

// Add event listeners to each card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", handleCardClick);

  const description = card.querySelector(".description");
  const descImage = card.querySelector(".desc-image");

  // Make the description overlay and desc-image clickable only on mobile
  description.addEventListener("click", function (event) {
    handleDescriptionClick(event, card.id);
  });

  descImage.addEventListener("click", function (event) {
    handleDescriptionClick(event, card.id);
  });
});
