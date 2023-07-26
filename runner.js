const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNiOWI0ZTQ2LTMwNmMtNDkwYS04ZWE2LTY0ZDE2NGQ0NmY4ZS0xNjkwMzc5ODIzMzAxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDg0NTAyOGUtN2M0YS00YTFlLTk1N2MtYzgxNjU3NTU3MzEzIiwidHlwZSI6InQifQ.zHqPr5rL4orbi3ly9sMZYLeAXmErFKwfV3dnZ_5nXok'

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
