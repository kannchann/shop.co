import React, { useEffect, useState } from "react";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../services/UserServices";
import { avatar } from "../../../assets";
import Button from "../../../components/ui/Button";

type ProfileApiResponse = {
  data: {
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;
    createdAt: string; // Ensure createdAt is included
  };
  message: string;
  success: boolean;
};

const Profile = () => {
  const [profileData, setProfileData] = useState<
    ProfileApiResponse["data"] | null
  >(null);
  const [formData, setFormData] = useState<Partial<ProfileApiResponse["data"]>>(
    {},
  ); // Use Partial to allow for updates

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const res = await getUserProfile();
    if (res.success) {
      setProfileData(res.data);
      setFormData(res.data); // Initialize form data with fetched profile data
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Update form data
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData); // Debugging log
    if (formData) {
      const updatedData = {
        countryCode: formData.countryCode || "", // Ensure countryCode is a string
        firstName: formData.firstName || "", // Ensure firstName is a string
        lastName: formData.lastName || "", // Ensure lastName is a string
        phoneNumber: formData.phoneNumber || "", // Ensure phoneNumber is a string
      };
      console.log("Updating profile with data:", updatedData); // Debugging log
      const res = await updateUserProfile(updatedData); // Use updatedData with non-undefined values
      console.log("Update response:", res); // Debugging log
      if (res.success) {
        setProfileData((prev) => ({
          firstName: formData.firstName || prev?.firstName || "", // Ensure firstName is a string
          lastName: formData.lastName || prev?.lastName || "", // Ensure lastName is a string
          countryCode: formData.countryCode || prev?.countryCode || "", // Ensure countryCode is a string
          phoneNumber: formData.phoneNumber || prev?.phoneNumber || "", // Ensure phoneNumber is a string
          createdAt: prev?.createdAt || "", // Ensure createdAt is included
        })); // Update profile data with new values, ensuring types match
      } else {
        console.error("Failed to update profile:", res.message); // Log error message
      }
    }
  };

  return (
    <div className="container flex items-center justify-center pt-10">
      <div className="grid w-1/3 items-center space-y-3 border border-black-700 px-8 py-6">
        <div className="flex items-center space-x-4">
          {" "}
          {/* Added flex container */}
          <div className="h-40 w-40 rounded-full border border-primary-200 shadow-sm">
            <img
              src={avatar}
              alt="profile picture"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="text-center font-satoshiBold text-2xl">
            {profileData?.firstName} {profileData?.lastName}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ""}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode || ""}
            onChange={handleChange}
            placeholder="Country Code"
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded border border-gray-300 p-2"
          />
          <Button type="submit" buttonText="Update"></Button>
          {/* Changed button text to "Update" */}
        </form>
      </div>
    </div>
  );
};

export default Profile;
