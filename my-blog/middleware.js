// import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

// export default authkitMiddleware();

// export const config = { matcher: ['/'] 

    
// };


import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
