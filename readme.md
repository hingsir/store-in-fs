# Stores data in local file system

* Initialization
```js
var Store = require('store-in-fs')
var store = new Store('store.json')
```
* Call `save()` manually after all data changed.
```js
store.save()
```

## API Reference
* new Store(file, [defaultData])
  
* get(key, [defaultValue])

* set(key, value)

* save([data])
