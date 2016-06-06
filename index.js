var fs = require('fs')

function Store(file, defaultData){
    try {
        this.data = JSON.parse(fs.readFileSync(file))
    } catch (e) {
        this.data = defaultData || {}
    }
    this.file = file
}

Store.prototype = {
    save: function(data) {
        fs.writeFileSync(this.file, JSON.stringify(data || this.data), 'utf-8')
    },
    get: function(key, defaultValue) {
        return this.data[key] || defaultValue
    },
    set: function(key, value){
        this.data[key] = value
    }
}

module.exports = Store
