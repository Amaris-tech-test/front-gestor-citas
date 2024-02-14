import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../functions/auth';
import { useAuth } from '../hooks/useAuth';

interface ProtectedProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Protected: React.FC<ProtectedProps> = ( {children}) => {
  const navigate = useNavigate();
  const [loaded, SetLoaded] = useState(false);
  const { logout } = useAuth();


  useEffect(() => {
    if (loaded) return;
    console.log(isLoggedIn())
    if (!isLoggedIn()) logout();
    SetLoaded(true);
  }, [loaded, navigate]);
  return (
    <>{!loaded ? <div>Cargando...</div> : children ? 
   children : <Outlet />}</>

  );
}
