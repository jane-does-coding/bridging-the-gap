"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScroll() {
	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-4xl font-semibold text-black dark:text-white">
							Unleash the power of <br />
							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
								Scroll Animations
							</span>
						</h1>
					</>
				}
			>
				<div className="relative w-full h-auto">
					<Image
						src={`/quiz-view.png`}
						alt="hero"
						layout="responsive"
						width={1400}
						height={720}
						className="w-full h-auto mx-auto rounded-2xl object-cover"
						draggable={false}
					/>
				</div>
			</ContainerScroll>
		</div>
	);
}
