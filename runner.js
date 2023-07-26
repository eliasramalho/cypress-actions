const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjhmZjk1MzdjLTVmMjItNGRmNi1hMDg2LWQ3MWFhMTYxNDAzMy0xNjkwMzgxMDQzODI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYjAyYTQ2M2EtNjUwOS00ZWU2LWJhNTctMjhlMjc1ZjI1OTJiIiwidHlwZSI6InQifQ.cgHRcoy6TSppC9OnrMM1mSeUs2KwGkuPDWH5lDZ7bws'

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
