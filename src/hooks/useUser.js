import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    fetch('http://localhost:5000/api/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error('Failed to fetch user', err))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
