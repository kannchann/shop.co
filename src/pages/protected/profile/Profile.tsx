import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../../services/UserServices";

type ProfileApiResponse = {
  data: {
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;
    createdAt: string;
  };
  message: string;
  success: boolean;
};

const Profile = () => {
  const [profileData, setProfileData] = useState<
    ProfileApiResponse["data"] | null
  >(null);
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    // setIsLoading(true);
    const res = await getUserProfile();
    if (res.success) {
      setProfileData(res.data);
    }
  };
  return (
    <div className="container pt-10">
      <div className="h-40 w-40 rounded-full bg-black-700"></div>
      <p>{profileData?.firstName}</p>
    </div>
  );
};

export default Profile;
