const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdkN2UwOGMzLTY4NzYtNGQ5MS1iMTJiLTAzYzQzOTA3NTZiYi0xNzE3Njc5MDgzODA5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2IzMWI5ZjctYzUzYS00N2UzLWEyNmEtN2QzNzExMzI4MTBhIiwidHlwZSI6InQifQ.zbAUp3SsxmUkMDI19ssWgY4PQuD5l9wWk4TyH-7vXq0'

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