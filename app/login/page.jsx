"use client";

import LogIn from "@/components/login/LogIn.jsx";
import Register from "@/components/login/Register.jsx";

import Wrapper from "@/components/login/Wrapper.jsx";

import { useLoginFormStore } from "@/stores/useLoginForm.store.js";

/*
	0 -> login
	1 -> register
*/
export default function (props) {
	const page = useLoginFormStore((state) => state.page);

	return <Wrapper>{page === 0 ? <LogIn /> : <Register />}</Wrapper>;
}
