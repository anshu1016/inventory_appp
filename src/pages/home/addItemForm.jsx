import { useDispatch } from "react-redux";
import { addItem, editItem } from "../../redux";
import { useState } from "react";
import { categories } from "./category";

export const AddItems = ({
	setToggle,
	action,
	title,
	setIsEditing,
	editingData,
	isEditing,
}) => {
	const [switchCat, setSwitchCat] = useState(false);
	const [newItems, setNewItems] = useState({
		itemName: isEditing ? editingData.name : "",
		price: isEditing ? editingData.price : 0,
		quantity: isEditing ? editingData.quantity : 0,
		category: isEditing ? editingData.category : "",
	});
	const dispatch = useDispatch();
	console.log(newItems);

	return (
		<div className="flex flex-col fixed w-full top-0 bottom-0 left-0 right-0 bg-[#f6f6f64c] justify-center items-center">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col w-80 justify-center gap-3  bg-slate-100 shadow-md rounded-md px-6 p-4">
				<h1 className="flex justify-center items-center text-md font-semibold">
					{title}
				</h1>

				<label htmlFor="" className="flex flex-col  gap-1">
					Name
					<input
						type="text"
						placeholder="Name"
						className="p-2 px-4 rounded"
						value={newItems.itemName}
						onChange={(e) =>
							setNewItems({ ...newItems, itemName: e.target.value })
						}
					/>
				</label>
				<label htmlFor="" className="flex flex-col  gap-1">
					Quantity
					<input
						type="number"
						placeholder="Quantity"
						className="p-2 px-4 rounded"
						value={newItems.quantity}
						onChange={(e) =>
							setNewItems({ ...newItems, quantity: e.target.value })
						}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-1 ">
					Price
					<input
						type="number"
						placeholder="Price"
						className="p-2 px-4 rounded"
						value={newItems.price}
						onChange={(e) =>
							setNewItems({ ...newItems, price: e.target.value })
						}
					/>
				</label>

				<label htmlFor="" className="flex flex-col gap-1 ">
					Category
					{switchCat ? (
						<input
							type="text"
							placeholder="Category"
							className="p-2 px-4 rounded"
							// value={newItems.category}
							onChange={(e) =>
								setNewItems({ ...newItems, category: e.target.value })
							}
						/>
					) : (
						<select
							onChange={(e) =>
								e.target.value === "Other"
									? setSwitchCat(true)
									: setNewItems({ ...newItems, category: e.target.value })
							}>
							<option value="">Select Category</option>
							{categories.map((elms) => (
								<option value={elms.value}>{elms.name}</option>
							))}
							<option value="Other">Add other category</option>
						</select>
					)}
				</label>

				<div className="flex justify-between my-4">
					<button
						disabled={
							!newItems.itemName ||
							!newItems.price ||
							!newItems.quantity ||
							!newItems.category
						}
						className={`${
							!newItems.itemName ||
							!newItems.price ||
							!newItems.quantity ||
							!newItems.category
								? "cursor-not-allowed disabled"
								: "cursor-pointer"
						}`}
						onClick={() => {
							if (isEditing) {
								dispatch(editItem(editingData._id, newItems));
								setIsEditing(false);
							} else {
								dispatch(addItem(newItems));
								setToggle(false);
							}
						}}>
						{action}
					</button>
					<button
						onClick={() => {
							isEditing ? setIsEditing(false) : setToggle(false);
						}}>
						Discard
					</button>
				</div>
			</form>
		</div>
	);
};
