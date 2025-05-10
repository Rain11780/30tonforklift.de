import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "SOCMA | 30 Ton Forklift Built for Your Toughest Challenges",
	description: "Power up your operations with a 30 ton forklift designed for heavy-duty industries. From coal mining tire handling to steel smelting with electromagnets, stone quarrying, and container logistics, SOCMA’s HNF-300 delivers unmatched reliability. Looking for a 30 ton forklift for sale or 30 ton forklift rental? We’ve got you covered – whether in Sydney, Montgomery, or beyond."
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
