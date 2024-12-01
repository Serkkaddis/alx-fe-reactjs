function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm  md:max-w-sm mx-auto my-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">

      {/*</div><div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-36 h-36 mx-auto"
        />*/}
        <img
  src="https://via.placeholder.com/150"
  alt="User"
  className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
/>
<h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out">John Doe</h1>

        
        {/*<h1 className="text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>*/}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
  Developer at Example Co. Loves to write code and explore new technologies.
</p>

      </div>
    );
  }
  
  export default UserProfile;
  