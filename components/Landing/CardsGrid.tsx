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

const CardsGrid = ({ cards }: any) => {
	return (
		<div className="flex flex-col gap-2 items-center justify-between mx-auto p-2">
			<div className="flex gap-2 w-full">
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-2/4 flex items-center justify-center">
					<CardHeader className="flex-1">
						<CardTitle className="mb-4 jura">Notifications</CardTitle>
						<CardDescription className="jura text-[1.25rem] my-4 mb-8 pb-4">
							You have 3 unread messages. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Repellendus facilis porro ab dolorem
							ducimus labore? A atque provident magnam possimus!
						</CardDescription>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] mt-2">
							Explore More
						</Button>
					</CardHeader>
					<CardContent className="flex-1 flex items-center justify-center pt-4">
						<img
							src="/banner.jpg"
							className="w-full object-fit rounded-[0.5rem] h-[40vh] object-cover "
							alt=""
						/>
					</CardContent>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader>
						<CardTitle className="jura">Notifications</CardTitle>
						<CardDescription>You have 3 unread messages.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem]">
							Explore More
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader>
						<CardTitle className="jura">Notifications</CardTitle>
						<CardDescription>You have 3 unread messages.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem]">
							Explore More
						</Button>
					</CardFooter>
				</Card>
			</div>
			<div className="flex gap-2 w-full">
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader>
						<CardTitle className="jura">Notifications</CardTitle>
						<CardDescription>You have 3 unread messages.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem]">
							Explore More
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-1/4">
					<CardHeader>
						<CardTitle className="jura">Notifications</CardTitle>
						<CardDescription>You have 3 unread messages.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<img
							src="/banner.jpg"
							className="w-full aspect-[3/2] object-fit rounded-[0.5rem]"
							alt=""
						/>
					</CardContent>
					<CardFooter>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem]">
							Explore More
						</Button>
					</CardFooter>
				</Card>
				<Card className="bg-white shadow-sm rounded-[0.5rem] border-[1px] border-neutral-200/75 w-2/4 flex items-center justify-center">
					<CardHeader className="flex-1">
						<CardTitle className="mb-4 jura">Notifications</CardTitle>
						<CardDescription className="jura text-[1.25rem] my-4 mb-8 pb-4">
							You have 3 unread messages. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Repellendus facilis porro ab dolorem
							ducimus labore? A atque provident magnam possimus!
						</CardDescription>
						<Button className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-[0.5rem] mt-2">
							Explore More
						</Button>
					</CardHeader>
					<CardContent className="flex-1 flex items-center justify-center pt-4">
						<img
							src="/banner.jpg"
							className="w-full object-fit rounded-[0.5rem] h-[40vh] object-cover "
							alt=""
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default CardsGrid;
