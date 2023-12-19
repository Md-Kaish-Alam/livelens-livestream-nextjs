import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home () {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <Image src='/logo.svg' width={500} height={500} alt="logo" />
    </div>
  )
}