import { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password changed:", {
      oldPassword,
      newPassword,
    });
    // Call backend API here
  };

  return (
    <div className="bg-[#1a231a] rounded-lg p-8 text-white">
      <h2 className="text-xl font-bold mb-6">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-2 text-sm font-medium">Old Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full bg-[#344434] text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full bg-[#344434] text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#344434] text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-600 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
