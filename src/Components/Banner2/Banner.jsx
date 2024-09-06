import React, { useState } from 'react';
import './Banner.scss';
import { Button, Input, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ArrowRightOutlined } from '@ant-design/icons';
import TimeSlide from './TimeLine';
import { TRAVEL_PAGE_LOCATIONS } from './data';
import Carousel from './Carousel';
import { useSpring, animated } from '@react-spring/web';
import { NavBar2 } from '../NavBar2/NavBar';

import imageShape from "../../assets/shape-bottom-image.svg"

export const Banner2 = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [locations, setLocations] = useState(TRAVEL_PAGE_LOCATIONS);

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      delay: 200
    }),
    []
  );

  const onActiveChange = (activeItem) => {
    setSelectedSlide(activeItem);
    api.start({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 20 }
    });
  };

  return (
    <div className="travel-container" style={{ backgroundImage: `url(${locations[selectedSlide].background})` }}>
      <Layout className="layout">
        <NavBar2 />
        <Content className="content">
          <div className="left">
            <TimeSlide total={locations.length} active={selectedSlide} />
          </div>
          <div className="center">
            <animated.div style={props}>
              <h1>{locations[selectedSlide].name}</h1>
            </animated.div>

            <animated.div style={props}>
              <h3>{locations[selectedSlide].description}</h3>
            </animated.div>

            <div>
              <Button className="explore-btn btn secondary" type="primary" value="Explore">
                Explore
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
          <div className="right">
            <Carousel data={locations.map((loc) => ({ id: loc.id, link: loc.thumbnail, name: loc.name }))} onActiveChange={onActiveChange} />
          </div>

          <img src={imageShape} className="image-shape" alt="" />
        </Content>
      </Layout>
    </div>
  );
};
