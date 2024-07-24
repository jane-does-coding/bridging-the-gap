"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DrawerComponent } from "./Drawer";
import { useRouter } from "next/navigation";
/* import { signOut } from "next-auth/react";
 */
const components: { title: string; href: string; description: string }[] = [
	{
		title: "BMI Calculator",
		href: "/tools/bmi",
		description: "Calculate Body Mass Index, and see which is normal",
	},
	{
		title: "BMR Calculator",
		href: "/docs/primitives/hover-card",
		description: "Calculate Basal metabolic rate",
	},
	{
		title: "RNA to DNA",
		href: "tools/rna-dna",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavComponent({ currentUser }: any) {
	const router = useRouter();

	return (
		<NavigationMenu className="w-fit flex items-center justify-between">
			<NavigationMenuList className="justify-between  flex items-center gap-12">
				<NavigationMenuItem
					onClick={() => router.push("/")}
					className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0 cursor-pointer mr-4"
				>
					Home
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger
						onClick={() => router.push("/quizzes")}
						className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0"
					>
						Quizzes
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-neutral-50 backdrop-blur-md overflow-hidden">
							<li className="row-span-3 overflow-hidden">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium">
											Find Quizzes
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Dolorum, quae.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/quizzes/prefixes" title="Medical Prefixes">
								Prefixes in Medical Terminology
							</ListItem>
							<ListItem href="/quizzes/body-systems" title="Body Systems">
								Body Systems and their funcitons
							</ListItem>
							<ListItem href="/quizzes/dna-rna" title="DNA RNA">
								Some RNA DNA quiz
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						onClick={() => router.push("/learn")}
						className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0"
					>
						Learn
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-neutral-50 backdrop-blur-md">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						onClick={() => router.push("/tools")}
						className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0"
					>
						Tools
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-neutral-50 backdrop-blur-md">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* {currentUser ? (
					<NavigationMenuItem
						onClick={() => signOut()}
						className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0 cursor-pointer"
					>
						Logout
					</NavigationMenuItem>
				) : (
					<NavigationMenuItem
						onClick={() => router.push("/login")}
						className="jura font-normal transition-all hover:scale-[0.8] text-[1.25rem]  bg-white/0 hover:bg-white/0 cursor-pointer"
					>
						Login
					</NavigationMenuItem>
				)} */}
				{/* <NavigationMenuItem>
					<DrawerComponent />
				</NavigationMenuItem> */}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
