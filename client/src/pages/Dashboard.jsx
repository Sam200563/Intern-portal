import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsed = JSON.parse(data);
      console.log("Parsed data:", parsed);
      setUser(parsed);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Intern Dashboard
      </h1>
      {user && (
        <div className="max-w-xl mx-auto bg-white shadow rounded-lg p-6 space-y-4">
          <p>
            <strong>Name:</strong>
            {user.name}
          </p>
          <p>
            <strong>Email:</strong>
            {user.email}
          </p>
          <p>
            <strong>Referralcode:</strong>
            {user.referralCode}
          </p>
          <p>
            <strong>Total Donations:</strong>
            {user.totalDonations}
          </p>
        </div>
      )}

      <div className="max-w-xl mx-auto mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-700">Rewards</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>T-shirt</li>
          <li>Certificate</li>
          <li>Bonus</li>
        </ul>
      </div>
      <div className="flex justify-center m-8">
        <button
          onClick={() => navigate("/leaderboard")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white  rounded hover:bg-blue-700"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
