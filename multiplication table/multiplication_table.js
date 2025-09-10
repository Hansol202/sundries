// function 몇단함수(n) {
//     for (let i = 0; i <= 9; i++) {
//         console.log(`${n} * ${i} = ${n * i}`);
//     }
// }

// 몇단함수(2);
// 몇단함수(3);

function gugudan() {
    for (let k = 1; k <= 9; k++) {
        for (let j = 2; j <= 9; j++) {
        console.log(`${j} * ${k} = ${j * k}`);
    }}
}

gugudan();