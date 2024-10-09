import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

const userAuth = () => {
  const context = useContext(AuthContext)

  return context;
}

export default userAuth;