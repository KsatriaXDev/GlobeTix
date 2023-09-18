import Header from "@/components/Shared/Fragments/Header";

export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <div className="mt-20 px-10">
        {children}
      </div>
      
    </div>
  );
}
