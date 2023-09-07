import AuthText from "@/components/Shared/AuthText"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <div className="flex justify-center items-center h-auto overflow-hidden px-20 py-20">
            <AuthText />
            {children}
        </div>
    )
}