import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find user" />
      </div>

      <div className="userChat">
        <img
          src="https://slp-statics.astockcdn.net/static_assets/staging/22spring/audio/Card6_447567372_.jpg?width=580&format=webp"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
