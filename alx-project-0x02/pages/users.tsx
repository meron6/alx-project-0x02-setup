// pages/users.tsx
import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </main>
    </div>
  );
};

// ✅ Static data fetching
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;

