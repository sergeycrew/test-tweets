import {
  Avatar,
  ImageWrapper,
  Button,
  Image,
  Link,
  ItemWrapper,
  ListItem,
  TextFollower,
  TextTweets,
} from './TweetsItem.styled';
import logo from '../../images/Logo.png';
import PropTypes from 'prop-types';

import { useState } from 'react';

export const TweetsItem = ({ item, followings, isFollowing }) => {
  const { tweets, followers, user, avatar, id } = item;

  const [subscription, setSubscription] = useState(followings.includes(id));

  const onFollowBtnClick = () => {
    isFollowing(id, followers, subscription);
    setSubscription(pervState => !pervState);
  };

  return (
    <ListItem>
      <Link href="https://goit.global/ua/">
        <Image src={logo} alt="logo" />
      </Link>
      <ItemWrapper>
        <ImageWrapper>
          <Avatar src={avatar} alt={`${user} avatar`} />
        </ImageWrapper>
        <TextTweets>{tweets.toLocaleString('en-US')} tweets</TextTweets>
        <TextFollower>
          {followers.toLocaleString('en-US')} followers
        </TextFollower>
        <Button
          type="button"
          onClick={() => onFollowBtnClick(id)}
          style={{ backgroundColor: subscription ? '#5CD3A8' : '#EBD8FF' }}
        >
          {subscription ? 'following' : 'follow'}
        </Button>
      </ItemWrapper>
    </ListItem>
  );
};

TweetsItem.propTypes = {
  item: PropTypes.object,
  followings: PropTypes.array,
  isFollowing: PropTypes.func,
};
