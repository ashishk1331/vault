import { DotsThree, Copy } from "phosphor-react";

export default function(props){
	return (
		<li className="flex flex-col items-left gap-1 p-2 border-2 rounded hover:bg-yellow transition">
			<div className="flex items-center justify-between">
				<p>today</p>
				<button className="flex p-2">
					<DotsThree className="w-5 h-5 m-auto" />
				</button>
			</div>
			<h1>Google Link</h1>
			<code>https://google.com</code>
			<button className="mt-8 p-2 flex">
				<Copy className="w-5 h-5 m-auto"/>
			</button>
		</li>		
	)
}