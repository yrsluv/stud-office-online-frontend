import { ReactNode } from 'react';
import { Role } from '../../contexts/authContext';
import useAuth from '../../hooks/useAuth';

type ProtectedContentProps = {
  allowedRole?: Role;
  placeholder?: ReactNode;
  children?: ReactNode;
};

const ProtectedContent = ({ allowedRole, placeholder, children }: ProtectedContentProps) => {
  const { auth } = useAuth();

  if (auth && (allowedRole === undefined || auth.role === allowedRole)) {
    return <>{children}</>;
  } else return <>{placeholder}</>;
};
export default ProtectedContent;
