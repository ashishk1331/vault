import { collection, getDocs } from "firebase/firestore";

import useSWR from "swr";
import { firestore } from "@/util/firebase.js";

const fetcher = (...args) => getDocs(collection(firestore, ...args));

import { Heart, InstagramLogo, ArrowUpRight } from "@phosphor-icons/react";
import Empty from "./EmptySection.jsx";
import AddForm from "./AddForm.jsx";

import { useState } from "react";

import { useGlobalUserStore } from "@/stores/useGlobalUser.store.js";

// Color stops for the gradient
const ELEMENTS = 4;
const SAMPLE = {
	_id: 123,
	title: "Avalon 3 Sitzer",
	url: "https://www.made.com/style/st467632/d86939#d86939",
};

/**
 * Container for all posts as cards
 */
export default function (props) {
	const { email, open, setOpen } = props;
	// const data = Array(24).fill(SAMPLE);
	if (!email) return null;

	const { data: links, error, isLoading } = useSWR(email, fetcher);

	return (
		<>
			<AddForm open={open} setOpen={setOpen} email={email} />
			<main className="w-full max-h-screen overflow-y-scroll p-8 bg-gray-50">
				{!isLoading && links && links?.docs?.length > 0 ? (
					<ul className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
						{links.docs.map((doc, index) => (
							<Post key={doc.id} index={index} doc={doc} />
						))}
					</ul>
				) : (
					<div className="w-full h-full flex justify-around">
						<Empty />
					</div>
				)}
			</main>
		</>
	);
}

/**
 * Sample post schema used:
 * 	_id: uuidv4,
 * 	title: string,
 * 	url: string,
 *	liked: boolean,
 */

function Post(props) {
	const { title, url, date } = props.doc.data();

	const host = new URL(url).hostname;

	return (
		<li className="w-full flex flex-col overflow-hidden border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
			{/* Image for the url*/}
			<div className="relative w-full aspect-video bg-emerald-300">
				{/*<div className="w-full flex items-center justify-between">
					<div className="w-fit m-2 p-1 bg-white rounded-md">
						<InstagramLogo className="icon"/>
					</div>

					<button className="w-fit m-2 p-1 rounded">
						<Heart className="icon opacity-75"/>
					</button>
				</div>*/}
			</div>

			{/* Meta data about the url*/}
			<div className="flex flex-col gap-2 p-4 bg-white">
				<h3>{title}</h3>
				<div className="flex items-center">
					<a href={url} className="underline text-zinc-600">
						{host}
					</a>
					<ArrowUpRight />
				</div>
			</div>
		</li>
	);
}
