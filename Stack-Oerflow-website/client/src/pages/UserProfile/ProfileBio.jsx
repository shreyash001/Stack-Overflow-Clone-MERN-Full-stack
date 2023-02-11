import React from 'react'
import './UserProfile.css'


const ProfileBio = ({currentProfile}) => {
  return (
    <div>
      <div>
        {
          currentProfile?.tags.legth !==0 ? (
            <>
              <h4>Tags Watched </h4>
              {
                currentProfile?.tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))
              }
            </>
          ) : (
            <p>0 Tags Watched</p>
          )
        }
      </div>
      
      <div>
        {
          currentProfile?.about ? (
            <>
              <h4>About</h4>
              <p>{currentProfile?.about}</p>
            </>
          ) : (
            <p>No Bio Found</p>
          )
        }
      </div>
      
    </div>
  )
}

export default ProfileBio
