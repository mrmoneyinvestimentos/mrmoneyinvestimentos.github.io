import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export const MyStyle = styled.div`
  .event-img {
    width: 300px;
    margin: 0 auto;
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
    margin: 16px 0 24px;
  }

  .date,
  .description {
    color: #e0e0e0;
    font-size: 1.1rem;
  }
`;

function CardEvent({ imgEvent, title, date, description, btnLink, btnText }) {
  return (
    <MyStyle>
      <img src={imgEvent} alt="" className="event-img" />
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="description">{description}</p>
      {btnLink ? (
        <Button className="text-sm mt-16" btnLink={btnLink}>
          {btnText}
        </Button>
      ) : null}
    </MyStyle>
  );
}

export default CardEvent;
