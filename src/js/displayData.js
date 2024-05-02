import { getData } from "./getData";
import { deleteExperienceFromDatabase } from "./deleteData";

const cvEl = document.getElementById("cv");

export async function displayData() {
  const experiences = await getData();

  if (!cvEl) {
    console.error("Element with id 'cv' not found.");
    return;
  }

  experiences.forEach((item) => {
    //Skapa paragrafer
    const companyNameP = document.createElement("p");
    const jobTitleP = document.createElement("p");
    const locationP = document.createElement("p");
    const descriptionP = document.createElement("p");
    const startDateP = document.createElement("p");
    const endDateP = document.createElement("p");
    const deleteBtn = document.createElement("input");

    //Textinnehåll och klasser
    companyNameP.textContent = "Arbetsplats: " + item.companyname;
    companyNameP.classList.add("textParagraph");
    jobTitleP.textContent = "Titel: " + item.jobtitle;
    jobTitleP.classList.add("textParagraph");
    locationP.textContent = "Plats: " + item.location;
    locationP.classList.add("textParagraph");
    descriptionP.textContent = "Beskrivning: " + item.description;
    descriptionP.classList.add("textParagraph");
    startDateP.textContent = "Startdatum: " + item.startdate.substring(0, 10);
    startDateP.classList.add("textParagraph");
    endDateP.textContent = "Slutdatum: " + item.enddate.substring(0, 10);
    endDateP.classList.add("textParagraph");
    const paragraphDiv = document.createElement("div");

    //Knapp för att radera
    deleteBtn.type = "submit";
    deleteBtn.value = "Radera";
    deleteBtn.classList.add("add");

    // Händelselyssnare för raderingsknappen
    deleteBtn.addEventListener("click", async () => {
      try {
        const success = await deleteExperienceFromDatabase(item._id);
        if (success) {
          // Ta bort erfarenheten från DOM om raderingen lyckades
          cvEl.removeChild(companyNameP.parentElement);
        }
      } catch (error) {
        // Hantera fel
        console.error("Failed to delete experience from database:", error);
      }
    });

    //Append
    paragraphDiv.classList.add("experience-box");
    paragraphDiv.appendChild(companyNameP);
    paragraphDiv.appendChild(jobTitleP);
    paragraphDiv.appendChild(locationP);
    paragraphDiv.appendChild(descriptionP);
    paragraphDiv.appendChild(startDateP);
    paragraphDiv.appendChild(endDateP);
    paragraphDiv.appendChild(deleteBtn);
    cvEl.appendChild(paragraphDiv);
  });
}
