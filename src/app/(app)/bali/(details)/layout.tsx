import Header from "@/components/Shared/Fragments/Header";
import BaliZooProvider from "@/context/BaliZooContext";

export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="pt-20 px-10 bg-[#f5f5f5] overflow-y-hidden">
      <Header />
      <BaliZooProvider>
          {children}
      </BaliZooProvider>
    </div>
  );
}
