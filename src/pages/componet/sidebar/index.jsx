import { NavLink } from "react-router-dom";

const navItems = [
  {
    id: 1,
    name: "Inventory Management",
    route: "/"
  },
  {
    id: 2,
    name: "Sales Management",
    route: "/sales"
  },
  {
    id: 3,
    name: "Reporting and Analytics",
    route: "/reports"
  }
];

export const Sidebar = () => {
  const ActiveStyle = ({ isActive }) => ({
    background: isActive ? "#fff" : ""
  });
  return (
    <div className="flex flex-col pt-4 w-[18%] bg-[#272C48] h-full">
      <ul className="w-full font-semibold  text-md text-[#FD6B03] flex flex-col gap-2">
        {navItems.map((item) => (
          <li
            className="w-full h-10 justify-center items-center flex"
            key={item.id}
          >
            <NavLink
              className="w-full flex h-full  items-center p-4 pl-10 hover:bg-[#f0f0f0c3] ease-in-out"
              style={ActiveStyle}
              to={item.route}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
