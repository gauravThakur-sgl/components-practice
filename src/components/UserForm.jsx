import { useState } from "react";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
// import Select from "./ui/Select";
import ToggleSwitch from "./ui/ToggleSwitch";
import { Accordion } from "./ui/Accordian";
import ToolTip from "./ui/ToolTip";
import Button from "./ui/Button";
import PopOver from "./ui/PopOver";
// import { Tabs } from "./ui/Tabs";
// import Badge from "./ui/Badge";
// import { Progress } from "./ui/ProgressBar";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    bio: "",
    role: "",
    newsletter: false,
    termsAccepted: false,
    notificationPreference: "",
  });
  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-2 max-w-[1000px] mx-auto border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Form</h2>
      <div className="grid grid-cols-2 justify-start items-center gap-4">
        <div className="flex items-center gap-2 w-full">
          <span>Name: </span>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="accent-blue-500 mx-6"
          />
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Email: </p>
          <Input
            type="email"
            name="last name"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="mx-[89px]"
          />
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Password: </p>
          <Input
            type="password"
            name="name"
            placeholder="**********"
            value={formData.password}
            onChange={handleInputChange}
            className="accent-blue-500"
          />
        </div>
        <div className="flex justify-start items-center gap-2">
          <p>Confirm Password: </p>
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <div className="flex items-center gap-2 mt-2">
          <span>Enter your BirthDate: </span>
          <Input
            type="date"
            name="date"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
        </div>
        <TextArea
          name="bio"
          title="Your Bio"
          placeholder="Tell us about YourSelf"
          value={formData.bio}
          onChange={handleInputChange}
        />
        {/* <Select
          name="role"
          options={[
            { value: 'user', label: 'Regular User' },
            { value: 'admin', label: 'Administrator' },
          ]}
          value={formData.role}
          onChange={handleInputChange}
        /> */}
        <div className="flex items-center gap-2">
          <ToggleSwitch
            name="newsletter"
            id="toggle"
            checked={formData.newsletter}
            onChange={handleInputChange}
          />
          <span>Subscribe to newsletter</span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="checkbox"
            name="termsAccepted"
            id="7"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            labelData="I accept the terms and conditions"
            className="cursor-pointer"
          />
        </div>
        <div>
          <p className="mb-2">Notification Preference:</p>
          <div className="flex gap-4">
            <Input
              type="radio"
              name="notificationPreference"
              value="email"
              checked={formData.notificationPreference === "email"}
              onChange={handleInputChange}
              labelData="Email"
              id="email"
            />
            <Input
              type="radio"
              name="notificationPreference"
              value="sms"
              checked={formData.notificationPreference === "sms"}
              onChange={handleInputChange}
              labelData="SMS"
              id="sms"
            />
          </div>
        </div>
        <Accordion
          items={[
            {
              title: "Privacy Policy",
              content:
                "Our privacy policy details how we handle your personal information...",
            },
            {
              title: "Terms of Service",
              content:
                "By using our service, you agree to the following terms...",
            },
          ]}
          className="bg-white shadow-none"
        />
        <div className="flex justify-between items-center">
          <ToolTip>
            <Button
              title="Register"
              variant="default"
              size="md"
              type="submit"
              className="w-full"
            />
          </ToolTip>
          <PopOver
            trigger={<Button title="Need Help?" variant="outline" size="sm" />}
            content={
              <div>
                <h3 className="font-bold mb-2">Registration Help</h3>
                <p>
                  If you need assistance with registration, please contact our
                  support team.
                </p>
              </div>
            }
          />
        </div>
        {/* <Tabs
          tabs={[
            {
              label: "Personal Info",
              content: "Fill in your personal details accurately.",
            },
            {
              label: "Account Setup",
              content: "Choose a strong password and set your preferences.",
            },
            {
              label: "Confirmation",
              content: "Review your information before submitting.",
            },
          ]}
        />
        <Badge text="Beta" variant="destructive" /> */}
      </div>
    </div>
  );
}

export default UserForm;
