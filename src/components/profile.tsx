import React from "react";
import ProfileSidebar from "./profileSidebar";
import ProfileMain from "./profileMain";

const Profile: React.FC = () => {
  return (
    <div className="h-screen flex" id="/">
      <ProfileSidebar />
      <ProfileMain />
    </div>
  );
};

export default Profile;
