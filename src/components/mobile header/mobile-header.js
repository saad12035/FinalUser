import React, {useState} from 'react';
import {Drawer, Image, Menu} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import "./mobile-header.styles.css";
import {HeaderOptions} from "../../util/constants";

export const MobileHeaderComponent = () => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);

  const onClose = () => {
    setDrawerVisibility(false);
  };

  return (
      <div className="main-header-container">
        <div className="main-header">
          <div className="logo">
            <Image
                preview={false}
                src="https://d38vm879w3ktuo.cloudfront.net/sites/default/files/logo_final-01.png"
                width={150}
            />
          </div>
          <div className="side-menu">
            <div className="hamburger">
              <MenuOutlined onClick={() => {
                setDrawerVisibility(true);
              }} style={{fontSize: "25px"}}/>
            </div>
          </div>
        </div>
        <Drawer
            title="TRU Careers"
            placement="right"
            closable
            onClose={onClose}
            visible={isDrawerVisible}
            key="right"
        >
          <Menu theme="light" mode="vertical" className="headerTwoText">
            {HeaderOptions.map((element) => {
              return (
                  <Menu.Item>{element.name}</Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </div>
  );
};

