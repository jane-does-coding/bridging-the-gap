import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavComponent } from "@/components/Nav";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Six+Caps&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
