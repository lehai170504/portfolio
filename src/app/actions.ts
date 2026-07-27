"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Placeholder logic for server action
  console.log("Contact form submission received:", { name, email, message });
  
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for reaching out! I will get back to you soon."
  };
}
