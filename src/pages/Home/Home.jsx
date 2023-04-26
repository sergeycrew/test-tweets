import { BtnSpan, GoLinkBtn, Wrapper } from './Home.styled';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <MDBContainer
      fluid
      className="p-4"
      style={{
        marginTop: 110,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
          style={{
            marginLeft: 100,
            width: 400,
          }}
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{
              fontSize: 70,
            }}
          >
            Your Personal
            <br />
            <span className="text-primary">Tweets</span>
          </h1>
        </MDBCol>
      </MDBRow>
      <Wrapper>
        <GoLinkBtn to="/tweets">
          <BtnSpan>Let's Go</BtnSpan>
        </GoLinkBtn>
      </Wrapper>
    </MDBContainer>
  );
};

export default Home;
