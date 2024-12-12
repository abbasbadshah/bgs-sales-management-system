import React, { useState } from "react";
import { Layout } from "../../../../components/layout";
import { Input, Button } from "../../../../components/ui";

export const AddStores = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    storeEmail: "",
    storePhone: "",
    storeAddress: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.storeName.trim()) {
      newErrors.storeName = "Store name is required";
    } else if (formData.storeName.trim().length < 3) {
      newErrors.storeName = "Store name must be at least 3 characters";
    }

    if (!formData.storeEmail.trim()) {
      newErrors.storeEmail = "Store email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.storeEmail)
    ) {
      newErrors.storeEmail = "Invalid email address";
    }

    if (!formData.storePhone.trim()) {
      newErrors.storePhone = "Phone number is required";
    }

    if (formData.storeAddress.trim().length > 500) {
      newErrors.storeAddress = "Address cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Implement your store creation logic here
    }
  };

  return (
    <Layout pageTitle="Add Store" pageHeading="Add Store">
      <section>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              type="text"
              name="storeName"
              label="Store Name"
              placeholder="Enter store name"
              required
              value={formData.storeName}
              onChange={handleChange}
              error={errors.storeName}
            />

            <Input
              type="email"
              name="storeEmail"
              label="Store Email"
              placeholder="Enter store email"
              required
              value={formData.storeEmail}
              onChange={handleChange}
              error={errors.storeEmail}
            />

            <Input
              type="tel"
              name="storePhone"
              label="Store Phone"
              placeholder="Enter store phone number"
              required
              value={formData.storePhone}
              onChange={handleChange}
              error={errors.storePhone}
            />

            <Input
              type="textarea"
              name="storeAddress"
              label="Store Address"
              placeholder="Address"
              value={formData.storeAddress}
              onChange={handleChange}
              rows={1}
              error={errors.storeAddress}
            />
          </div>

          <div className="mt-6">
            <Button
              variant="primary"
              minWidth="150px"
              minHeight="56px"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </Layout>
  );
};
