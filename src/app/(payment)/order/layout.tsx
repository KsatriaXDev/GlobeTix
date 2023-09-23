import Header from "@/components/Shared/Fragments/Header";
import OrderProvider from "@/context/OrderContext"


export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header/>
      <OrderProvider>
        {children}
      </OrderProvider>
    </div>
  );
}
