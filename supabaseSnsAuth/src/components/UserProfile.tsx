'use client';

import useAuth from '@/hooks/useAuth';

export default function UserProfile() {
  const { users, handleLogout } = useAuth();

  return (
    <div>
      {users && (
        <>
          <div>
            <div>
              <img src={users?.identities?.[0]?.identity_data?.avatar_url} alt="사용자" />
              <div>사용자</div>
            </div>
            <div>
              <p>{users.identities?.[0]?.identity_data?.name}</p>
              <p>{users?.email}</p>
            </div>
            <div onClick={handleLogout}>로그아웃</div>
          </div>
        </>
      )}
    </div>
  );
}
