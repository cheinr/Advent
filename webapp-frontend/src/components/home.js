import React from 'react';

import MainFeed from './main-feed';

const Home = React.createClass({
   render: function() {
       return (
           <div className="Home">
               Welcome User!
               <MainFeed/>
           </div>
       )
   }
});

export default Home;