import { useEffect, useState } from "react";
import { Layout, Loader } from "../componet";
import { AddItems } from "./addItemForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, fetchItem } from "../../redux";

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);
  const [editingData, setEditingData] = useState({});

  useEffect(() => {
    dispatch(fetchItem());
  }, []);

  return (
    <Layout>
      <div className="flex flex-col p-4 w-full md:w-[82%]">
        <div className="flex flex-col md:flex-row justify-between w-full px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
            Inventory
          </h1>
          <button
            onClick={() => setToggle(true)}
            className="flex bg-blue-500 p-2 rounded-md px-3 text-white"
          >
            Add Item
          </button>
        </div>
        {toggle && (
          <AddItems
            setToggle={setToggle}
            action={"Add"}
            title={"Add new Item"}
            setIsEditing={setIsEditing}
            editingData={editingData}
            isEditing={isEditing}
          />
        )}
        {isEditing && (
          <AddItems
            setToggle={setToggle}
            action={"Update"}
            title={"Update Item"}
            setIsEditing={setIsEditing}
            editingData={editingData}
            isEditing={isEditing}
          />
        )}

        {loading ? (
          <Loader />
        ) : (
          <>
            {items.length < 1 ? (
              <p className="w-full text-xl md:text-2xl justify-center items-center flex mt-6 text-red-400">
                You don't have any items till now
              </p>
            ) : (
              <div className="mt-4">
                <table className="w-full flex flex-col items-center bg-gray-200">
                  <tr className="flex justify-between w-full border-b px-3 items-center h-8 bg-gray-300">
                    <th className="w-[25%] flex ">Items</th>
                    <th className="w-[25%]">Quantity</th>
                    <th className="w-[25%]">Price (in Rs)</th>
                    <th className="w-[25%]">Action</th>
                  </tr>

                  {items?.map((item) => (
                    <tr
                      key={item._id}
                      className="flex justify-between w-full items-center px-3 border-b"
                    >
                      <td className="w-[25%]">{item.name}</td>
                      <td className="w-[25%] items-center justify-center">
                        {item.quantity}
                      </td>
                      <td className="w-[25%] items-center justify-center">
                        {item.price}
                      </td>
                      <td className="w-[25%] flex justify-around">
                        <button
                          className="text-red-500"
                          onClick={() => dispatch(deleteItem(item._id))}
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => {
                            setIsEditing(true);
                            setEditingData(item);
                          }}
                          className="text-black"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};
