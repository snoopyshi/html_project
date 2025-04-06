const btn = document.querySelector('button');

const birthday = document.getElementById('birthday')

const resultEl = document.getElementById('result'); // result element in the htm



btn.addEventListener('click', () => {
    const birthdayVal = birthday.value;
    if (birthdayVal === '') {
        alert('Please enter your birthday');
        return;
    }

    const currentYear = new Date().getFullYear();
    const userYear= new Date(birthdayVal).getFullYear();
    const userAge = currentYear - userYear;
    console.log(userAge); // for debugging purposes only, remove this line in productio

    resultEl.textContent = `You are ${userAge} years old.`; // display the result in the htm element with id "result"
});