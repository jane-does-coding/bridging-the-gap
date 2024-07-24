import React from "react";

const Footer = () => {
	return (
		<div className="w-full py-4 px-[7vw] jura bg-neutral-50 flex items-center justify-between">
			<div className="w-[35%]">
				<h2 className="font-bold text-[1.25rem] jura mb-4">Study better</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
					delectus sint porro voluptatem quos harum amet magnam quod autem
					rerum!
				</p>
			</div>
			<div className="p-4 flex items-center justify-between w-[50%] gap-16">
				<div className="flex flex-col gap-2">
					{/* Heading */}
					<h2 className="font-bold text-[1.25rem] jura mb-4">Quizzes</h2>
					<a href="" className="font-semibold jura text-[1rem]">
						DNA, RNA
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BMI, BMR
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BodyFat calculator
					</a>
				</div>
				{/* <div className="flex flex-col gap-2">
					<h2 className="font-bold text-[1.25rem] jura mb-4">Learn</h2>
					<a href="" className="font-semibold jura text-[1rem]">
						DNA, RNA
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BMI, BMR
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BodyFat calculator
					</a>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="font-bold text-[1.25rem] jura mb-4">Tools</h2>
					<a href="" className="font-semibold jura text-[1rem]">
						DNA to RNA
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BMI, BMR calculator
					</a>
					<a href="" className="font-semibold jura text-[1rem]">
						BodyFat calculator
					</a>
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
