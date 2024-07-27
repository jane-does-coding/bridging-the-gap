"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CardsGrid = ({ cards }: any) => {
	const router = useRouter();

	return (
		<div className="flex flex-col gap-2 items-center justify-between mx-auto p-2">
			<div className="flex gap-2 w-full">
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-2/4 flex items-center justify-center">
					<CardHeader className="flex-1">
						<CardTitle className="mb-1 xl:mb-4 jura">
							Discover Your Knowledge
						</CardTitle>
						<CardDescription className="jura text-[0.9rem] xl:text-[1.15rem] my-4 mb-8 pb-4">
							Quizzy offers quizzes on medical prefixes, body systems, and DNA &
							RNA to test and expand your knowledge. Start learning today!
						</CardDescription>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700 mt-1 xl:mt-2">
							Explore More
						</Button>
					</CardHeader>
					<CardContent className="flex-1 flex items-center justify-center pt-2 pl-0">
						<img
							src="/book.jpg"
							className="w-full object-fit rounded-[0.5rem] h-[40vh] object-cover "
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader className="px-6 pb-2">
						<CardTitle className="jura">Medical Prefixes</CardTitle>
						<CardDescription>Prefixes in Medical Terminology</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4 pb-4">
						<img
							src="/prefixes.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button
							onClick={() => router.push("/quizzes/prefixes")}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700"
						>
							Take Quiz
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader className="px-6 pb-2">
						<CardTitle className="jura">DNA RNA</CardTitle>
						<CardDescription>DNA RNA Quiz.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4 pb-4">
						<img
							src="/dna.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button
							onClick={() => router.push("/quizzes/dna-rna")}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700"
						>
							Take Quiz
						</Button>
					</CardFooter>
				</Card>
			</div>
			<div className="flex gap-2 w-full">
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader className="px-6 pb-2">
						<CardTitle className="jura">Body Systems</CardTitle>
						<CardDescription>
							Test your knowledge in body systems.
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4 pb-4">
						<img
							src="/body.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem] border-neutral-100 border-2"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button
							onClick={() => router.push("/quizzes/prefixes")}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700"
						>
							Take Quiz
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader className="px-6 pb-2">
						<CardTitle className="jura">All Quizzes</CardTitle>
						<CardDescription>View all available quizzes</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4 pb-4">
						<img
							src="/quiz.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem] border-neutral-100 border-2"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700">
							Explore More
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-2/4 flex items-center justify-center">
					<CardHeader className="flex-1">
						<CardTitle className="mb-1 xl:mb-4 jura">Easy to Use</CardTitle>
						<CardDescription className="jura text-[0.9rem] xl:text-[1.15rem] my-4 mb-8 pb-4">
							Quizzy&apos;s user-friendly interface makes learning enjoyable.
							Built with modern tech, it ensures a smooth experience. Explore
							and learn with ease!
						</CardDescription>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] text-neutral-700 mt-1 xl:mt-2">
							Explore More
						</Button>
					</CardHeader>
					<CardContent className="flex-1 flex items-center justify-center pt-2">
						<img
							src="/quiz-view.png"
							className="w-full object-fit rounded-[0.5rem] h-[40vh] object-cover border-neutral-100 border-2"
							alt=""
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default CardsGrid;
