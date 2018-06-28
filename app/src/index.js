const test = (val) => {
  console.log('vaueee', val);
  if (val === 'WORLD') {
    return Promise.reject(`Please be original!`)
  }
  return Promise.resolve(`HELLO, ${val}!`)
}

const run = () => {
  return test('WORLD')
    .then(console.log)
    .catch(console.warn)
}
console.log('go');
run()