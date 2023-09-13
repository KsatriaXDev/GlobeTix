import Header from '@/components/Shared/Fragments/Header'

export default function DetailLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}