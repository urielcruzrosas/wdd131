document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 15;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChillElement = document.querySelector(".weather-card .data-list li:last-child");

if (temperature <= 10 && windSpeed > 4.8) {
    let windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillValue.toFixed(1)} °C`;
} else {
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}