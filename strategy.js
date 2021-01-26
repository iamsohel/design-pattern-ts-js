var JpegCompressor = /** @class */ (function () {
    function JpegCompressor() {
    }
    JpegCompressor.prototype.compress = function (file) {
        console.log('Compress using jpeg');
    };
    return JpegCompressor;
}());
var PngCompressor = /** @class */ (function () {
    function PngCompressor() {
    }
    PngCompressor.prototype.compress = function (file) {
        console.log('Compress using png');
    };
    return PngCompressor;
}());
var BlackandWhite = /** @class */ (function () {
    function BlackandWhite() {
    }
    BlackandWhite.prototype.apply = function (file) {
        console.log("filter using b&h");
    };
    return BlackandWhite;
}());
var ImageStorage = /** @class */ (function () {
    function ImageStorage() {
    }
    ImageStorage.prototype.store = function (file, compressor, filter) {
        compressor.compress(file);
        filter.apply(file);
    };
    return ImageStorage;
}());
var imgStore = new ImageStorage();
imgStore.store('s', new JpegCompressor, new BlackandWhite());
imgStore.store('s', new PngCompressor, new BlackandWhite());
