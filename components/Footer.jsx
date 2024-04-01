import { Vault } from "@phosphor-icons/react/dist/ssr";

export default function (props) {
	return (
		<>
			<footer className="w-full max-w-[85rem] py-12 px-4 sm:px-6 lg:px-8 mx-auto">
				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
					<div>
						<a
							className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 uppercase"
							href="#"
							aria-label="Brand"
						>
							The Vault
						</a>
					</div>
					{/* End Col */}
					<ul className="text-center">
						<li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black dark:before:text-gray-600">
							<a
								className="inline-flex gap-x-2 text-sm text-black hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:underline"
								href="#"
							>
								About
							</a>
						</li>
						<li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black dark:before:text-gray-600">
							<a
								className="inline-flex gap-x-2 text-sm text-black hover:text-gray-800 hover:underline dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Services
							</a>
						</li>
						<li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
							<a
								className="inline-flex gap-x-2 text-sm text-black hover:text-gray-800 hover:underline dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Blog
							</a>
						</li>
					</ul>
					{/* End Col */}
					{/* Social Brands */}
					<div className="md:text-end space-x-2">
						<p className="text-sm">
							© 2024 Vault. All rights reserved.
						</p>
					</div>
				</div>
				{/* End Grid */}
			</footer>
		</>
	);
}
