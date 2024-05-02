import { displayData } from "./displayData";
import { addExperienceToDatabase } from "./addData";

document.addEventListener("DOMContentLoaded", () => {
  const cvEl = document.getElementById("cv");
  if (cvEl) {
    displayData();
  }

  const addBtn = document.getElementById("add");
  if (addBtn) {
    addBtn.addEventListener("click", async (event) => {
      event.preventDefault();

      const companyNameInput = document.getElementById("companyName");
      const jobTitleInput = document.getElementById("jobTitle");
      const locationInput = document.getElementById("location");
      const startDateInput = document.getElementById("startDate");
      const endDateInput = document.getElementById("endDate");
      const descriptionInput = document.getElementById("description");

      // Kontrollera om alla input-element finns
      if (
        companyNameInput &&
        jobTitleInput &&
        locationInput &&
        startDateInput &&
        endDateInput &&
        descriptionInput
      ) {
        const companyName = companyNameInput.value;
        const jobTitle = jobTitleInput.value;
        const location = locationInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;
        const description = descriptionInput.value;

        try {
          const result = await addExperienceToDatabase(
            companyName,
            jobTitle,
            location,
            startDate,
            endDate,
            description
          );
          console.log("Experience added successfully:", result);
          // Uppdatera gränssnittet eller visa ett meddelande för användaren
        } catch (error) {
          // Hantera fel eller visa ett meddelande för användaren
          console.error("Failed to add experience to database:", error);
        }
      } else {
        console.error("Input elements not found");
      }
    });
  }
});
