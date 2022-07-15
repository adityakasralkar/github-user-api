import React from 'react'

const DisplayUserComponent = ({userData}) => {
  return (
    <div className="userContainer">
      <div className="userProfile">
        <div className="imageContainer">
          <img src={userData?.avatar_url} alt="user pic" />
        </div>
        <div className="btnContainer">
          <button>
            <a href={userData?.url}>Profile</a>
          </button>
        </div>
      </div>
      <div className="userInfo">
        <div className="metaData">
          <span className="publicRepo">
            Public Repos :{userData?.public_repos}
          </span>
          <span className="gists">Public Gists :{userData?.public_gists}</span>
          <span className="followers">Followers :{userData?.followers}</span>
          <span className="following">Following :{userData?.following}</span>
        </div>
        <div className="userDetails">
          <p>Name:{userData?.name}</p>
          <p>Location:{userData?.location}</p>
          <p>Email:{userData?.email}</p>
          <p>Created Date:{userData?.created_at}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayUserComponent