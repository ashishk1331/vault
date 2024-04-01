import { Asterisk } from "@phosphor-icons/react/dist/ssr";

function LoginHeader(){
	return (
		<div className="loginHeader h-auto min-h-[50vh] bg-yellow flex ">

			<div className="m-auto mb-8 px-12 lg:px-24">

				<h1 className="uppercase text-5xl lg:text-7xl">
					JOIN Vault for free forever*
				</h1>

				<p className="flex items-center">
					<Asterisk />
					Until I’ve the free tier plan
				</p>

			</div>

		</div>
	);
}

export default LoginHeader;