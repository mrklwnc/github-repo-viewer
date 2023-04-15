import Repo from "@/app/components/Repo";
import Link from "next/link";

export default function Page({ params: { name } }: any) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Repo name={name} />
    </div>
  );
}

// Continue 37:17

// This and the one at the top is the same
// const RepoPage = ({ params: { name } }: any) => {
//   return (
//     <div>
//       <Repo name={name} />
//     </div>
//   );
// };

// export default RepoPage;
