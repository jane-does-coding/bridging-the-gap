"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import SplitType from "split-type";

const BigText = () => {
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
		<div className="">
			<h1
				id="banner-text"
				className="text-[27rem] xl:text-[35rem] sixcaps m-0 mb-[1rem] leading-[28rem] xl:leading-[40rem] font-extralight tracking-[-1rem] banner-text  transform scale-x-[0.7] scale-y-[1.1]"
			>
				STUDY BETTER
			</h1>
		</div>
	);
};

export default BigText;
