//Fil för att hämta data

const url = "http://localhost:3000/api/workexperiences";

export async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    console.log("Något gick fel...");
  }
}
