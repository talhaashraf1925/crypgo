import React from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, Button } from "antd";

export default function SignupModal({ show, onHide }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Signup values:", values);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      contentClassName="custom-modal-theme"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          style={{
            color: "var(--global-nav-links-color)",
          }}
        >
          {/* Full Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "#1B272E",
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "#1B272E",
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              minLength={6}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "#1B272E",
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
            />
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                background: "#1B272E",
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
            />
          </div>

          {/* Submit */}
          <div style={{ marginBottom: "1rem" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "var(--global-btn-color-bg)",
                color: "var(--global-btn2-color)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
