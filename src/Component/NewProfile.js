import CompleteProfile from '../Pages/CompleteProfile';
import './NewProfile.css';

const NewProfile = (props) => {
  const saveProfileDataHandler = (enterProfileData) => {
    const profileData = {
      ...enterProfileData,
      id: Math.random().toString()
    };
    props.onAddProfile(profileData);
  };

  return (
    <div className='new-profile'>
      <CompleteProfile onSaveProfileData={saveProfileDataHandler} />
    </div>
  );
};

export default NewProfile;