import Header from '@/components/Shared/Fragments/Header'
import BaliProvider from '@/context/BaliContext'

export default function AppLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header top="Top Destination" discount="Discounted Destination" newly="Newly Added Destination"/>
            <BaliProvider>
                {children}
            </BaliProvider>
            
        </div>
    )
}