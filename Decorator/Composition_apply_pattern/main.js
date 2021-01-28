"use strict";
exports.__esModule = true;
var CloudStream_1 = require("./CloudStream");
var EncryptedCloudStream_1 = require("./EncryptedCloudStream");
function storeCreditCard(stream) {
    stream.write('1234-1234-1234-1234');
}
storeCreditCard(new EncryptedCloudStream_1.EncryptedCloudStream(new CloudStream_1.CloudStream()));
