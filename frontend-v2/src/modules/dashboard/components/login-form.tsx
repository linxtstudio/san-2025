"use client"

import { ErrorMessage } from "@/common/components/shared/error-message"
import { Button } from "@/common/components/ui/button"
import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import { useAuthContext } from "@/modules/dashboard/hooks/use-auth-context"
import { login } from "@/modules/dashboard/service/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const loginFormSchema = z.object({
	username: z.string(),
	password: z.string(),
})

export type FormData = z.infer<typeof loginFormSchema>
export function LoginForm() {
	const router = useRouter()
	const { login: loginContext } = useAuthContext()
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setError,
	} = useForm<FormData>({
		resolver: async (data, context, options) => {
			return zodResolver(loginFormSchema)(data, context, options)
		},
		mode: "onChange",
	})

	async function handleSubmitLogin(formValue: FormData) {
		try {
			const response = await login(formValue)
			if (response.data.data.access_token) {
				toast.success("Login success, redirecting...")
				loginContext({
					accessToken: response.data.data.access_token,
					loginUser: response.data.data.user,
				})
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				setError("root.serverError", {
					type: error?.response?.data.message,
				})
			}
			return
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSubmitLogin)}
			className="flex flex-col gap-8"
		>
			<div className="flex flex-col gap-4">
				<p className="text-headline text-white">Name</p>
				<input
					{...register("username")}
					className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
					placeholder="Enter your username"
				/>
				<ErrorMessage error={errors.username?.message} />
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-headline text-white">Password</p>
				<input
					{...register("password")}
					className="rounded-xl border-2 border-neutral-500 bg-primary-950 p-3 text-neutral-200 placeholder:text-neutral-800 focus:ring-0"
					type="password"
					placeholder="Enter your password"
				/>
				<ErrorMessage error={errors.password?.message} />
			</div>
			<ErrorMessage error={errors.root?.serverError.type as string} />
			<Button className="ml-auto w-fit" type="submit" disabled={isSubmitting}>
				{isSubmitting ? <LoadingSpinner className="text-current" /> : null}
				Login
			</Button>
		</form>
	)
}
