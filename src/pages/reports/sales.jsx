import { useSelector } from "react-redux";

export const SalesReport = () => {
	const sales = useSelector((state) => state.sales);

	const totalRevenue = sales?.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);
	return (
		<>
			{sales.length < 1 ? (
				<p className="w-full text-2xl justify-center items-center flex mt-6 text-red-400">
					You don't have any sale till now
				</p>
			) : (
				<div className="mt-4">
					<table className="w-full  flex flex-col items-center bg-slate-50">
						<th>Sales History</th>
						<tr className="flex justify-between w-full border-b px-3 items-center h-8">
							<th className="w-[25%] flex ">Items</th>
							<th className="w-[25%]">Qauntity</th>
							<th className="w-[25%]">Price(in Rs)</th>
							<th className="w-[25%]">Totol Amount(Rs)</th>
						</tr>

						{sales?.map((item) => (
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
									{item.price * item.quantity}
								</td>
							</tr>
						))}
						<tr className="flex w-full justify-between text-[#555] h-10 items-center px-2">
							Total Revenue{" "}
							<td className="w-[25%] flex items-center justify-center  border-green-400 border h-full">
								Rs {totalRevenue}
							</td>
						</tr>
					</table>
				</div>
			)}
		</>
	);
};
