import Header from "./Header.jsx";

export default function (props) {
	return (
		<>
			<Header />
			<main className="w-full max-w-md mx-auto p-6">
				<div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
					<div className="p-4 sm:p-7 flex flex-col space-y-6">
						{props.children}
					</div>
				</div>
			</main>
		</>
	);
}
