import UserBase from '../../models/userBase'

interface UserDTO extends UserBase {
  _id: string
}

export default UserDTO
