import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const isUserLoggedIn = false; // Replace with actual authentication state

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push('/signin');
    }
  }, [isUserLoggedIn, router]);

  return isUserLoggedIn ? children : null;
}
