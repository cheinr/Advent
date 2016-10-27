import React from 'react';
import axios from 'axios';

export default function App(props) {
    axios.get("/api/users", function(response) {
	console.log(response);
    });
  return (
    <div className="Test">
    </div>
  );
}
