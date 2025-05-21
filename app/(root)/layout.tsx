import Footer from "@/components/footer ";
import Navigation from "@/components/navbar";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Theme>
      <nav className=" bg-[#F6FBF8]">
        <Navigation />
        <div className=" bg-[#F6FBF8]">{children}</div>
        <Footer />
      </nav>
    </Theme>
  );
}
