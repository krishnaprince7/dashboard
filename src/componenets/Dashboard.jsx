import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { MdMonitorHeart } from "react-icons/md";
import Header from "./Header";
import Boats from "./Boats";

import Ghaat from "./Ghaat";

import District from "./District";
import LifeJacket from "./LifeJacket";

const Dashboard = () => {
  const { pathname } = useLocation();

  const getLinkClass = (path, bg) =>
    `px-4 py-1 rounded-full font-medium ${
      pathname === path ? `text-white ${bg}` : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      {/* Navigation */}
      <div className="w-full sm:w-[97%] mx-auto flex justify-center items-center mt-5 rounded px-2">
        <nav className="flex flex-wrap sm:space-x-16 justify-center gap-2 sm:gap-4 px-4 py-3 text-center bg-white shadow-md rounded-full w-full">
          <Link to="/" className={getLinkClass("/", "bg-blue-600")}>Dashboard</Link>
          <Link to="/boats" className={getLinkClass("/boats", "bg-green-500")}>Boats</Link>
          <Link to="/ghaats" className={getLinkClass("/ghaats", "bg-sky-500")}>Ghaats</Link>
          <Link to="/districts" className={getLinkClass("/districts", "bg-red-500")}>Districts</Link>
          <Link to="/life-jackets" className={getLinkClass("/life-jackets", "bg-orange-400")}>Life Jackets</Link>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="p-6">
  

<h2 className="flex items-center justify-center gap-2 sm:gap-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 text-center">
  <div className="bg-blue-100 p-2 sm:p-3 rounded-xl shadow-md">
    <MdMonitorHeart className="text-blue-600 text-xl sm:text-2xl lg:text-3xl" />
  </div>
  Operations Dashboard
</h2>
         <p className="text-gray-500 mb-6 sm:text-xl  text-center">
                Real-time monitoring and management of rescue operations across Uttar Pradesh
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon="🚤" title="Total Boats" value="1,247" change="+23 from last month" />
                <StatCard icon="🌊" title="Active Ghaats" value="156" change="+5 from last month" />
                <StatCard icon="📍" title="Districts Covered" value="75" change="100% from last month" />
                <StatCard icon="🦺" title="Life Jackets" value="3,741" change="+127 from last month" />
              </div>

              {/* Dashboard Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Recent Activity */}
                <div className="bg-white p-5 rounded-lg shadow border">
                  <h3 className="text-xl font-bold text-blue-700 mb-1">Recent Activity</h3>
                  <p className="text-sm text-gray-500 mb-4">Latest updates from across the state</p>

                  {[
                    {
                      icon: "🚤",
                      title: "New boat registered",
                      location: "Varanasi Ghaat",
                      status: "completed",
                      time: "2 hours ago",
                      color: "green",
                    },
                    {
                      icon: "📋",
                      title: "Inspection completed",
                      location: "Allahabad District",
                      status: "completed",
                      time: "4 hours ago",
                      color: "green",
                    },
                    {
                      icon: "🦺",
                      title: "Life jackets distributed",
                      location: "Lucknow Ghaat",
                      status: "completed",
                      time: "1 day ago",
                      color: "green",
                    },
                    {
                      icon: "🛠️",
                      title: "Boat maintenance",
                      location: "Agra District",
                      status: "pending",
                      time: "2 days ago",
                      color: "yellow",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-md mb-3"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs capitalize px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700`}
                        >
                          {item.status}
                        </span>
                        <p className="text-xs text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Districts */}
                <div className="bg-white p-5 rounded-lg shadow border">
                  <h3 className="text-xl font-bold text-purple-700 mb-1">Top Districts by Completion</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Data entry and registration progress
                  </p>

                  {[
                    { name: "Lucknow", color: "green", percent: 92, boats: 45 },
                    { name: "Varanasi", color: "blue", percent: 88, boats: 38 },
                    { name: "Allahabad", color: "purple", percent: 85, boats: 32 },
                    { name: "Agra", color: "orange", percent: 78, boats: 28 },
                    { name: "Kanpur", color: "pink", percent: 82, boats: 27 },
                  ].map((item, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center space-x-2">
                          <span className={`h-3 w-3 rounded-full bg-${item.color}-500`}></span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="font-semibold text-gray-700">{item.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                          className="h-2 rounded-full bg-black"
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">🚤 {item.boats} boats</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Alerts Section */}
              <div className="my-10">
  <div className="sm:w-[100%]  mx-auto bg-orange-50 border  text-orange-800 p-6 rounded-lg shadow-md ">

                  <h3 className="text-xl font-bold mb-8 flex items-center gap-4">
                    ⚠️ System Alerts
                  </h3>
                  <ul className="list-disc ml-6 space-y-6 text-sm">
                    <li>
                      <span className="font-semibold text-black">15 boats</span> pending annual inspection in <span className="font-semibold">Meerut district</span>.
                    </li>
                    <li className="text-red-600">
                      <span className="font-semibold text-black">Life jacket shortage</span> reported in 3 ghaats.
                    </li>
                    <li>
                      <span className="font-semibold text-black">New registration forms</span> available for submission.
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          }
        />
        <Route path="/boats" element={<Boats />}/>
        <Route path="/ghaats" element={<Ghaat/>} />
        <Route path="/districts" element={<District/>} />
        <Route path="/life-jackets" element={<LifeJacket/>} />
     
      </Routes>
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition-all border border-gray-100 min-h-[160px] flex flex-col justify-between">
    <div>
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-sm text-gray-500">{title}</h3>
    </div>
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-sm text-green-500 mt-1">{change}</p>
    </div>
  </div>
);

const Section = ({ title }) => (
  <main className="p-6">
    <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
    <p className="text-gray-500">This is the {title.toLowerCase()} page.</p>
  </main>
);

export default Dashboard;
