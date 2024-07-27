import React from "react";

const Circle = () => {
	return (
		<div className="flex w-[90vw] h-[60vh] mx-auto gap-14">
			<div className="pt-8 flex flex-col items-start justify-start w-full">
				<h1 className="jura font-bold text-[1.5rem] mb-4">
					Interactive Learning
				</h1>
				<p className="text-[0.9rem] xl:text-[1.15rem]">
					Quizzy provides a dynamic platform to engage with educational content.
					Our interactive quizzes help reinforce your knowledge in a fun and
					effective way.
				</p>
			</div>
			<img
				src="/light.jpg"
				alt="Interactive Learning"
				className="h-[45vh] aspect-[1] rounded-full object-cover my-auto"
			/>
			<div className="pb-8 flex flex-col items-end justify-end w-full">
				<h1 className="jura font-bold text-[1.5rem] mb-4">Modern Technology</h1>
				<p className="text-[0.9rem] xl:text-[1.15rem] text-right">
					Built with cutting-edge technologies like Next.js, React, and MongoDB,
					Quizzy ensures a smooth, responsive, and secure user experience.
					Discover the power of modern web development with Quizzy.
				</p>
			</div>
		</div>
	);
};

export default Circle;
