module.exports.userNameTest = (name) => {
  const nameReg = /^[a-zA-Z][a-zA-Z0-9_-]{3,15}/
  return nameReg.test(name)
}