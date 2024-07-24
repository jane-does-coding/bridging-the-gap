"use client";
import React from "react";
import { motion } from "framer-motion";
import { DrawerComponent } from "./Drawer";
import { NavComponent } from "./Nav";

const Navbar = ({ currentUser }: any) => {
	return (
		<motion.div
			className="w-[80vw] p-2 px-12 bg-neutral-200/95 backdrop-blur-md fixed top-3 left-[10vw] rounded-full border-neutral-200 border-2 z-20 flex"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.75, ease: "easeOut" }}
		>
			<div className="w-full flex items-center justify-center">
				<NavComponent currentUser={currentUser} />
			</div>
		</motion.div>
	);
};

export default Navbar;
