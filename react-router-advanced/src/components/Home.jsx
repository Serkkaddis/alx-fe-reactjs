import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
    <div>
        <h1>Home Page</h1>;
    <nav>
    <ul>
          <li><Link to="./components/Profile">Go to Profile</Link></li>
          <li><Link to="./components/ProfileDetails">Profile Details</Link></li>
          <li><Link to="./components/ProfileSettings">Profile Settings</Link></li>
          <li><Link to="./components/BlogPost">Blog Post 1</Link></li>
        </ul>
    </nav>
    </div>
    
    );

  };
  
  export default Home;
  