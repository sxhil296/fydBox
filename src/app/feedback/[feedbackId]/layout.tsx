import Container from "@/components/general/container";
import FooterSection from "@/components/sections/footer/default";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FeedbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className={` min-h-dvh grid grid-rows-[auto_1fr_auto]`}>
        <header className="w-full p-4 flex justify-start items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <MessageCircle />
            FydBox
          </Link>
        </header>
        {children}
        <FooterSection />
      </div>
    </Container>
  );
}
