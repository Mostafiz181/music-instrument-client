import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstructors";



const Dashboard = () => {
  const [isAdmin]=UseAdmin();
  const [isInstructor]=UseInstructor();

  // const isAdmin=false;
  // const isInstructor=true;
  console.log(isAdmin,isInstructor)
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-slate-200 px-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {isAdmin?.admin ? (
            <>
              <li className="flex ">
                <NavLink className="font-bold text-1xl uppercase font-popins " to="/dashboard/manageClass"> Manage Classes</NavLink>
              </li>
              <li className="flex">
                <NavLink  className="font-bold text-1xl uppercase font-popins "  to="/dashboard/menageUsers">Manage Users</NavLink>
              </li>
            </>
          ) : isInstructor?.instructor ? (
            <>
              <li>
                <NavLink  className="font-bold text-1xl uppercase font-popins " to="/dashboard/addaClass">Add a Class</NavLink>
              </li>
              <li>
                <NavLink  className="font-bold text-1xl uppercase font-popins " to="/dashboard/myClass">My Classes</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink  className="font-bold text-1xl uppercase font-popins ">My Selected Classes</NavLink>
              </li>
              <li>
                <NavLink  className="font-bold text-1xl uppercase font-popins ">My Enrolled Classes</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
