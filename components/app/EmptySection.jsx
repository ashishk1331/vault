import { LinkBreak } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4">
			<div className="flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
				<LinkBreak size={28} />
			</div>
			<h2 className="mt-5 font-semibold text-gray-800 dark:text-white">
				No links yet!
			</h2>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
				Add a link to view it here.
			</p>
		</div>
	);
}
