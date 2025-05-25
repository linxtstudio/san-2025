"use client"

import { LoadingSpinner } from "@/common/components/ui/loading-spinner"
import {
	type IDetectedBarcode,
	type IScannerStyles,
	Scanner,
} from "@yudiel/react-qr-scanner"
import { useEffect, useState } from "react"
import "./ticket-scanner.css"
import { TicketCardModal } from "@/modules/dashboard/components/ticket-card-modal"
import { toast } from "sonner"

export function TicketScanner() {
	const [isLoading, setIsLoading] = useState(true)
	const [width, setWidth] = useState(window.innerWidth)
	const [permissionGranted, setPermissionGranted] = useState(false)
	const [scanResult, setScanResult] = useState<IDetectedBarcode | null>(null)

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		const handleResize = () => {
			setWidth(window.innerWidth)
			setIsLoading(false)
		}

		window.addEventListener("resize", handleResize, { signal })

		async function checkCameraPermission() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				})
				for (const track of stream.getTracks()) {
					track.stop()
				}
				setPermissionGranted(true)
				setIsLoading(false)
			} catch (error) {
				setPermissionGranted(false)
				setIsLoading(false)
			}
		}
		checkCameraPermission()

		return () => {
			controller.abort()
			setIsLoading(true)
		}
	}, [])

	const style: IScannerStyles = {
		container: {
			width: width,
			height: width,
		},
	}

	function handleScan(result: IDetectedBarcode[]) {
		setScanResult(result[0])
	}

	function handleError(error: unknown) {
		console.error(error)
		toast.error(
			error instanceof Error
				? error.message
				: "Error scanning ticket, please try again",
		)
	}

	return (
		<>
			<div className="flex w-full flex-col items-center gap-8">
				<div className="flex w-full flex-col items-center gap-4">
					<p className="text-body text-white">
						Scan the QR code on the ticket to verify
					</p>

					{!isLoading && !permissionGranted && (
						<span className="text-red-400 text-sm">
							Camera access is required to scan tickets
						</span>
					)}
				</div>
				{isLoading ? (
					<span className="px-8 py-8 2xl:px-16">
						<LoadingSpinner />
					</span>
				) : (
					<Scanner
						onScan={handleScan}
						onError={handleError}
						paused={!permissionGranted || isLoading || !!scanResult}
						allowMultiple={false}
						formats={["qr_code"]}
						constraints={{
							advanced: [{ facingMode: "environment" }],
						}}
						components={{
							finder: true,
							audio: false,
						}}
						styles={style}
						classNames={{
							container: "scanner",
						}}
					/>
				)}
			</div>
			{scanResult && (
				<TicketCardModal
					participantId={scanResult.rawValue}
					open={!!scanResult}
					onOpenChange={(open) => {
						if (!open) {
							setScanResult(null)
						}
					}}
				/>
			)}
		</>
	)
}
