import bcrypt from 'bcrypt'

const encryptPassword = async (password) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}
export default encryptPassword;