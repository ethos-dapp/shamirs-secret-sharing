// const { randomBytes } = require('crypto')
import '@ethersproject/shims'
import { randomBytes } from "ethers/lib/utils"
import { Buffer } from "@craftzdog/react-native-buffer"

function random(size) {
  const r = Buffer.from(randomBytes(32 + size))
  return r.slice(32)
}

module.exports = {
  random
}
