// console.log("this is working")

// const color = ["red", "blue", "green","yellow"]
// const items = color.map(color => `<li>{color}<li>`)
// console.log(color)




// const a = [2, 1, 4, 3];
// console.log(a);
// const b= a.sort();
// console.log(b);
// console.log(a)


// var result = multiplyTwoNumbers(5, 10)
// console.log(result)





function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}
async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}
display();










