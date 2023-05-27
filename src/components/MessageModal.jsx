"use client";
import { Button, Modal } from "antd";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function MessageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Send Message</button>
      <Modal
        title="Write Message To Me"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // closable={false}
        maskClosable={false}
        closeIcon={<GrFormClose />}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
