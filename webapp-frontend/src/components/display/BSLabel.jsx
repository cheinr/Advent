import React from 'react';

const propTypes = {
  text: React.PropTypes.string,
};

export default function BSLabel(props) {
  return (
    <div className="row">
      <div className="col-xs-3">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}

BSLabel.propTypes = propTypes;
