import React from "react";

const Circle = () => {
	return (
		<div className="flex w-[80vw] h-[60vh] mx-auto gap-14">
			<div className="pt-8 flex flex-col items-start justify-start">
				<h1 className="jura font-bold text-[1.5rem] mb-4">Some Title</h1>
				<p className="text-[0.9rem] xl:text-[1.15rem]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
					qui modi quibusdam repellat consequatur vel enim, adipisci corrupti
					hic similique?
				</p>
			</div>
			<img
				src="/banner.jpg"
				alt=""
				className="h-[45vh] aspect-[1] rounded-full object-cover my-auto"
			/>
			<div className="pb-8 flex flex-col items-end justify-end">
				<h1 className="jura font-bold text-[1.5rem] mb-4">Some Title</h1>
				<p className="text-[0.9rem] xl:text-[1.15rem] text-right">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
					qui modi quibusdam repellat consequatur vel enim, adipisci corrupti
					hic similique?
				</p>
			</div>
		</div>
	);
};

export default Circle;
