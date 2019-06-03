const path = require('path')

module.exports = {
    watch: true,
    entry: path.resolve(__dirname, "src/main/resources/js/main.js"),
    output: {
        path: path.resolve(__dirname, 'src/main/resources'),
        filename: 'bundle.js'
    }
}