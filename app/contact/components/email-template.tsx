import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  contactType: string;
  requestType: string;
  companyName?: string | null;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  contactType,
  requestType,
  companyName,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#0b1021",
        color: "#e6e9f5",
        padding: "32px",
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        lineHeight: 1.6,
      }}
    >
      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{
          maxWidth: 640,
          margin: "0 auto",
          backgroundColor: "#0f152b",
          border: "1px solid #1f2a4a",
          borderRadius: 16,
          boxShadow: "0 18px 45px rgba(6, 9, 20, 0.35)",
          overflow: "hidden",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "28px 32px", borderBottom: "1px solid #1f2a4a" }}>
              <p
                style={{
                  margin: "0 0 8px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: 12,
                  color: "#7b8db5",
                  fontWeight: 700,
                }}
              >
                New {requestType} inquiry
              </p>
              <h1
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#f9fafb",
                  letterSpacing: "-0.02em",
                }}
              >
                Hi team, you have a new message from {name}
              </h1>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "24px 32px", borderBottom: "1px solid #1f2a4a" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 9999,
                    background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                    color: "#f8fafc",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {contactType}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 9999,
                    background: "#111827",
                    color: "#cbd5f5",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    border: "1px solid #1f2a4a",
                  }}
                >
                  {requestType}
                </span>
              </div>

              <div
                style={{
                  background: "#0b1329",
                  border: "1px solid #1f2a4a",
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    color: "#8da2d6",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </p>
                <p style={{ margin: 0, color: "#e5e7f3", fontSize: 15 }}>{message}</p>
              </div>

              <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "8px 0", color: "#8da2d6", fontSize: 13, width: "35%" }}>
                      Sender
                    </td>
                    <td style={{ padding: "8px 0", color: "#e5e7f3", fontSize: 15, fontWeight: 600 }}>
                      {name}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px 0", color: "#8da2d6", fontSize: 13, width: "35%" }}>
                      Email
                    </td>
                    <td style={{ padding: "8px 0", color: "#e5e7f3", fontSize: 15, fontWeight: 600 }}>
                      {email}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px 0", color: "#8da2d6", fontSize: 13, width: "35%" }}>
                      Company
                    </td>
                    <td style={{ padding: "8px 0", color: "#e5e7f3", fontSize: 15, fontWeight: 600 }}>
                      {companyName?.trim() || "Not provided"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "20px 32px", background: "#0b1021" }}>
              <p style={{ margin: "0 0 8px", color: "#8da2d6", fontSize: 12, letterSpacing: "0.04em" }}>
                You can reply directly to this email to continue the conversation.
              </p>
              <p style={{ margin: 0, color: "#5b6b99", fontSize: 12 }}>
                Crafted for the Savaal team · {new Date().getFullYear()}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmailTemplate;