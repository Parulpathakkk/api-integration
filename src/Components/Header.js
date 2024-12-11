import flag from "../Assets/Button - Language.png";
import notification from "../Assets/Button - Notifications.png";
import people from "../Assets/Button - Contacts.png";
import user from "../Assets/Button.png";
import iconSearch from "../Assets/SVG (8).png";
function Header (){
    return (
<header className="flex justify-between items-center">
          <div className="w-[5cqw] md:w-[1.6cqw]">
            <img src={iconSearch} alt="icon-search" className="w-full h-full" />
          </div>
          <div className="flex items-center md:gap-[1cqw]">
            <img src={flag} alt="flag" className="w-[7cqw] md:w-[2.8cqw]" />
            <img
              src={notification}
              alt="notification"
              className="w-[7cqw] md:w-[2.8cqw]"
            />
            <img src={people} alt="people" className="w-[7cqw] md:w-[2.8cqw]" />
            <img src={user} alt="user" className="w-[7cqw] md:w-[2.8cqw]" />
          </div>
        </header>
    )
}

export default Header;