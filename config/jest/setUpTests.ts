import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime'
import { TextEncoder, TextDecoder } from 'text-encoding';

interface Global {
    TextEncoder: typeof TextEncoder;
    TextDecoder: typeof TextDecoder;
}

declare const global: Global;

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;