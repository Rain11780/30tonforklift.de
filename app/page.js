import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "SOCMA | 30-Tonnen-Gabelstapler für Ihre härtesten Herausforderungen",
	description: "Stärken Sie Ihre Betriebsabläufe mit einem 30-Tonnen-Gabelstapler, der für schwere Industrieeinsätze entwickelt wurde. Ob Reifenhandling im Kohlebergbau, Einsatz im Stahlwerk mit Elektromagneten, Steinbrucharbeit oder Containerlogistik – der HNF-300 von SOCMA bietet unschlagbare Zuverlässigkeit. Auf der Suche nach einem 30-Tonnen-Gabelstapler zur Miete oder zum Kauf – in Sydney, Montgomery oder darüber hinaus? Wir haben, was Sie brauchen."
  };

// Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${process.env.ROOT_URL}`
		}
	]
};

export default function Home() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<FeaturedCategories />
			<CustomizableOptions />
			<CustomizableProcess />
			<ProductionCapacity />
			<FAQ />
			<Testimonials />
		</>
	);
}
