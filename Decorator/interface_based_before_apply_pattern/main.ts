import { CompressedCloudStream } from './CompressedCloudStream';
import { EncryptedCloudStream } from './EncryptedCloudStream';
import { CloudStream } from './CloudStream';
let cs = new CloudStream();
let ecs = new EncryptedCloudStream();
let compressStream = new CompressedCloudStream();
cs.write('data');
ecs.write('dafsf');
compressStream.write("hi am sohel")