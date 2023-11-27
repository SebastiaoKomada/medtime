/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import "./styles.css";

interface ButtonItem {
  imageUrl: string;
}

const Profile: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonItem[]>([]);

  const handleAddButton = () => {
    if (buttons.length < 5) {
      setButtons((antButtons) => [
        ...antButtons,
        {
          imageUrl: "profile.png",
        },
      ]);
    }
  };

  return (
    <div className="container__profile">
      <div className="Choice text-center">
        <h1 className="title text-5xl font-bold mb-4 mt-10 text-white">
          Quem é o paciente?
        </h1>

        <Row className="image-container">
          {buttons.map((button, index) => (
            <img
              key={index}
              className="btn-img__profile mr-5 mt-5"
              src={button.imageUrl}
              alt={`Profile ${index}`}
            />
          ))}
          {buttons.length < 5 && (
            <Link to="/addProfile">
              {" "}
              <Button
                className="btn-plus__profile bg-white shadow-lg mx-auto mt-5"
                onClick={handleAddButton}
              >
                +
              </Button>
            </Link>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Profile;
