import { useDispatch } from "react-redux";
import { useState } from "react";
import { addSale } from "../../redux";

export const AddSaleForm = ({ setToggle }) => {
	const [newSale, setNewSale] = useState({
		name: "",
		price: 0,
		quantity: 0,
	});
	const dispatch = useDispatch();

	return (
		<div className="flex flex-col fixed w-full top-0 bottom-0 left-0 right-0 bg-[#f6f6f64c] justify-center items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col w-80 justify-center gap-3  bg-slate-100 shadow-md rounded-md px-6 p-4">
				<h1 className="flex justify-center items-center text-md font-semibold">
					Add New Sale
				</h1>

				<label htmlFor="" className="flex flex-col  gap-1">
					Name
					<input
						type="text"
						placeholder="Name"
						className="p-2 px-4 rounded"
						value={newSale.name}
						onChange={(e) => setNewSale({ ...newSale, name: e.target.value })}
					/>
				</label>
				<label htmlFor="" className="flex flex-col  gap-1">
					Quantity
					<input
						type="number"
						placeholder="Quantity"
						className="p-2 px-4 rounded"
						value={newSale.quantity}
						onChange={(e) =>
							setNewSale({ ...newSale, quantity: e.target.value })
						}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-1 ">
					Price
					<input
						type="number"
						placeholder="Price"
						className="p-2 px-4 rounded"
						value={newSale.price}
						onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
					/>
				</label>
				<div className="flex justify-between my-4">
					<button
						disabled={
							!newSale.itemName ||
							!newSale.price ||
							!newSale.quantity ||
							!newSale.category
						}
						className={`${
							!newSale.itemName ||
							!newSale.price ||
							!newSale.quantity ||
							!newSale.category
								? "cursor-not-allowed disabled"
								: "cursor-pointer"
						}`}
						onClick={() => {
							dispatch(addSale(newSale));
							setToggle(false);
						}}>
						Add Sale
					</button>
					<button
						onClick={() => {
							setToggle(false);
						}}>
						Discard
					</button>
				</div>
			</form>
		</div>
	);
};
