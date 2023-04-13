import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
      </div>
      <div className="dashboard-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis mauris eget ipsum convallis venenatis. Nulla facilisi. Sed sem diam, convallis et varius in, aliquet in est. Fusce congue enim vel sapien sodales, ac hendrerit enim hendrerit. Nam porta lorem nunc, ac laoreet nulla euismod in. Aliquam vitae tincidunt quam. Suspendisse a suscipit magna. Morbi auctor sapien in rutrum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ultrices est sed eleifend lacinia.</p>
        <p>Proin euismod aliquam mauris, vitae interdum sapien feugiat non. Nulla semper, justo a varius vestibulum, felis nulla mattis massa, in feugiat velit lectus vel risus. In non sem ut ipsum aliquam pharetra. Morbi tincidunt sed libero eu lobortis. Integer rhoncus arcu ac nulla vulputate tincidunt. Morbi rhoncus mauris vel eros tincidunt scelerisque. Sed interdum velit id mi blandit, id congue nulla cursus.</p>
      </div>
    </div>
  );
};

export default Dashboard;