import { withAuth, getSignInUrl } from "@workos-inc/authkit-nextjs";
import WriteBlog from "../components/WriteBlog";
import Redirecting from "../components/Redirecting";

export default async function WritePage() {
  const { user } = await withAuth();

  if (!user) {
    const signInUrl = await getSignInUrl();
    return <Redirecting url={signInUrl} />;
  }

  return <WriteBlog />;
}
