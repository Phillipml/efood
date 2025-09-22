import '@testing-library/jest-dom'
import 'jest-styled-components'

// Polyfills para Node.js
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any
