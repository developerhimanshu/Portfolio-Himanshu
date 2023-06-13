import React from "react";
import ProfileSidebar from "./profileSidebar";
import ProfileMain from "./profileMain";

const Profile: React.FC = () => {
  return (
    <div
      className="lg:h-screen h-auto relative  items-center lg:flex lg:items-start"
      id="/"
    >
      <ProfileSidebar />
      <ProfileMain />
    </div>
  );
};

export default Profile;
