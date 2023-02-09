import "./nav.css";
import { useEffect, useState } from "react";
import React from "react";

const Nav = () => {
  const [handleShow, sethandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        sethandleShow(true);
      } else sethandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt=""
      />

      <img
        className="nav__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB/CAMAAAANdsbrAAAAk1BMVEUAAAD///8REiQJChNjY2OlpaUODyKurq6EhIQKCyDp6en7+/s4ODixsbFHR0fZ2dlZWVkyMjIeHh7f39/Hx8fBwcGNjY3z8/MAABgAABu5ubknJyd9fX0AABVpaWmYmJgNDQ1PT09zc3M+PkZeX2cYGCkeIC4rKzY0ND9PT1pUVFtHR05xcnpnaG4sLTGJio9+fobRUcimAAADhklEQVRoge2aW3eiMBCAgS3IRbBVC1IRVG5yW/n/v25DabtaF5LRSbMPfOfUU33wMyFMZiZI0sTExA8zD/VIXa/VSA/nP6RchrbpyV94ph0uuUudmSnfYM4crtL5262z543jZKtD0g6Vk/TgjVnJVX7iYdXHpZwGPDrBn7xiW2csVnRvxGaV5QjT6lisWgvzRlqzWskNjGd9ZrfKFl7AegVo5RmWdQuxyjKWlumW/YuLpKUExe+YOFbIgnrnGUVrQ7U2inYB1S4wrFvmCPWJtUXQzqFWWcYIkOAVhbOmBGmf4FqM7OYA1x4QtIKWlKAbSFC4kAYrgSFwEgyGBPkaHUULvoNwqoMXqPYFRStBtThW6R8V7RhI2QV7SdCDVBi8QEeLcm33K5hVlld7BO0BasXZCkK4NkTQCtpvBWUXDlyLUfQBC68OjP12CSyBZNlDaQYK2uZBRXUHTrtGUOklKLsQtc0Dczi0FhFoUSH2/5yAcfdbBbh99COb9ogqZQ6RKGXIBWw5BkpecQVTQxmt8fcF027P4bSARYtvZbl50Y8KCAFdG3DQStSq3uJhpXfu11y01ECFHaI+oNRCWJXedygRAz9W9FDWMpd1LFEDFZcDTYlaluD06m+h5HI4mdsNW9qxMfZm20PdcVc8rGK2AqYkHf3yMla5yM9fsDaJcJpDH8xd5taU6aIcV+9DFXBU3bNWw/0jg9RtYAPuYtS2fs+w54Ftgg8JrrFMOwCpHXcBblj8G2/hMi7upbt4cJjXWAuXoYWiI43zEo8aRsD9ETYoYRPcDGJltGnE+MDOPYxkWgd+1rEmMzgeQRhO3nlah8tBxv7EvQwVDcCDFyhDBzXAZ2egDD2gN2kn7aSdtP+3luMm3zG00TtPXOH7WPzEhBB+CUFShNBptYv3hta/0xSDs1bLDMUgdC+7PEv9jeEbqX/irDWKOCnjKqnjMj6q9Sx282PjNkl6/7cavk9+OhlF96d1YyKfbDbGbudvfL/XanlSN3X5O2niNtOj89mZNZnnPzDJ2ilpqjIuqrqoyHfGcVVUZdk2ZdsmSdJs+mvr11UTJzH5pDzV0bk9t24Z6ZsHtGnQ1E3SFjWhLRIyqDYu67Ys2jJpTsbHksr8PM9OWZZrSqxpxmmX50p2v5V8I5nj7kXzyQx3c24YaaqRKfdTsmiVXkuWrdajvH9oKP3/HBF03/4B635McFTxt2IAAAAASUVORK5CYII="
        alt=""
      />
    </div>
  );
};

export default Nav;
