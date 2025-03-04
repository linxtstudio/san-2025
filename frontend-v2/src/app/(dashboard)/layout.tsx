import { AuthContextProvider } from "@/modules/dashboard/contexts/auth-provider"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <AuthContextProvider>{children}</AuthContextProvider>
}
