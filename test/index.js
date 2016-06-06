var Store = require('../index.js')

var store = new Store('store.json')

if(!store.get('foo')){
    store.set('foo', 'bar')
}else{
    console.log('foo exists')
}

store.save();
