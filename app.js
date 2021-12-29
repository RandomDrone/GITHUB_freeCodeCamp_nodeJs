//NPM

//local dependency npm i "package name"

//global dependency npm install -g "package name"

//package.json - plik konfiguracyjny ->mozna stworzyc reczine albo npm init ; npm init -y
    
const _  = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)