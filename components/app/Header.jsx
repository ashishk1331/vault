import { LockSimple, Plus } from "phosphor-react";

export default function (props) {
	return (
		<header className="flex items-center gap-2">
			<div className="p-2 bg-yellow rounded border-2">
				<LockSimple weight="fill" className="w-5 h-5" />
			</div>
			<h1 className="text-xl md:text-2xl mr-auto">Vault</h1>
			<button className="p-1.5 px-4 rounded-full border-2 flex items-center gap-2 bg-yellow">
				<Plus /> Add
			</button>
		</header>
	);
}
