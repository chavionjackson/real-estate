import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import House1 from "../images/home1.jpg";
import House2 from "../images/home2.jpg";
import sanDiego from "../images/sanDiego.jpg";
import scotts from "../images/scotts.jpg";
import port from "../images/port.jpg";
import wash from "../images/wash.jpg";
import texas from "../images/texas.jpg";
import mil from "../images/mil.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1rem 0rem;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 38rem;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 15rem;
  }
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            View our newest Homes
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={House1} alt="home" />
            <h2>8 Bed 10 Bath House in Venice, California</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={House2}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>2 Bed 2 Bath House in Miami, Florida</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={sanDiego} alt="home" />
            <h2>4 Bed 6 Bath House in San Diego, California</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={scotts}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>3 Bed 2 Bath House in Scottsdale, Arizona</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={port} alt="home" />
            <h2>4 Bed 4 Bath House in Portland, Oregon</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={wash}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>3 Bed 5 Bath House in Bellevue, Washington</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={texas} alt="home" />
            <h2>8 Bed 5 Bath House in Austin, Texas</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            // data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={mil}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>7 Bed 5 Bath House in Milwaukee, Wisconsin</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
