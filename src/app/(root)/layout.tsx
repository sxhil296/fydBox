import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` min-h-dvh grid grid-rows-[auto_1fr_auto]`}>
      <Navbar />
      {children}
      <FooterSection />
    </div>
  );
}
