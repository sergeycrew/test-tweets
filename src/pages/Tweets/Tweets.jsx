import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers, updateUser } from 'services/useAPI';
import {
  Button,
  Container,
  FilterWrapper,
  SelectWrapper,
  TweetsWrapper,
  Wrapper,
} from './Tweets.styled';
import { animateScroll } from 'react-scroll';

import useLocalStorage from 'hooks/useLocalStorage';
import { filterUsers } from 'utils/filterUsers';
import { filterValues } from 'utils/filterValues';
import { TweetsFilter } from 'components/Dropdown/Dropdown';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterValues.all);
  const [followings, setFollowings] = useLocalStorage();
  const [isLoading, setIsLoading] = useState(false);

  let filteredUsers = filterUsers(users, followings, selectedOption.value);

  const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 500,
      delay: 8,
      smooth: 'linear',
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const newUsers = await getUsers(page);

      if (page === 1) {
        setUsers(newUsers);
        setIsLoading(false);
        return;
      }

      if (newUsers.length === 0) {
        setDisabled(true);
        setIsLoading(false);
      }

      setUsers(pervState => [...pervState, ...newUsers]);
      setIsLoading(false);
    };
    fetchUsers();
  }, [page, disabled]);

  const updateUserFollowings = async (id, followers, subscription) => {
    setUsers(stateUsers =>
      stateUsers.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !subscription
            ? (user.followers += 1)
            : (user.followers -= 1),
        };
      })
    );
    if (!subscription) {
      setFollowings(prevState => [...prevState, id]);
      await updateUser(id, (followers += 1));
    } else {
      setFollowings(prevState => prevState.filter(el => el !== id));
      await updateUser(id, (followers -= 1));
    }
  };

  const handleLoadMore = () => {
    setPage(pervpage => pervpage + 1);
    scrollOnMoreButton();
  };

  return (
    <Container>
      <FilterWrapper>
        <Button to="/">Go Back</Button>

        <SelectWrapper>
          <TweetsFilter
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </SelectWrapper>
      </FilterWrapper>
      <TweetsWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <TweetsList
            items={filteredUsers}
            followings={followings}
            isFollowing={updateUserFollowings}
          />
        )}
      </TweetsWrapper>

      <Wrapper>
        <Button type="button" onClick={handleLoadMore} disabled={disabled}>
          Load More
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Tweets;
