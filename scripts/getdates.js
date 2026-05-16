const yearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();

yearSpan.innerHTML = currentYear;

const lastModifiedDate = document.lastModified;

lastModifiedParagraph.innerHTML = "Last Modification: " + lastModifiedDate;