import { Confetti, ArrowRight, Asterisk } from "@phosphor-icons/react/dist/ssr";

function LoginBody(props) {
	return (
		<div className="loginBody relative bg-yellow flex h-auto min-h-[50vh]">
			<div className="m-auto px-12 lg:px-24">
				<h3 className="text-3xl mb-4">
					All you ever gonna need for this is your email, and that’s
					it!
					<Confetti weight="fill" className="inline ml-2 pb-1" />
				</h3>

				<a href="/login">
					<h3 className="flex items-center gap-x-1 hover:gap-x-5 transition-all duration-500 text-3xl mb-8">
						<span>Log in</span>
						<ArrowRight />
					</h3>
				</a>
			</div>
		</div>
	);
}

export default LoginBody;
