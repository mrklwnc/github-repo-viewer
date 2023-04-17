import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

export default function Page({ params: { name } }: any) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>

      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading repo...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

// This and the one at the top is the same
// const RepoPage = ({ params: { name } }: any) => {
//   return (
//     <div>
//       <Repo name={name} />
//     </div>
//   );
// };

// export default RepoPage;
