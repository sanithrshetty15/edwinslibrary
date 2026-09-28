function TermsAndConditions() {
  const rules = [
    {
      title: "Personal Information",
      text: "Students must enter their own name, USN, department, section, email, and phone number. No student should register using another person's details."
    },
    {
      title: "One Account Per Student",
      text: "Each student may maintain only one library account. Creating multiple accounts or duplicate registrations is not permitted."
    },
    {
      title: "Account Security",
      text: "Students are responsible for keeping their login credentials secure. Do not share your password or allow others to access your account."
    },
    {
      title: "Accurate Information",
      text: "All information provided during registration must be genuine, accurate, and up to date."
    },
    {
      title: "Borrowing Responsibility",
      text: "A student is responsible for every book issued through their account, regardless of who physically collected the book."
    },
    {
      title: "Book Returns",
      text: "Borrowed books must be returned according to the applicable library return policy. Students should not keep books longer than permitted."
    },
    {
      title: "Damage or Loss",
      text: "Students are responsible for books that are lost, damaged, or deliberately misused while issued to their account."
    },
    {
      title: "No Unauthorized Access",
      text: "Students must not attempt to access another student's account, modify library records, or bypass any security mechanism."
    },
    {
      title: "Responsible Use",
      text: "The library system must only be used for legitimate academic and library-related purposes. Misuse of the system may result in account restrictions."
    },
    {
      title: "Account Verification & Suspension",
      text: "The library administration may verify submitted information and may suspend or reject accounts containing false information or showing misuse of the library system."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">
          Terms & Conditions
        </h1>

        <p className="text-white/50 mt-3 mb-10">
          Please read these rules carefully before creating your Edwin's Library account.
        </p>

        <div className="space-y-5">

          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold">
                {index + 1}. {rule.title}
              </h2>

              <p className="text-white/60 mt-3 leading-7">
                {rule.text}
              </p>
            </div>
          ))}

        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-10 bg-primary text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Back to Registration
        </button>

      </div>

    </div>
  )
}

export default TermsAndConditions