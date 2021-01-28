import { Stream } from './Stream';
import {CloudStream} from './CloudStream';
import {EncryptedCloudStream} from './EncryptedCloudStream';

function storeCreditCard(stream: Stream){
    stream.write('1234-1234-1234-1234')
}   

storeCreditCard(new EncryptedCloudStream(new CloudStream()))
