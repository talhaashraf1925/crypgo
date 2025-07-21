import { Modal } from "react-bootstrap";
import { Form, Input, Button } from "antd";

export default function LoginModal({ show, onHide }) {
  const [form] = Form.useForm();

   const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log("Login values:", values);
    handleSubmit && handleSubmit(values);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      contentClassName="custom-modal-theme"
      className="border-0 py-5"
    >
      <Modal.Header
        closeButton
        className="border-0"
        style={{ background: "#1B272E" }}
      >
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
          onSubmit={onSubmit}
          style={{ color: "var(--global-nav-links-color)" }}
        >
          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
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
              required
              minLength={6}
              placeholder="Enter your password"
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
            Login
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
