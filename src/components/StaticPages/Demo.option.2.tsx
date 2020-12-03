import { Button, Modal } from 'antd';
import React, { useState } from 'react';

export const DemoOption2 = () => {
  const [visible, setVisible] = useState(false);
  const showModal = e => {
    setVisible(true);
  };
  const handleCancel = e => {
    setVisible(false);
  };
  return (
    <div className="service-page">
      <div className="container">
        <div className="demo-content">
          <div className="demo-title-wrapper">
            <h2>Demo Option 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              nostrum est minima. Dicta, ipsam explicabo ipsum velit eligendi
              distinctio in!
            </p>
          </div>
          <div className="demo-button-play">
            <Button size="large" onClick={e => showModal(e)}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="Demo Option 2"
            visible={visible}
            onCancel={e => handleCancel(e)}
            footer={null}
          >
            <iframe
              title="Demo Option 2"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/FA8tl0fsYdI"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};
