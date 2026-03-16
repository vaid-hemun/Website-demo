import { useState } from "react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    city: "",
    enquiryType: "",
    product: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://website-demo-eliu.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert("Enquiry submitted successfully!");
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};
  return (
    <div className="min-h-screen bg-gray-50 py-16" id="enquiry">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <h2 className="text-2xl font-semibold mb-8">
          Request Product / Service Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="enquiry">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp (Optional)"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City / Country *"
            className="border rounded-lg p-3 w-full"
            onChange={handleChange}
            required
          />

          {/* Enquiry Type */}
          <select
            name="enquiryType"
            className="border rounded-lg p-3 w-full"
            onChange={handleChange}
            required
          >
            <option value="">Select Enquiry Type *</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
          </select>

          {/* Product Dropdown */}
          {formData.enquiryType === "Product" && (
            <select
              name="product"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Product *</option>
              <option>Conveyor Belts</option>
              <option>Rubber Sheets and Accessories</option>
            </select>
          )}

          {/* Service Dropdown */}
          {formData.enquiryType === "Service" && (
            <select
              name="service"
              className="border rounded-lg p-3 w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Service *</option>
              <option>Installation & Commissioning</option>
              <option>Belt Splicing</option>
              <option>Maintenance & Inspection</option>
              <option>Repair & Reconditioning</option>
              <option>Technical Consultation</option>
            </select>
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message *"
            rows="5"
            className="border rounded-lg p-3 w-full"
            onChange={handleChange}
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </div>
  );
}