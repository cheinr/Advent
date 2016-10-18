import React from 'react';

export default function Thumbnail(props) {
  return (
    <a href={props.pictureUrl} className="thumbnail">
      <img src={props.pictureUrl} alt={props.altText} />
    </a>
  );
}
