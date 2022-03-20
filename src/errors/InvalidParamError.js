export default class InvalidParamError extends Error {
  constructor (message) {
    super(message)

    this.name = 'InvalidParamError'
  }
}
