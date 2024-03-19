"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import PlayIcon from "@/icons/PlayIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
	image: string,
	name: string,
	href: string

}

const ListItem: React.FC<ListItemProps> = ({
	image,
	name,
	href
}) => {
	const router = useRouter();
	const authModal = useAuthModal();
	const { user } = useUser();

	const onClick = () => {
		if (!user) {
			return authModal.onOpen();
		}
		// Add authentication before pushing
		router.push(href)
	}
	return (
		<div>
			<button
				onClick={onClick}
				className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
      	bg-neutral-100/10 
        cursor-pointer 
      	hover:bg-neutral-100/20 
        transition 
        pr-4
				w-full
				"
			>
				<div
					className="
						relative
						min-h-[64px]
						min-w-[64px]
						select-none
					"
				>
					<Image
						className="object-cover"
						fill
						src={image}
						alt="Image"
						draggable={false}
					/>
				</div>
				<p className="font-medium truncate py-5">
					{name}
				</p>
				<div
					className="
						absolute
						transition
						opacity-0
						rounded-full
						flex
						items-center
						justify-center
						bg-green-500
						p-2
						drop-shadow-md
						right-3
						group-hover:opacity-100
						hover:scale-110
						size-fit
					"
				>
					<PlayIcon className="text-black" size={35} />
				</div>
			</button>
		</div>
	)
}

export default ListItem