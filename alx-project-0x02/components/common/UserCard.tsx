// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
