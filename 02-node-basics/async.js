// Timer
// Reading / Writing
// Socket 
// XHR Calls
// Promises

// Async -> Macro Task | Micro Task


console.log("Started")

setTimeout(() => { 
    console.log("01 : After 3 seconds...")
}, 0)

setTimeout(() => { 
    console.log("02 : After 3 seconds...")
}, 0)

Promise.resolve().then(resp => console.log("Promise Resolved"))

console.log("Ended")


