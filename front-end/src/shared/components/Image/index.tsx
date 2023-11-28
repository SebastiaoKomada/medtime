/* eslint-disable no-unused-vars */
import React, { useRef, useState, ChangeEvent } from "react";
import { Image, Space } from "antd";
import "./styles.css";

const App: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>("profile.png");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageSrc = e.target?.result as string;
        setImageSrc(newImageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    inputFileRef.current?.click();
  };

  return (
    <Space direction="vertical" align="center">
      <div className="img-profile">
        <div className="img-container__image">
          <img src={imageSrc} />
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputFileRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <a href="#" className="link-alterar" onClick={openFileInput}>
        Alterar
      </a>
    </Space>
  );
};

export default App;
