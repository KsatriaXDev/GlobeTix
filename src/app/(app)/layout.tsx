import Header from '@/components/Shared/Fragments/Header'

export default function AppLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header top="Top Destination" discount="Discounted Destination" newly="Newly Added Destination"/>
            {children}
        </div>
    )
}