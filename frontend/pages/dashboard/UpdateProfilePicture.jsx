import { useState } from "react";

export default function UpdateProfilePicture() {
  const [preview, setPreview] = useState("/assets/blog/img1.jpeg");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select an image first.");

    // Fake upload logic for now
    console.log("Uploading file:", selectedFile);
    alert("Profile picture updated!");
  };

  return (
    <div className="bg-[#1a231a] p-6 rounded-lg text-white max-w-md">
      <h2 className="text-xl font-bold mb-6">Update Profile Picture</h2>

      <div className="mb-4">
        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 rounded-full object-cover border border-gray-500"
        />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 text-white"
      />

      <button
        onClick={handleUpload}
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
}
