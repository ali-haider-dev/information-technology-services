"use server";

export const SendEmail = async (prevState, formdata) => {
  const errors = {
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: "",
    projectDetails: "",
  };

  const Fname = formdata.get("firstName");
  const Lname = formdata.get("lastName");
  const email = formdata.get("email");
  const organization = formdata.get("organization");
  const service = formdata.get("service");
  const projectDetails = formdata.get("projectDetails");

  if (!Fname) errors.firstName = "First Name is Required*";
  if (!Lname) errors.lastName = "Last Name is Required*";
  if (!email) errors.email = "Email is Required*";
  if (!organization) errors.organization = "Organization name is Required*";
  if (!service) errors.service = "Service is Required*";
  if (!projectDetails) errors.projectDetails = "Project Details are Required*";

  // if any field has error text
  if (Object.values(errors).some((msg) => msg !== "")) {
    return { success: false, errors };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // must be a verified sender
        to: "alihaider061297@gmail.com", // change this to your receiving email
        subject: `📩 New mail from ${Fname} ${Lname} for ${service}`,
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #4CAF50; border-bottom: 2px solid #eee; padding-bottom: 8px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">👤 First Name:</td>
          <td style="padding: 8px;">${Fname}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">👤 Last Name:</td>
          <td style="padding: 8px;">${Lname}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">📧 Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">🏢 Organization:</td>
          <td style="padding: 8px;">${organization}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">🛠 Service:</td>
          <td style="padding: 8px;">${service}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">📄 Project Details:</td>
          <td style="padding: 8px;">${projectDetails}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 14px; color: #555;">
        🚀 This message was sent from your website contact form.
      </p>
    </div>
  `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend API error:", err);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server error" };
  }
};
