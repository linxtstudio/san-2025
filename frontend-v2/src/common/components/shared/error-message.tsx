export function ErrorMessage({ error }: { error: string | undefined }) {
	return error ? <span className="text-red-400 text-sm">{error}</span> : null
}
