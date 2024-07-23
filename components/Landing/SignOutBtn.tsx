"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
	return (
		<div>
			<Button onClick={() => signOut()}>Sign out</Button>
		</div>
	);
};

export default SignOutBtn;
