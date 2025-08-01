import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/leaderboard")
      .then((res) => setLeaders(res.data));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Leaderboard
      </h1>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden text-left border-collapse">
          <thead className="bg-blue-700 text-white text-lg">
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">Rank</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Donations</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((u, i) => (
              <tr key={i} className={`transition duration-200 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`}>
                <td className="py-3 px-6 font-medium">{i + 1}</td>
                <td className="py-3 px-6">{u.name}</td>
                <td className="py-3 px-6 text-green-700 font-semibold">₹ {u.totalDonations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
