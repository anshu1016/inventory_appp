import { useSelector } from "react-redux";

export const ItemReport = () => {
	const items = useSelector((state) => state.items);

	return (
		<>
			{items.length < 1 ? (
				<p className="w-full text-2xl justify-center items-center flex mt-6 text-red-400">
					You don't have any items till now
				</p>
			) : (
				<div className="mt-4">
					<table className="w-full  flex flex-col items-center bg-slate-50">
						<tr className="flex justify-between w-full border-b px-3 items-center h-8">
							<th className="w-[25%] flex ">Items</th>
							<th className="w-[25%]">Qauntity</th>
							<th className="w-[25%]">Price(in Rs)</th>
							<th className="w-[25%]">Category</th>
						</tr>

						{items?.map((item) => (
							<tr
								key={item._id}
								className="flex justify-between w-full items-center px-3 border-b ">
								<td className="w-[25%] items-center flex">{item.name}</td>
								<td className="w-[25%] items-center flex justify-center">
									{item.quantity}
								</td>
								<td className="w-[25%] items-center flex justify-center">
									{item.price}
								</td>
								<td className="w-[25%] items-center flex justify-around">
									{item.category}
								</td>
							</tr>
						))}
					</table>
				</div>
			)}
		</>
	);
};
