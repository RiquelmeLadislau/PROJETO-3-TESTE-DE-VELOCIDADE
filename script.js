let name1 = prompt('insira um nome de um veiculo')
let name2 = prompt('insira um nome de um  outro veiculo')
let speed = parseInt(prompt("insira a velocidade do primeiro veiculo inserido"))
let speed2 = parseInt(prompt("insira a velocidade do segundo veiculo inserido"))

if (speed === speed2) {
    alert(`O ${name1} a velocidade dele sao iguais que ${name2} o !, e esta a ${speed} km/h!`)
} else if (speed > speed2) {
    alert(`O ${name1} esta a ${speed} km/h, e esta mais rapido que ${name2} que esta a ${speed2} km/h!`)
} else
    alert(`O ${name2} esta a ${speed2} km/h, e esta mais rapido que ${name1} que esta a ${speed} km/h`)

