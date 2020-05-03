"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PORT = 80;
const path_1 = require("path");
const express = require("express");
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
`;
const app = express();
process.on('SIGINT', function () {
    console.log('Server shutting down ... ');
    process.exit(0);
});
app.use(express.static(path_1.join(__dirname, '../../client/build')));
app.listen(PORT, () => {
    console.log('Server running on ');
});
//# sourceMappingURL=server.js.map