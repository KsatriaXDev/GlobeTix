import AuthText from "@/components/Shared/Fragments/AuthText";
import Header from "@/components/Shared/Fragments/Header"

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header />
    <div className="flex justify-center items-center h-auto overflow-hidden px-40 py-60">
      <AuthText />
      {children}
    </div>
    </>
    
  );
}
