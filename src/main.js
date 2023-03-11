import { version } from '../package.json';
import { requiredFn } from './requiredComponent';

export default function () {
    console.log('version ' + version);
    requiredFn();
}