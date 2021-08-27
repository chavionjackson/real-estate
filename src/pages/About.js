import React from "react";
import styled from "styled-components";
import realtors from "../images/realtors.jpg";
import Button from "../components/Button";

const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: felx-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
`;

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              // data-aos-once="true"
              data-aos-anchor-placements="center bottom"
            >
              <h1 style={{fontStyle: 'italic'}}>CHVY Group</h1>
              <p>
                The CHVY Group is a professional real estate brokerage serving
                buyers and sellers of luxury property. The brokerage is
                comprised of a close group of talented realtors. With more than
                $1B+ in total sales and $300 million in active listings, the
                firm closes over one hundred deals annually and has brokered
                many of the City’s largest residential sales, including numerous
                record-breaking transactions. With unrivaled experience and
                market knowledge, The CHVY Group is the preeminent brokerage in
                the country, while doing tremendous business throughout The US,
                and beyond.
              </p>
              <Button to="/sellers">Learn More</Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={realtors}
              data-aos="fade-left"
              data-aos-duration="1200"
              // data-aos-once="true"
              data-aos-anchor-placements="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default AboutUs;
