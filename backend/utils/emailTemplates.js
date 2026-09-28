const libraryEmailTemplate = ({
  title = "Welcome to Edwin's Library",
  greeting = "",
  message = "",
  details = [],
  buttonText = "Login to Edwin's Library",
  buttonUrl = "http://localhost:5173/auth"
}) => {

  const detailsHTML = details.length
    ? `
      <div style="
        background:#0a0a0a;
        border:1px solid #9be931;
        padding:20px;
        border-radius:10px;
        margin-top:20px;
      ">
        ${details.map(detail => `
          <p style="margin:10px 0;color:#ffffff;">
            <strong>${detail.label}:</strong> ${detail.value}
          </p>
        `).join("")}
      </div>
    `
    : "";

  return `
  <div style="
    font-family:Arial,sans-serif;
    background:#000000;
    padding:40px;
    color:#ffffff;
  ">

    <div style="
      max-width:600px;
      background:#111111;
      margin:auto;
      border-radius:12px;
      overflow:hidden;
      border:1px solid #9be931;
      box-shadow:0 0 20px rgba(155,233,49,0.3);
    ">

      <div style="
        background:#9be931;
        color:#000000;
        padding:25px;
        text-align:center;
      ">
        <h1 style="margin:0;">
          Edwin's Library
        </h1>
      </div>

      <div style="padding:30px;">

        <h2 style="color:#ffffff;">
          ${greeting}
        </h2>

        <p style="
          color:#ffffff;
          line-height:1.7;
        ">
          ${message}
        </p>

        ${detailsHTML}

        <div style="
          text-align:center;
          margin-top:30px;
        ">
          <a
            href="${buttonUrl}"
            style="
              background:#00ff88;
              color:#000000;
              padding:12px 24px;
              border-radius:8px;
              text-decoration:none;
              display:inline-block;
              font-weight:bold;
            "
          >
            ${buttonText}
          </a>
        </div>

      </div>

      <div style="
        background:#0a0a0a;
        text-align:center;
        padding:15px;
        font-size:14px;
        color:#9ca3af;
        border-top:1px solid #9be931;
      ">
        Edwin's Library Management System
      </div>

    </div>
  </div>
  `;
};

module.exports = libraryEmailTemplate;
