const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageOfBirthInput = document.getElementById('DOB');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const postalCodeInput = document.getElementById('postal-code');
const provinciaInput = document.getElementById('prov');
const sessoInput = document.getElementsByName('sesso');
const locomozioneInput = document.getElementsByName('locomozione');
const materieSelect = document.getElementById('materie');

const nameO = document.getElementById('nameO');
const surnameO = document.getElementById('surnameO');
const addressO = document.getElementById('addressO');
const cityO = document.getElementById('cityO');
const postalCodeO = document.getElementById('postal-codeO');
const DOBO = document.getElementById('DOBO');
const sessoO = document.getElementById('sessoO');
const provO = document.getElementById('provO');
const locomozioneO = document.getElementById('locomozioneO');
const materieO = document.getElementById('materieO');

const socialGenerations = {
    "Greatest Generation": { start: 1901, end: 1927 },
    "Silent Generation": { start: 1928, end: 1945 },
    "Baby Boomers": { start: 1946, end: 1964 },
    "Generation X": { start: 1965, end: 1980 },
    "Millennials": { start: 1981, end: 1996 },
    "Generation Z": { start: 1997, end: 2012 },
    "Generation Alpha": { start: 2013, end: 2025 }
}

function creaAnagrafica() {
    const name = nameInput.value
    const surname = surnameInput.value
    const ageOfBirth = ageOfBirthInput.value
    const address = addressInput.value
    const city = cityInput.value
    const postalCode = postalCodeInput.value
    const DOB = new Date(ageOfBirth);
    let generation = "Unknown Generation";

    for (const Generation in socialGenerations) {
        const { start, end } = socialGenerations[Generation];
        if (DOB.getFullYear() >= start && DOB.getFullYear() <= end) {
            generation = Generation;
            break;
        }
    }

    let sesso = "Non specificato";
    for (const s of sessoInput) {
        if (s.checked) {
            sesso = s.value;
            break;
        }
    }
    nameO.textContent = `Nome: ${name}`;
    surnameO.textContent = `Cognome: ${surname}`;
    addressO.textContent = `Indirizzo: ${address}`;
    cityO.textContent = `Città: ${city}`;
    postalCodeO.textContent = `CAP: ${postalCode}`;
    DOBO.textContent = `Data di Nascita: ${DOB.toLocaleDateString()} (${generation})`;
    sessoO.textContent = `Sesso: ${sesso}`;
    provO.textContent = `Provincia: ${provinciaInput.value}`;
    let locomozione = [];
    for (const l of locomozioneInput) {
        if (l.checked) {
            locomozione.push(l.value);
        }
    }
    locomozioneO.textContent = `Mezzi di locomozione posseduti: ${locomozione.join(', ') || 'Nessuno'}`;

    materieO.textContent = `Materia preferita: ${materieSelect.value}`
    
}
