import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Volodymyr Babiichuk Portfolio',
	description: 'I am a software developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${jetBrainsMono.variable}`}>{children}</body>
		</html>
	)
}
