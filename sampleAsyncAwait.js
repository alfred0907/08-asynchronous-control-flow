// create a file named sampleCallback.js

function myAsync1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("async1")
        }, 3000)
    })
}

function myAsync2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("async2")
        }, 2000)
    }) 
}

function myAsync3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("async3")
        }, 1000)
    })
}

function myAsync4() {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // lets say something happened
                throw new Error("forced error")
            } catch (err) {
                reject(err)
            }
        }, 3000)
    })
}

// 1. Need to fix this so that we run it in the proper sequence
// 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
// 3. should 
async function start() {
  try {
    console.log(await myAsync1())
    console.log(await myAsync2())
    console.log(await myAsync3())
    console.log(await myAsync4())
  } catch(err) {
    console.log(err.message)
  } finally {
    console.log('app is terminating')
  }
}

start()

// Convert this using promises and name the file samplePromise.js
// convert this to promise where everything is needed to be run in parallel and get all result. name the file samplePromis2.js
// convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js