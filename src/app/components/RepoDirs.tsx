import Link from "next/link";
async function fetchRepoContents(name: string) {
  // Loading... to wait 3 second
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = res.json();
  return contents;
}

const RepoDirs: any = async ({ name }: any) => {
  const contents = fetchRepoContents(name);
  const dirs = (await contents).filter(
    (content: { type: string }) => content.type === "dir"
  );

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
