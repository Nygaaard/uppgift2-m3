//Funktion för att lägga till data i databasen
const errMessageEl = document.getElementById("errMessage");
export async function addExperienceToDatabase(
  companyname,
  jobtitle,
  location,
  startdate,
  enddate,
  description
) {
  if (
    //Kontrollera att ej tomt
    companyname != "" &&
    jobtitle != "" &&
    location != "" &&
    startdate != "" &&
    enddate != "" &&
    description != ""
  ) {
    const url = "http://localhost:3000/api/workexperiences";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyname: companyname,
          jobtitle: jobtitle,
          location: location,
          startdate: startdate,
          enddate: enddate,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add experience to database");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding experience to database:", error);
      throw error;
    }
  } else {
    errMessageEl.textContent = "Du måste fylla i alla fält. Försök igen.";
  }
  alert("Ny erfarenhet lades till!");
}
