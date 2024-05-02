//Funktion för att radera inlägg
export async function deleteExperienceFromDatabase(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/workexperiences/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to delete experience from database");
    }
    return true;
  } catch (error) {
    console.error("Failed to delete experience from database:", error);
    return false;
  }
}
