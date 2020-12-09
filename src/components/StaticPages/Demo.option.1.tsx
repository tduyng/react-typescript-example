import { PlayCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';

export const DemoOption1 = () => {
  const [visible, setVisible] = useState(false);
  const showModal = e => {
    setVisible(true);
  };
  const handleCancel = e => {
    setVisible(false);
  };
  return (
    <div className="main-body-section ">
      <div className="container-fluid">
        <div className="demo-content">
          <div className="block-title">
            <h2>Demo Option 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              nostrum est minima. Dicta, ipsam explicabo ipsum velit eligendi
              distinctio in!
            </p>
          </div>
          <div className="demo-button-play">
            <Button size="large" onClick={e => showModal(e)}>
              <PlayCircleOutlined />
            </Button>
          </div>
          <Modal
            title="Demo Option 1"
            visible={visible}
            onCancel={e => handleCancel(e)}
            footer={null}
          >
            <iframe
              title="Demo Option 1"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/QpcP30GY2-8"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};
