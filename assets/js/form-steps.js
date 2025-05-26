// /assets/js/form-steps.js

const form = document.getElementById("loanForm");
const steps = [
  {
    title: "Step 1: Personal Info",
    fields: [
      { label: "First Name", name: "first_name", type: "text", required: true },
      { label: "Last Name", name: "last_name", type: "text", required: true },
      { label: "Email", name: "email", type: "email", required: true },
      { label: "Phone", name: "phone", type: "tel", required: true },
      { label: "Birth Year", name: "birthyear", type: "select", required: true },
      { label: "I own a vehicle", name: "vehicle_owner", type: "checkbox" },
      { name: "age", type: "hidden" },
      { name: "timestamp", type: "hidden" }
    ]
  },
  {
    title: "Step 2: Loan Details",
    fields: [
      { label: "Loan Amount", name: "loan_amount", type: "number", required: true },
      { label: "Loan Type", name: "loan_type", type: "select", options: ["payday", "installment", "credit"], required: true },
      { label: "Loan Purpose", name: "loan_purpose", type: "text", required: true },
      { label: "State", name: "state", type: "select", options: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"], required: true }
    ]
  },
  {
    title: "Step 3: Employment & Income",
    fields: [
      { label: "Employment Type", name: "employment_type", type: "select", options: ["Full-Time", "Part-Time", "Self-Employed", "Student", "Unemployed"], required: true },
      { label: "Monthly Income", name: "monthly_income", type: "number", required: true },
      { label: "Pay Frequency", name: "pay_frequency", type: "select", options: ["Weekly", "Bi-Weekly", "Semi-Monthly", "Monthly"], required: true },
      { label: "Next Payday", name: "next_payday", type: "date", required: true }
    ]
  },
  {
    title: "Step 4: Banking & Address",
    fields: [
      { label: "Do you use Direct Deposit?", name: "direct_deposit", type: "checkbox" },
      { label: "Current Address", name: "current_address", type: "text", required: true },
      { label: "Lived here 12+ months?", name: "lived_12_months", type: "checkbox" },
      { label: "Previous Address", name: "previous_address", type: "text" }
    ]
  },
  {
    title: "Step 5: SSN & References",
    fields: [
      { label: "SSN", name: "ssn", type: "text", required: true },
      { label: "Confirm SSN", name: "confirm_ssn", type: "text", required: true },
      { label: "Reference 1 Name", name: "reference_1_name", type: "text", required: true },
      { label: "Reference 1 Phone", name: "reference_1_phone", type: "tel", required: true },
      { label: "Reference 1 Relationship", name: "reference_1_relationship", type: "text", required: true },
      { label: "Reference 2 Name", name: "reference_2_name", type: "text" },
      { label: "Reference 2 Phone", name: "reference_2_phone", type: "tel" },
      { label: "Reference 2 Relationship", name: "reference_2_relationship", type: "text" }
    ]
  },
  {
    title: "Step 6: Review & Submit",
    fields: []
  }
];

// The rest of the logic will dynamically generate the form, handle next/back buttons, validation, storage, and final submission.
// Let me know if you want that rendered now.
