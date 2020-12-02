

const string = prompt('введите строку');

while(string) {
    const query = prompt('введите запрос');
    let total = 0;
    
    if(query === null){
        break;
    } 

    if(string.includes(query)){
        console.log(query);
        console.log(`найдено ${string}`);

        for(let i = 0; i < string.length; i += 1) {
            
            if(string[i] === query) {
                total += 1;
            }
        }
        console.log(total);
        
    } else {
        console.log('совпадение не найдено');
    }
}


// поиск по строке
// // const string = prompt("введите строку");//абракадабра
// const string = "абракадабр";
// while (string) {
//   const query = prompt("введите запрос"); //абр
//   // const query = "абр";
//   let total = 0;
//   let message;
//   if (query === null) {
//     break;
//   }
//   if (string.includes(query)) {
//     console.log(query);
//     console.log(`найдено ${string}`);
//     for (let i = 0; i < string.length; i += 1) {
//       if (string[i] === query[0]) {
//       message = string.slice(i, i + query.length);
//       console.log(message);
//       if (message === query) {
//         total += 1;
//       }
//       }
//     }
//     console.log(total);
//   } else {
//     console.log("совпадение не найдено");
//   }
// }

// //поиск по строке
// // const string = prompt("введите строку"); //абракадабра
// const string = "абракадабр";
// // while (string) {
// // const query = prompt("введите запрос"); //абр
// const query = "абр";
// let total = 0;
// let message;
// // if (query === null) {
// //   break;
// // }
// if (string.includes(query)) {
//   console.log(query);
//   console.log(`найдено ${string}`);
//   // for (let i = 0; i < string.length; i += 1) {
//   //   if (string[i] === query[0]) {
//   //     message = string.slice(i, i + query.length);
//   //     console.log(message);
//   //     if (message === query) {
//   //       total += 1;
//   //     }
//   //   }
//   // }
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === query[0]) {
//       for (let j = 1; j < query.length; j += 1) {
//         if (string[i + j] === query[j]) {
//           if (j === query.length - 1) {
//             total += 1;
//           }
//           continue;
//         } else {
//           break;
//         }
//       }
//     }
//   }
//   console.log(total);
// } else {
//   console.log("совпадение не найдено");
// }
// // }