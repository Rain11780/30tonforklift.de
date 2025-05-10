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
	default: "SOCMA | 30-Tonnen-Gabelstapler für Ihre härtesten Herausforderungen",
	template: "SOCMA 30-Tonnen-Gabelstapler"
	},
	description:
	"Steigern Sie Ihre Produktivität mit einem 30-Tonnen-Gabelstapler, der speziell für Schwerindustrieanwendungen entwickelt wurde. Vom Reifenhandling im Kohlebergbau über das Stahlschmelzen mit Elektromagneten bis hin zum Steinbruchbetrieb und zur Containerlogistik bietet der HNF-300 von SOCMA außergewöhnliche Zuverlässigkeit. Sie suchen einen 30-Tonnen-Gabelstapler zum Verkauf oder zur Miete? Wir helfen Ihnen – ob in Sydney, Montgomery oder darüber hinaus.",
	openGraph: {
	title: "SOCMA 30-Tonnen-Gabelstapler",
	description:
	"Steigern Sie Ihre Produktivität mit einem 30-Tonnen-Gabelstapler, der speziell für Schwerindustrieanwendungen entwickelt wurde. Vom Reifenhandling im Kohlebergbau über das Stahlschmelzen mit Elektromagneten bis hin zum Steinbruchbetrieb und zur Containerlogistik bietet der HNF-300 von SOCMA außergewöhnliche Zuverlässigkeit. Sie suchen einen 30-Tonnen-Gabelstapler zum Verkauf oder zur Miete? Wir helfen Ihnen – ob in Sydney, Montgomery oder darüber hinaus.",
	images: [
	{
	url: "/opengraph-image.png",
	width: 1200,
	height: 630,
	alt: "SOCMA 30-Tonnen-Gabelstapler"
	}
	],
	locale: "de_DE",
	type: "website"
	},
	twitter: {
	card: "summary_large_image",
	title: {
	default: "SOCMA 30-Tonnen-Gabelstapler",
	template: "SOCMA 30-Tonnen-Gabelstapler"
	},
	description:
	"Steigern Sie Ihre Produktivität mit einem 30-Tonnen-Gabelstapler, der speziell für Schwerindustrieanwendungen entwickelt wurde. Vom Reifenhandling im Kohlebergbau über das Stahlschmelzen mit Elektromagneten bis hin zum Steinbruchbetrieb und zur Containerlogistik bietet der HNF-300 von SOCMA außergewöhnliche Zuverlässigkeit. Sie suchen einen 30-Tonnen-Gabelstapler zum Verkauf oder zur Miete? Wir helfen Ihnen – ob in Sydney, Montgomery oder darüber hinaus.",
	images: [
	{
	url: "/opengraph-image.png",
	alt: "SOCMA 30-Tonnen-Gabelstapler"
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
