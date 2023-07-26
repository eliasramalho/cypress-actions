const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQxMjE1YzU5LWFkZDEtNDIxMi1hYjA4LTNiMDQ4NTY1ZTY0Zi0xNjkwMzgyNjczOTg3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDljMTQ0YjQtNjhiZi00MjBkLTk3ODMtMDg5YmY0MDc1ODNkIiwidHlwZSI6InQifQ.X-eQFYiYQU_lmDIH9PY8n3qb8gO0nu64iR-RaugK-4A'

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
