// const users = [...];

// let usersWithLanguages = users.filter(function (user) {
//     return user.languages.length >= 3;
// })
//
// console.log(usersWithLanguages);


// let emails = users.map(user => user.email);
//
// console.log(emails);

// let averageYrs = users.reduce((accumulator, currentVal) => {
//     return accumulator + currentVal.yearsOfExperience;
// }, 0) / users.length;
//
// console.log(averageYrs);


// let emails = users.map(user => user.email);
//
// console.log(emails)
//
// let longestEmail = emails.reduce((accumulator, currentVal) => {
//     return accumulator.length > currentValue.length
//         ? accumulator
//         : currentValue;
// }, "")
//
// let usersWithLanguages = users.filter(user => {
//     return user.languages.length >= 3;
// })

// let nameString = users.reduce((acc, curVal, index) => {
//
//     if (index === users.length - 1){
//         return acc + curVal.name + ".";
//     }
//     return acc + curVal.name + ", ";
// }, "your instructors are");


/
// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//         yearsOfExperience: 5
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//         yearsOfExperience: 6
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//         yearsOfExperience: 7
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//         yearsOfExperience: 8
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//         yearsOfExperience: 9
//     }
// ];
//
// let uniqueLanguages = users.reduce((acc, user) => {
// let uniqueLang = user.languages.filter((lang) => {
//     if (!acc.includes(lang)) {
//         return lang;
//     }
// })
// console.log(uniqueLang);
// acc.push(...uniqueLang);
// return acc;
// },
// []
// )