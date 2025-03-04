import clsx from "clsx"
import type { ComponentPropsWithoutRef } from "react"

export function LoadingSpinner(props: ComponentPropsWithoutRef<"div">) {
	return (
		<div
			{...props}
			className={clsx(
				"inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-neutral-100/0 text-brand-700",
				props.className,
			)}
			// biome-ignore lint/a11y/useSemanticElements: <explanation>
			role="status"
			aria-label="loading"
		>
			<span className="sr-only">Loading...</span>
		</div>
	)
}
