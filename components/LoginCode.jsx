import { X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import Loader from "./Loader.jsx";

function LoginCode({ supabase, email, loginCodePage, setLoginCodePage }) {
	const [token, setToken] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function verifyOTP() {
		const { data, error } = await supabase.auth.verifyOtp({
			email,
			token,
			type: "magiclink",
		});
		await console.log(data, error);
		await console.log(supabase.getUser());
		setIsLoading(false);
	}

	return (
		<div className="loginCode fixed inset-0 h-screen w-full text-center bg-yellow p-8">
			<div className="w-fit m-auto">
				<button
					className="m-4 mb-8"
					onClick={(e) => setLoginCodePage(false)}
				>
					<X size="24" weight="bold" />
				</button>

				<h1 className="uppercase w-full text-2xl font-bold">log in</h1>

				<p>Enter the code sent to your mail</p>

				<form
					action=""
					className="flex flex-col items-center mt-12"
					onSubmit={(e) => {
						e.preventDefault();
						setIsLoading(true);
						verifyOTP();
						e.target.reset();
					}}
				>
					{isError && (
						<p className="flex items-center mr-auto text-red-500">
							<Asterisk />
							{errorMesaage}
						</p>
					)}
					<input
						type="text"
						length="6"
						placeholder="paste the code here..."
						className="block w-full mb-4 py-2 px-4 bg-[transparent] border-2 rounded placeholder:text-[black] text-center text-xl"
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>
					<button
						className="p-2 px-6 border-2 bg-[black] text-yellow rounded-full uppercase font-bold"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginCode;
