import Footer from "@/components/footer ";
import Navigation from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-[#F6FBF8]">
      <Navigation />
      <div className=" bg-[#F6FBF8]">{children}</div>
      <Footer />
    </div>
  );
}
