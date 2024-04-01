"use client";

import Sidebar from "@/components/app/Sidebar.jsx";
import Body from "@/components/app/Body.jsx";

import { useGlobalUserStore } from "@/stores/useGlobalUser.store.js";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/util/firebase.js";

import { useRouter } from "next/navigation";
import { useState } from "react";

/*
	url : /app
*/
export default function (props) {
	const router = useRouter();
	const [user, loading, error] = useAuthState(auth);
	const setUser = useGlobalUserStore((state) => state.setUser);
	const [open, setOpen] = useState(false);

	if (error) {
		router.push("/login");
	}

	if (user) {
		setUser(user);
	}

	return (
		<div className="min-h-screen flex items-top">
			<Sidebar open={open} setOpen={setOpen} user={user || null} />
			<Body email={user?.email || null} open={open} setOpen={setOpen} />
		</div>
	);
}
