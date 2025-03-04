import { RegisterForm } from "@/modules/registration/components/register-form"
import { RegisterTicketButton } from "@/modules/registration/components/register-ticket-button"
import Link from "next/link"

export default function Register() {
	return (
		<main className="flex w-full flex-col bg-primary-950">
			<div className="relative flex h-full min-h-screen w-full flex-col gap-8 overflow-x-hidden">
				<div className="z-1 flex w-full items-center justify-center">
					<div className="flex w-full max-w-screen-2xl flex-col gap-16 px-8 py-16 md:px-16">
						<div className="flex w-full flex-col gap-5">
							<div className="flex items-center gap-6 text-white">
								<Link href="/">
									<svg
										width="24"
										height="20"
										viewBox="0 0 24 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Back Icon</title>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.144034 1.23467C0.287452 0.86917 0.530338 0.55678 0.841971 0.337008C1.1536 0.117235 1.51998 -4.48966e-05 1.89477 1.28929e-08H14.5263C17.0389 1.28929e-08 19.4486 1.05357 21.2252 2.92893C23.0019 4.8043 24 7.34784 24 10C24 12.6522 23.0019 15.1957 21.2252 17.0711C19.4486 18.9464 17.0389 20 14.5263 20H3.15793C2.65541 20 2.17348 19.7893 1.81815 19.4142C1.46281 19.0391 1.26319 18.5304 1.26319 18C1.26319 17.4696 1.46281 16.9609 1.81815 16.5858C2.17348 16.2107 2.65541 16 3.15793 16H14.5263C16.0339 16 17.4797 15.3679 18.5457 14.2426C19.6117 13.1174 20.2105 11.5913 20.2105 10C20.2105 8.4087 19.6117 6.88258 18.5457 5.75736C17.4797 4.63214 16.0339 4 14.5263 4H6.46866L7.65602 5.25333C8.001 5.63071 8.19176 6.13601 8.18721 6.6604C8.18266 7.1848 7.98317 7.68632 7.6317 8.05697C7.28023 8.42761 6.80491 8.63771 6.30812 8.64202C5.81132 8.64633 5.33279 8.4445 4.97561 8.08L0.55456 3.41333C0.289784 3.13368 0.109471 2.77747 0.0364026 2.38969C-0.0366657 2.00192 0.000789039 1.59998 0.144034 1.23467Z"
											fill="#F6F6F6"
										/>
									</svg>
								</Link>
								<h2 className="font-semibold text-title-1 text-white lg:text-display">
									Registration Form
								</h2>
							</div>
							<RegisterTicketButton />
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
