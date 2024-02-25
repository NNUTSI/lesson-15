"user strict";
// _______________________________________
// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let a = 5; a <= 100; a++) {
  console.log(a);
}

// __________________________________________
// 2.მოცემულია მასივი:
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let b = 0; b < array1.length; b++) {
  let c = array1[b];
  if ((c > 0) & (c < 10)) {
    console.log(c);
  }
}
// ან
for (let d of array1) {
  if ((d > 0) & (d < 10)) {
    console.log(d);
  }
}

// _______________________________________________
// 3.მოცემულია მასივი
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let f of array2) {
  if (f === 5) {
    console.log("არის");
    break;
  }
}

// _______________________
// 4.მოცემულია მასივი:
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let e = 0; e < array3.length; e++) {
  sum += array3[e];
}
console.log(sum);

// ________________________________________
// 5. მოცემულია მასივი:
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
let array4 = [1, 2, 3, 4, 5];
let h = 0;

for (let g = 0; g < array4.length; g++) {
  h += array4[g];
}
let i = h / array4.length;
console.log(i);

// ____________________________________
// 6 მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
let array5 = [1, 2, 3, 7, 6, 9];
for (let j of array5) {
  if (j === 7) {
    continue;
  }
  console.log(j);
}

// ___________________________________
// 7. მოცემულია ობიექტი:
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user["studentstatus"]);
console.log(user.studentstatus);

// 8.მოცემულია ობიექტი:
// - თუ user ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// - თუ user სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// - თუ user სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// - ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("Hello user");
} else if (user2.name === "levani") {
  console.log("Hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("Hello anna");
} else {
  console.log("Error");
}

// ______________________________
// 9.მოცემულია მასივი:
// ამოიღეთ მხოლოდ ლუწი რიცხვები
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let k of array6) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

// _______________________
// 10.მოცემულია მასივი
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let z of users) {
  if (z.status == true) {
    console.log(z);
  }
}

// _____________________________________________
// 11.Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let m of array7) {
  if (typeof m === "number" && m % 5 === 0) {
    console.log(m);
  }
}

// ________________________________________
// 12. Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (let y of array8) {
  for (let w of y) {
    if (w > 0) {
      console.log(w);
    }
  }
}
