"use client";

import {
	SuitcaseSimple,
	SignOut,
	Plus,
	Stack,
	User,
	CircleNotch,
} from "@phosphor-icons/react";

import Avatar from "avvvatars-react";

import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/util/firebase.js";

import { useRouter } from "next/navigation";

import { twMerge } from "tailwind-merge";

/**
 * Sidebar component for app
 */
export default function (props) {
	const { open, setOpen, user } = props;
	const router = useRouter();
	const [signOut, loading, error] = useSignOut(auth);

	function handleLogOut() {
		signOut();
		router.push("/login");
	}

	return (
		<nav className="v-flex h-screen border-r-2 p-4 py-8 min-w-[272px]">
			<ul className="h-full flex flex-col gap-6">
				<li className="h-flex">
					{/*<SuitcaseSimple weight="fill" className="h-8 w-8" />*/}
					<span className="font-bold">The Vault</span>
				</li>
				<li className="border-b-2" />
				<li>
					<button
						type="button"
						className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
						onClick={() => setOpen(true)}
					>
						<Plus size={18} />
						Add
					</button>
				</li>
				<div className="mt-auto flex flex-col space-y-3">
					{user && (
						<div className="group flex items-center justify-between block bg-gray-100 p-4 rounded-lg text-left dark:bg-white/[.05]">
							<div className="max-w-[85rem]">
								<p className="font-medium text-xs text-gray-800 dark:text-gray-200">
									Signed in as
								</p>
								<p className="me-2 inline-block">
									{user.email}
								</p>
							</div>
							<button
								disabled={loading}
								className={twMerge(
									"p-3 text-red-500 hover:bg-red-100 rounded-lg dark:text-red-300 dark:hover:bg-red-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-red-600 dark:focus:ring-opacity-50",
									loading && "bg-red-100",
								)}
								onClick={handleLogOut}
							>
								{loading ? (
									<CircleNotch
										size={20}
										className="animate-spin"
									/>
								) : (
									<SignOut size={20} />
								)}
							</button>
						</div>
					)}
				</div>
			</ul>
		</nav>
	);
}
