import CardsGrid from "@/components/Landing/CardsGrid";
import Circle from "@/components/Landing/Circle";
import Footer from "@/components/Landing/Footer";
import ThreeCards from "@/components/Landing/ThreeCards";
import Marquee from "react-fast-marquee";
import BigText from "@/components/Landing/BigText";
import AnimatedTextWord from "@/components/Text/AnimatedTextWord";
import { HeroScroll } from "@/components/ImageParallax";

export default async function Home() {
	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-100">
			<div className="flex flex-col items-center justify-center min-h-screen  p-0 m-0">
				<BigText />

				<AnimatedTextWord
					className="text-[1.25rem] xl:text-[1.5rem] jura"
					text={"A great website for students studiying medicine!"}
				/>
			</div>
			<CardsGrid
				cards={[
					{
						title: "hey",
					},
					{
						title: "hey",
					},
					{
						title: "hey",
					},
				]}
			/>
			<br />
			<br />
			<br />
			<br />
			<Marquee
				className="bg-neutral-100/65 border-[3px] border-white py-6"
				speed={80}
			>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
				<h2 className="jura text-[1.75rem] mx-8">
					Find Quizzes, Explanations, Tools and More
				</h2>
			</Marquee>
			<h2 className="text-neutral-700 text-[10rem] sixcaps m-0 mb-[2rem] leading-[10rem] font-light mx-auto text-center mt-16">
				What can you do?
			</h2>
			<br />
			<HeroScroll />
			{/* 			<ThreeCards />
			 */}{" "}
			<div className="mb-32 -mt-12">
				<Circle />
			</div>
			<Footer />
		</div>
	);
}
