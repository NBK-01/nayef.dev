import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-36">
        <h1 className="mx-auto text-4xl bold italic">
          {" "}
          coming soon - building...{" "}
        </h1>
        <div className="flex space-x-6 mx-auto py-6">
          <Link href="https://github.com/NBK-01" className="underline">
            <Button>github</Button>
          </Link>
          <Link href="https://x.com/excelsior_stu" className="underline">
            twitter/X
          </Link>
        </div>
      </div>
    </>
  );
}
