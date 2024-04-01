import { twMerge } from "tailwind-merge";

function HeroImage({ imageURL, className }) {
	return (
		<div className={twMerge("heroImage h-screen flex overflow-hidden w-full bg-yellow", className)}>
			<img src={imageURL.src} alt="" className="w-full object-cover" />
		</div>
	);
}

export default HeroImage;
