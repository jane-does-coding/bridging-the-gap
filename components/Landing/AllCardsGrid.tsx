"use client";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { useRouter } from "next/navigation";

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
		},
	}),
};

const contentVariants = (delay: number) => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay,
			duration: 0.5,
		},
	},
});

const AllCardsGrid = ({ cards }: any) => {
	const router = useRouter();
	return (
		<div className="grid grid-cols-3 gap-4 w-[90vw] mx-auto">
			{cards.map((card: any, index: number) => (
				<motion.div
					key={index}
					custom={index}
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<Card
						onClick={() => router.push(card.link ? card.link : "/")}
						className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-full cursor-pointer"
					>
						<CardHeader>
							<motion.div
								custom={index}
								initial="hidden"
								animate="visible"
								variants={contentVariants(index * 0.1)}
							>
								<CardTitle className="jura">{card.title}</CardTitle>
							</motion.div>
							<motion.div
								custom={index}
								initial="hidden"
								animate="visible"
								variants={contentVariants(index * 0.2)}
							>
								<CardDescription>{card.description}</CardDescription>
							</motion.div>
						</CardHeader>
						<CardContent className="grid gap-4">
							<motion.img
								src={card.imageUrl}
								className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
								alt=""
								custom={index}
								initial="hidden"
								animate="visible"
								variants={contentVariants(index * 0.3)}
							/>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</div>
	);
};

export default AllCardsGrid;
