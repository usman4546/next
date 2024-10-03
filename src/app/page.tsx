import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/darkmode";

export default function Home() {
  return (
    <>
    <ModeToggle/>
      <Button variant="outline">Button</Button>
    </>
  );
}
