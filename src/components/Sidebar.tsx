import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5"
import SidebarMenuItem from "./SidebarMenuItem"

const menuItems = [
	{
		path: "/dashboard/main",
		icon: <IoBrowsersOutline size={24} />,
		title: "Dashboard",
		subTitle: "Data Overview",
	},
	{
		path: "/dashboard/counter",
		icon: <IoCalculator size={24} />,
		title: "Counter",
		subTitle: "Client side counter",
	},
	{
		path: "/dashboard/pokemons",
		icon: <IoFootball size={24} />,
		title: "Pokemons",
		subTitle: "Static generation",
	},
]

export default function Sidebar(): React.ReactElement {
	return (
		<div
			id="menu"
			className="left-0 z-10 min-h-screen w-96 overflow-y-scroll bg-gray-900 text-slate-300"
		>
			<div id="logo" className="my-4 px-6">
				<h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
					<IoLogoReact className="mr-2 text-blue-500" />
					<span>Dash</span>
					<span className="text-blue-500">8</span>.
				</h1>
				<p className="text-sm text-slate-500">Manage your actions and activities</p>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<a href="#" className="inline-flex items-center space-x-2">
					<span>
						<Image
							className="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
							alt=""
							width={50}
							height={50}
						/>
					</span>
					<span className="text-sm font-bold md:text-base">Anghelo Alva</span>
				</a>
			</div>

			<div id="nav" className="w-full px-6">
				{menuItems.map((item, index) => (
					<SidebarMenuItem key={item.title} {...item} />
				))}
			</div>
		</div>
	)
}
