import Loader from "./Loader.jsx";
import { Vault, Info } from "@phosphor-icons/react/dist/ssr";

function HeroText() {
	return (
		<div className="relative hero-text flex bg-yellow h-screen w-full">
			<div className="m-auto px-12 lg:px-24">
				<h3 className="flex uppercase text-2xl font-bold">
					<Vault weight="fill" size="36" className="mr-4" />
					vault
				</h3>

				<h1 className="text-5xl lg:text-7xl uppercase my-6">
					A safe place to store all your links.
				</h1>

				<a href="#" className="flex items-center underline mb-4">
					jump to the features
					<Info weight="fill" />
					or
				</a>

				{/*<a
					href="/login"
					type="button"
					class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none"
				>
					Log In
				</a>*/}
			</div>
		</div>
	);
}

export default HeroText;
