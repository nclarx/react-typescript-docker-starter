const PORT = 80

import { Express } from 'express'
import { join }    from 'path'
import express = require('express')


const notFound = `
<html lang="en">
    <head>
        <title>JADE Professional - BarNet</title>
    </head>
    <body>
        <h1>404 Not Found</h1>
        <p>
            You seem lost. Please head back to homepage.
        </p>
    </body>
</html>
`

const app: Express = express()


process.on('SIGINT', function () {
  console.log('Server shutting down ... ')
  process.exit(0)
})

app.use(express.static(join(__dirname, '../../client/build')))

app.listen(PORT, () => {
  console.log('Server running on ')
})
