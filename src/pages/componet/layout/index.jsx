import { Header } from "../header";
import { Sidebar } from "../sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
