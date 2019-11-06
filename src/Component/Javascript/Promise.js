// fetch('url')
//     .then( data => {
//         console.log(data)
//     })
//     .then( data => {
//         console.log(data)
//     })

const promise = new Promise( (resolve, reject) => {
    fetch('https://www.youtube.com/watch?v=Sca2vvVd_FA')
        .then(data => {
            resolve(data.text());
        })
        .then(data => {
            console.log(data)
        })
})

//Calback Hell
// promise.then( data => {
//         console.logs(data);
//         fetch()
//             .then()
//             .then( data => {
//                 fetch()
//             }
//                     .then()
//                         ...
//             )
//     });