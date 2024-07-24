"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerComponent() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button className="jura font-bold transition-all hover:scale-[0.8] text-[1.25rem]">
					More
				</Button>
			</DrawerTrigger>
			<DrawerContent className="bg-neutral-100 pb-8">
				<div className="mx-auto w-full max-w-[60vw]">
					<DrawerHeader>
						<DrawerTitle className="text-[2rem] jura">
							{" "}
							Explore More
						</DrawerTitle>
					</DrawerHeader>
					{/* <div className="p-4 pb-0">
						<div className="flex items-center justify-center space-x-2">
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(-10)}
								disabled={goal <= 200}
							>
								<Minus className="h-4 w-4" />
								<span className="sr-only">Decrease</span>
							</Button>
							<div className="flex-1 text-center">
								<div className="text-7xl font-bold tracking-tighter">
									{goal}
								</div>
								<div className="text-[0.70rem] uppercase text-muted-foreground">
									Calories/day
								</div>
							</div>
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(10)}
								disabled={goal >= 400}
							>
								<Plus className="h-4 w-4" />
								<span className="sr-only">Increase</span>
							</Button>
						</div>
					</div> */}
					{/* MIGHT USE IT FOR SOME QUIZ???? */}
					{/* <div className="p-4 pb-0">
						<div className="flex items-center justify-center space-x-2">
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(-10)}
								disabled={goal <= 200}
							>
								<Minus className="h-4 w-4" />
								<span className="sr-only">Decrease</span>
							</Button>
							<div className="flex-1 text-center">
								<div className="text-7xl font-bold tracking-tighter">
									{goal}
								</div>
								<div className="text-[0.70rem] uppercase text-muted-foreground">
									Calories/day
								</div>
							</div>
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(10)}
								disabled={goal >= 400}
							>
								<Plus className="h-4 w-4" />
								<span className="sr-only">Increase</span>
							</Button>
						</div>
					</div> */}
					<div className="p-4 flex items-center justify-between mb-8">
						<div className="flex flex-col gap-2">
							{/* Heading */}
							<h2 className="font-bold text-[1.75rem] jura mb-4">Quizzes</h2>
							<a href="" className="font-semibold jura text-[1.25rem]">
								DNA, RNA
							</a>
							<a href="" className="font-semibold jura text-[1.25rem]">
								BMI, BMR
							</a>
							<a href="" className="font-semibold jura text-[1.25rem]">
								BodyFat calculator
							</a>
						</div>
						<div className="flex flex-col gap-2">
							{/* Heading */}
							<h2 className="font-bold text-[1.75rem] jura mb-4">Learn</h2>
							<a href="" className="font-semibold jura text-[1.25rem]">
								DNA, RNA
							</a>
							<a href="" className="font-semibold jura text-[1.25rem]">
								BMI, BMR
							</a>
							<a href="" className="font-semibold jura text-[1.25rem]">
								BodyFat calculator
							</a>
						</div>
						<div className="flex flex-col gap-2">
							{/* Heading */}
							<h2 className="font-bold text-[1.75rem] jura mb-4">Tools</h2>
							<a
								href="/tools/rna-dna"
								className="font-semibold jura text-[1.25rem]"
							>
								DNA to RNA
							</a>
							<a
								href="/tools/bmi"
								className="font-semibold jura text-[1.25rem]"
							>
								BMI calculator
							</a>
							<a
								href="/tools/bmr"
								className="font-semibold jura text-[1.25rem]"
							>
								BMR calculator
							</a>
							{/* OMG?? */}
							{/* I SOULD FR DO PREFIX IN MEDTERMINOLOGY IDENTIFIER */}
							<a
								href="/tools/bmr"
								className="font-semibold jura text-[1.25rem]"
							>
								BodyFat calculator
							</a>
						</div>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
