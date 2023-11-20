import { useDispatch, useSelector } from "react-redux";
import { Layout, Loader } from "../componet";
import { useState } from "react";
import { ItemReport } from "./item";
import { SalesReport } from "./sales";
import { fetchItem, loadSales } from "../../redux";

export const Reports = () => {
	const [showSales, setShowSales] = useState(false);
	const [showItems, setShowItems] = useState(false);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	return (
		<Layout>
			<div className="flex flex-col p-4 w-[82%]">
				<div className="flex justify-between w-full px-4">
					<h1 className="text-xl font-semibold ">Reports and Analyitics </h1>
				</div>
				<div className="flex gap-8 h-20 items-center justify-center">
					<button
						onClick={() => {
							setShowItems(false);
							setShowSales(true);
							dispatch(loadSales());
						}}
						className="bg-green-500 text-white rounded
                    py-3 px-6 mb-4 hover:bg-green-700 h-10 flex items-center">
						Sales Report
					</button>
					<button
						onClick={() => {
							setShowSales(false);
							setShowItems(true);
							dispatch(fetchItem());
						}}
						className="bg-green-500 text-white rounded
                    py-3 px-6 mb-4 hover:bg-green-700 h-10 flex items-center">
						Inventory Report
					</button>
				</div>
				{loading && <Loader />}
				{!loading && showItems && <ItemReport />}
				{!loading && showSales && <SalesReport />}
			</div>
		</Layout>
	);
};
