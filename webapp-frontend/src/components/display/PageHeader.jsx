import React from 'react';

export default function PageHeader(props) {
  return (
    <div className="page-header">
      <h1>{props.title}</h1>
    </div>
  );
}