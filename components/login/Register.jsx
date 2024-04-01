"use client";

import { useFormik } from "formik";
import { RegisterSchema } from "./Register.schema.js";
import { useLoginFormStore } from "@/stores/useLoginForm.store.js";
import { WarningCircle } from "@phosphor-icons/react";

import Banner from "@/components/ui/Banner.jsx";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/util/firebase.js";

import { useGlobalUserStore } from "@/stores/useGlobalUser.store.js";

import { useRouter } from "next/navigation";

export default function (props) {
	const router = useRouter();
	const setPage = useLoginFormStore((state) => state.setPage);
	const setUser = useGlobalUserStore((state) => state.setUser);

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	if (user) {
		setUser(user);
		router.push("/app");
	}

	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
	} = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: RegisterSchema,
		onSubmit: async function (values, actions) {
			let { email, password } = values;
			await createUserWithEmailAndPassword(email, password);
		},
	});

	return (
		<>
			<div className="text-center">
				<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
					Sign up
				</h1>
				<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					Already have an account?
					<button
						className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						onClick={(e) => {
							setPage(0);
						}}
					>
						Sign in here
					</button>
				</p>
			</div>
			{error && <Banner message={error.message} />}
			<div className="mt-12">
				{/* Form */}
				<form onSubmit={handleSubmit}>
					<div className="grid gap-y-4">
						{/* Form Group */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm mb-2 dark:text-white"
							>
								Email address
							</label>
							<div className="relative">
								<input
									type="email"
									id="email"
									name="email"
									values={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									required=""
									aria-describedby="email-error"
								/>
								{touched.email && errors.email && <Warning />}
							</div>
							{touched.email && errors.email && (
								<p
									className="text-xs text-red-600 mt-2"
									id="email-error"
								>
									{errors.email}
								</p>
							)}
						</div>
						{/* End Form Group */}
						{/* Form Group */}
						<div>
							<label
								htmlFor="password"
								className="block text-sm mb-2 dark:text-white"
							>
								Password
							</label>
							<div className="relative">
								<input
									type="password"
									id="password"
									name="password"
									values={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									required=""
									aria-describedby="password-error"
								/>
								{touched.password && errors.password && (
									<Warning />
								)}
							</div>
							{touched.password && errors.password && (
								<p
									className="text-xs text-red-600 mt-2"
									id="password-error"
								>
									{errors.password}
								</p>
							)}
						</div>
						{/* End Form Group */}
						{/* Form Group */}
						<div>
							<label
								htmlFor="confirm-password"
								className="block text-sm mb-2 dark:text-white"
							>
								Confirm Password
							</label>
							<div className="relative">
								<input
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									values={values.confirmPassword}
									onChange={handleChange}
									onBlur={handleBlur}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									required=""
									aria-describedby="confirm-password-error"
								/>
								{touched.confirmPassword &&
									errors.confirmPassword && <Warning />}
							</div>
							{touched.confirmPassword && errors.confirmPassword && (
								<p
									className="text-xs text-red-600 mt-2"
									id="confirm-password-error"
								>
									{errors.confirmPassword}
								</p>
							)}
						</div>
						{/* End Form Group */}
						<button
							type="submit"
							disabled={isSubmitting || loading}
							className="w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							Sign up
						</button>
					</div>
				</form>
				{/* End Form */}
			</div>
		</>
	);
}

function Warning(props) {
	return (
		<div className="absolute inset-y-0 translate-y-1/4 end-0 pointer-events-none pe-3">
			<WarningCircle size={20} weight="fill" className="fill-red-500" />
		</div>
	);
}
