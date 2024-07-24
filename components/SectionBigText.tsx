"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import SplitType from "split-type";

const SectionBigText = ({ text }: { text: string }) => {
	useEffect(() => {
		const myText = new SplitType("#banner-text", { types: "chars" });

		gsap.to(".char", {
			y: 0,
			scale: 1,
			opacity: 1,
			stagger: 0.05,
			delay: 0.2,
			duration: 0.1,
		});
	}, []);
	return (
		<div>
			<h1
				id="banner-text"
				className="text-[20rem] xl:text-[25rem] sixcaps m-0 mb-[3rem] leading-[22rem] xl:leading-[27rem] font-extralight tracking-[-0.5rem] banner-text  transform scale-x-[0.8] scale-y-[1.1]"
			>
				{text}
			</h1>
		</div>
	);
};

export default SectionBigText;
