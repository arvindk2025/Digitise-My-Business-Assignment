
const formConfig = [
    {
      id: "1",
      name: "Username",
      type: "text",
      required: true,
      regex: "^[a-zA-Z0-9]+$"
    },
    {
      id: "2",
      name: "Password",
      type: "password",
      required: true
    },
    {
      id: "3",
      name: "Gender",
      type: "radio",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" }
      ]
    },
    {
      id: "4",
      name: "Hobbies",
      type: "checkbox",
      options: [
        { label: "Reading", value: "reading" },
        { label: "Programming", value: "programming" },
        { label: "Dancing", value: "dancing" },
        { label: "Traveling", value: "traveling" },
        { label: "Cycling", value: "cycling" },
        { label: "Swimming", value: "swimming" }
      ]
    },
    {
      id: "5",
      name: "Country",
      type: "select",
      required: true,
      multiplSelect: false,
      options: [
        { label: "India", value: "india" },
        { label: "Russia", value: "russia" },
        { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" }
      ]
    },
    {
      id: "6",
      name: "ProfilePicture",
      type: "file",
      fileFormatSupported: ["jpg", "png"]
    }
  ];
  
  export default formConfig;
  