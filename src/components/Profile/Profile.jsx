import React, { useState } from "react";
import style from "./Profile.module.css";
import profileMainPhoto from "../../assets/photo3.jpg";
import {
  ProfileStatusWithHooks,
  ParamsTableReduxForm,
  LoadingModal,
  StartChatButton,
  StartChatIcon,
  InviteToVideoButton,
  InviteToVideoIcon,
  WriteLetterIcon
} from "..";

const Profile = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <LoadingModal />;
  }

  const onMainPhotoSelecetd = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = async (formData) => {
    await props.saveProfile(formData);
    setEditMode(false);
  };
  return (
    <div className="app_row">
      <div className={style.grid_container}>
        <div className={style.profile_main_photo}>
          <img src={props.profile.photos.large || profileMainPhoto} alt="" />

          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelecetd} />
          )}
        </div>
        <div className={style.profile_main_info}>
          <div className={style.profile_name}>
            <h3> {props.profile.fullName} </h3>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <span className={style.id_girl}> ID: {props.profile.userId} </span>
          </div>
          <div className={style.main_params}>
            {editMode ? (
              <ParamsTableReduxForm
                initialValues={props.profile}
                profile={props.profile}
                onSubmit={onSubmit}
              />
            ) : (
              <ParamsTable
                profile={props.profile}
                isOwner={props.isOwner}
                goToEditMode={() => {
                  setEditMode(true);
                }}
              />
            )}
          </div>
        </div>
        <div className={style.profile_add_info}>
          <div className={style.action_btns}>
            <InviteToVideoIcon />
            <StartChatIcon />
            <WriteLetterIcon />
            <a href="#0" className={style.btn_add_to_fav}>
              Add to Favorites
            </a>
            <a href="#0" className={style.btn_like_her}>
              Like Her!
            </a>
          </div>
          <div className={style.add_info}>
            <table className={style.params_table}>
              <tbody>
                <tr>
                  <td>Religion</td>
                  <td>
                    <a href="#0">Christian</a>
                  </td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>
                    <a href="#0">B.A. Student</a>
                  </td>
                </tr>
                <tr>
                  <td>Field of work</td>
                  <td>
                    <a href="#0">Medical/Health</a>
                  </td>
                </tr>
                <tr>
                  <td>Occupation</td>
                  <td>
                    <a href="#0">Student</a>
                  </td>
                </tr>
                <tr>
                  <td> Marital status</td>
                  <td>
                    <a href="#0">Single and No children</a>
                  </td>
                </tr>
                <tr>
                  <td>Want to have children?</td>
                  <td>
                    <a href="#0">will decide with my husband</a>
                  </td>
                </tr>
                <tr>
                  <td>My Contacts</td>
                  <td>
                    <ul>
                      {Object.keys(props.profile.contacts).map((key) => {
                        return (
                          <Contact
                            contactTitle={key}
                            contactValue={props.profile.contacts[key]}
                            key={key}
                          />
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={style.app_btn_wrap}>
        <StartChatButton />
        <InviteToVideoButton />
        <a href="#0" className={style.btn_present}>
          Send a Present
        </a>
        <a href="#0" className={style.btn_send_letter}>
          Send a FREE Letter
        </a>
      </div>
    </div>
  );
};
const ParamsTable = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <table className={style.params_table}>
        <tbody>
          <tr>
            <td>Birth Date</td>
            <td className={style.value}>10.09.1990 </td>
          </tr>
          <tr>
            <td>Height</td>
            <td className={style.value}>160 cm</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td className={style.value}>50 kg</td>
          </tr>
          <tr>
            <td>Eyes</td>
            <td className={style.value}>Green</td>
          </tr>
          <tr>
            <td>Hair</td>
            <td className={style.value}>Black</td>
          </tr>
          <tr>
            <td>Build</td>
            <td className={style.value}>Slim</td>
          </tr>
          <tr>
            <td>Looking for a JOB</td>
            <td className={style.value}>
              {profile.lookingForAJob ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td>Skills</td>
            <td className={style.value}>{profile.lookingForAJobDescription}</td>
          </tr>
          <tr>
            <td>About Me</td>
            <td className={style.value}> {profile.aboutMe}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <li>
        {contactTitle} <span>: {contactValue}</span>
      </li>
    </div>
  );
};

export default Profile;
