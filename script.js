const your = document.getElementById('yours');
const smn = document.getElementById('someone');
const word = document.getElementById('alert');
let oneAge, secondAge;
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

your.onclick = function() {
    oneAge = prompt('Yoshingizni kiriting:');
    oneAge = parseInt(oneAge);
    one.textContent = oneAge
    document.append(one)
}

smn.onclick = function() {
    secondAge = prompt('Ikkincni insonni yoshi:');
    secondAge = parseInt(secondAge);
    two.textContent = secondAge
    document.append(two)
}

word.onclick = function() {
    if (oneAge > secondAge) {
        alert('Salom bratishka');
        three.textContent = 'Salom bratishka'
    } else if (oneAge === secondAge) {
        alert('Salom');
        three.textContent = 'Salom'
    } else if (oneAge < secondAge) {
        alert("Salom aka");
        three.textContent = 'Salom aka'
    }
    document.append(three)
}