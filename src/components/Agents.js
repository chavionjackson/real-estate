import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import House1 from "../images/home1.jpg";
import House2 from "../images/home2.jpg";
import axios from "axios";
import { fetchAgents } from "../actions";
import { connect } from "react-redux";

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
  flex-direction: row;
  padding: 1rem 0rem;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0.5rem;
  width: 40rem;
  ${"" /* min-height: 550px; */}
  ${'' /* height: 100%; */}

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 25rem;
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${"" /* padding: 2rem; */}
`;

const Agents = (props) => {
  useEffect(() => {
    props.fetchAgents();
  }, []);

  return (
    <Section>
      <Heading>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          // data-aos-once="true"
          data-aos-anchor-placement="center bottom"
        >
          View our Agents
        </h1>
      </Heading>
      <CardContainer>
        {props.agents.map((person) => (
          <InfoRow key={person.login.uuid}>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              // data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={person.picture.large} alt="home" />
              <h2>
                {person.name.first} {person.name.last}
              </h2>
              <li>Years Experience: {person.registered.age}</li>
              <li>Cell: {person.cell}</li>
              <li>E-Mail: {person.email}</li>
              {/* <InfoLink to="/homes">
                <Arrow />
              </InfoLink> */}
            </InfoWrap>
          </InfoRow>
        ))}
        {/* {props.agents.map((person) => (
          <InfoWrap key={person.login.uuid} className="card-container">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={person.picture.large}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {person.name.first} {person.name.last}
                    </h5>
                    <p className="card-text">
                    <li>Years Experience: {person.registered.age}</li>
                    <li>Cell: {person.cell}</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InfoWrap>
        ))} */}
        {/* {props.agents.map((person) => (
          <InfoWrap className="card-container">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <img
                src={person.picture.large}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {person.name.first} {person.name.last}
                </h5>
                <li className="card-text">
                  Years Experience: {person.registered.age}
                </li>
                <li>Cell: {person.cell}</li>
                <li>Service Area: {person.location.state}</li>
                <a href={person.email} className="btn btn-primary">
                  Contact {person.name.first}
                </a>
              </div>
            </div>
          </InfoWrap>
        ))} */}
        {/* <div className="card" style={{width: '18rem'}}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <InfoRow>
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
        </InfoRow> */}
      </CardContainer>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    agents: state.agents,
  };
};

export default connect(mapStateToProps, { fetchAgents })(Agents);
