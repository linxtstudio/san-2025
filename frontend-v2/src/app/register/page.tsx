import { Header } from "@/common/components/ui/header"
import { RegisterForm } from "@/modules/registration/components/register-form"

export default function Register() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<div className="relative flex w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl flex-col gap-16 px-8 py-16 md:px-16">
						<div className="flex w-full flex-col gap-5">
							<h2 className="font-semibold text-title-1 text-white lg:text-display">
								Registration Form
							</h2>
							<RegisterForm />
						</div>
					</div>
				</div>
				<img
					src="/graphic/footer.svg"
					alt=""
					className="absolute bottom-0 w-full"
				/>
				<footer className="h-20 md:h-40 lg:h-80" />
			</div>
		</main>
	)
}
