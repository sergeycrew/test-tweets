import { StyledLoader } from './Loader.styled';

import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#471CA9"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </StyledLoader>
  );
};
