import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex flex-col text-center my-5">
        <h1>&lt; Hello World /&gt;</h1>
        <Link className="underline" href={"/list"}>
          show the list
        </Link>
      </main>
    </div>
  );
}
