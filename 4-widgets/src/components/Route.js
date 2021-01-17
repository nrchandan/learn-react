import { useEffect, useState } from 'react';


const Route = ({ path, children }) => {
  const [newPath, setNewPath] = useState(window.location.pathname);

  const onLocationChange = () => {
    setNewPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return path === newPath ? children : null;
};

export default Route;
