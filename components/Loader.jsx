import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

function Loader(){
	return (
		<div className="absolute inset-0 flex h-full w-full bg-yellow">
			<CircleNotch weight="bold" size="32" className="m-auto animate-spin"/>
		</div>
	);
}

export default Loader;