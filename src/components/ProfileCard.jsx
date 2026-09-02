import profileImage from "../assets/Profile.jpeg";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="glass-card profile-card">
      <div className="profile-content">
        <div className="avatar-wrapper">
          <div className="avatar-frame">
            <div className="avatar-clip">
              <img
                src={profileImage}
                alt="Zhafaat Rahimi Zainal"
                className="avatar-img"
              />
            </div>
          </div>
          <span className="availability-dot" title="Available for hire"></span>
        </div>

        <h2 className="profile-name">Zhafaat Rahimi Zainal, S.Si</h2>
        <p className="profile-role">Full-Stack Developer & UI/UX Enthusiast</p>
        <span className="profile-email">zhafaat.rahimi@icloud.com</span>
      </div>

      <div className="profile-footer">
        <span className="footer-tag">
          <span className="status-indicator"></span> Web Maker
        </span>
        <span className="availability-badge">Available Q3/Q4</span>
      </div>
    </div>
  );
}

export default ProfileCard;
