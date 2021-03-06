const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

// - emit : trigger the event
// - on : register the event handler

// Built-in fires everytime whenever event registered with handler
emitter.on("newListener", (eventName, listenerFn) => {
    console.log(eventName + " Event registered with " + listenerFn.name)
})

emitter.on("removeListener", (eventName, listenerFn) =>{
    console.log(`${eventName} removed from handler ${listenerFn.name} !`)
})

function handlerFn(data){
    console.log("Handler function executed with message : ", data.message)
    emitter.removeListener("foo", handlerFn)
}

emitter.on("foo", handlerFn);

emitter.on("foo", (data) => {
    console.log("Foo Event Fired with message : ", data.message)
})

emitter.emit("foo", {message : "SUCCESS"})
// emitter.emit("foo", {message : "WARNING"})