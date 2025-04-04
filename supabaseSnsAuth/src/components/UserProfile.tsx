"use client";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function UserProfile() {
  const { users, handleLogout } = useAuth();

  return (
    <div>
      {users && (
        <>
          <div>
            <Image
              src={users.identities?.[0].identity_data?.avatar_url}
              width={20}
              height={20}
              alt={users.identities?.[0].provider || "사용자"}
            />
            <div>사용자</div>
          </div>
          <div>
            <p>{users.identities?.[0].identity_data?.name}</p>
            <p>{users?.email}</p>
          </div>
          <button onClick={handleLogout} className="">
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}
