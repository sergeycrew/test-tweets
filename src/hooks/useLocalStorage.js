import { useState, useEffect } from 'react';

function useLocalStorage() {
  const [followings, setFollowings] = useState(() => {
    const savedFollowings = JSON.parse(localStorage.getItem('followings'));
    return savedFollowings ? savedFollowings : [];
  });

  useEffect(() => {
    localStorage.setItem('followings', JSON.stringify(followings));
  }, [followings]);

  return [followings, setFollowings];
}

export default useLocalStorage;
