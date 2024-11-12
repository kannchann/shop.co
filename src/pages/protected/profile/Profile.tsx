import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../../services/UserServices";
import { avatar } from "../../../assets";

type ProfileData = {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  createdAt: string;
};

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        if (res.success) {
          setProfileData(res.data);
        } else {
          setError(res.message || "Failed to fetch profile.");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("An unexpected error occurred.");
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container flex items-center justify-center pt-10">
      <div className="grid w-1/3 items-center space-y-3 border border-black-700 px-8 py-6">
        <div className="flex items-center space-x-4">
          <div className="h-40 w-40 rounded-full border border-primary-200 shadow-sm">
            <img
              src={avatar}
              alt="profile picture"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="text-center font-satoshiBold text-2xl">
            {profileData.firstName} {profileData.lastName}
          </p>
        </div>
        <div className="space-y-2">
          <p>
            Full Name: {profileData.firstName} {profileData.lastName}
          </p>
          <p>
            Country Code:{" "}
            {profileData.countryCode ? profileData.phoneNumber : "not provided"}
          </p>
          <p>
            Phone Number:{" "}
            {profileData.phoneNumber ? profileData.phoneNumber : "not provided"}
          </p>
          <p>Joined On: {profileData.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
