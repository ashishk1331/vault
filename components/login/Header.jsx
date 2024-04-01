export default function (props) {
	return (
		<header className="w-full p-4 flex items-center justify-between bg-white border-b border-gray-200 dark:border-gray-700">
			<h1 className="font-medium">Vault</h1>
			<a
				href="/"
				className="text-sm text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-600 underline"
			>
				Revert back
			</a>
		</header>
	);
}
