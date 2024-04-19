import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import './overwrites.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'KharchKhabri – Track your expenses with ease';
const description = 'Effortlessly Track and Manage Expenses.';

export const metadata = {
	title,
	description,
	icons: {
		icon: '/icons/icon.svg',
		shortcut: '/icons/favicon.ico',
		apple: '/icons/apple-icon.png',
	},
	appleWebApp: {
		title,
		statusBarStyle: 'black',
		startupImage: ['/icons/apple-icon.png'],
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	userScalable: false,
	themeColor: '#09090b',
};

export const revalidate = 0;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex h-full flex-col text-gray-600 antialiased`}>{children}</body>
		</html>
	);
}
