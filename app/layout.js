import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
		default: "SOCMA|30 Ton Forklift Built for Your Toughest Challenges",
		template: "SOCMA 30 Ton Forklift"
	},
	description: "Power up your operations with a 30 ton forklift designed for heavy-duty industries. From coal mining tire handling to steel smelting with electromagnets, stone quarrying, and container logistics, SOCMA’s HNF-300 delivers unmatched reliability. Looking for a 30 ton forklift for sale or 30 ton forklift rental? We’ve got you covered – whether in Sydney, Montgomery, or beyond.",
	openGraph: {
		title: "SOCMA 30 Ton Forklift",
		description: "Power up your operations with a 30 ton forklift designed for heavy-duty industries. From coal mining tire handling to steel smelting with electromagnets, stone quarrying, and container logistics, SOCMA’s HNF-300 delivers unmatched reliability. Looking for a 30 ton forklift for sale or 30 ton forklift rental? We’ve got you covered – whether in Sydney, Montgomery, or beyond.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "SOCMA 30 Ton Forklift"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "SOCMA 30 Ton Forklift",
			template: "SOCMA 30 Ton Forklift"
		},
		description: "Power up your operations with a 30 ton forklift designed for heavy-duty industries. From coal mining tire handling to steel smelting with electromagnets, stone quarrying, and container logistics, SOCMA’s HNF-300 delivers unmatched reliability. Looking for a 30 ton forklift for sale or 30 ton forklift rental? We’ve got you covered – whether in Sydney, Montgomery, or beyond.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "SOCMA 30 Ton Forklift"
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
