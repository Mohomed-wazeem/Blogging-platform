'use server';  

import { signOut } from '@workos-inc/authkit-nextjs';

export async function SignOutButton() {
  await signOut();
  return null;  
}
