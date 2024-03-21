import PlayIcon from "@/icons/PlayIcon"


const PlayButton = () => {
	return (
		<button
			className="
				transition
				opacity-0
				rounded-full
				flex
				items-center
				bg-green-500
				p-2
				drop-shadow-md
				translate
				translate-y-1/4
				group-hover:opacity-100
				group-hover:translate-y-0
				hover:scale-110
				size-fit
			"
		>
			<PlayIcon className="text-black" size={30}/>
		</button>
	)
}

export default PlayButton