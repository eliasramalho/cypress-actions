const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM1ZjQxYjE2LTIyOTgtNDMyYy04NzAzLWM5YzhiYmIyZmFkNS0xNjkwMjA3MTUzODY5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYmY1MWJkYjAtNmRhYi00M2Q4LTkxYTgtZTEyOTEwOWUyYTg0IiwidHlwZSI6InQifQ.5nyg6dSkbXrlGDeQ_Rlzqfp-vYxbz1eoLLm_fLKZ0UE'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
