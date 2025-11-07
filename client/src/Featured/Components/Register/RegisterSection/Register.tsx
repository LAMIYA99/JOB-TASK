
const RegisterSection = () => {
  return (
    <section
      className="py-24 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f27305d1155b565499f0b_sign-up-bg-shape-jobboardly-x-webflow-template.jpg')",
      }}
    >
      <div className="container mx-auto max-w-[1130px] px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 mb-3">
            Create account
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Already haven an account?{" "}
            <a href="#" className="underline">
              Sign in.
            </a>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              className="border border-slate-200 rounded-md px-4 py-3 text-sm shadow-sm"
              placeholder="John Carter"
            />
            <input
              className="border border-slate-200 rounded-md px-4 py-3 text-sm shadow-sm"
              placeholder="Email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-slate-600 mb-2">Password</label>
            <input
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-slate-600 mb-2">
              Confirm your password
            </label>
            <input
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-start gap-3 mb-6">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-slate-600">
              I have read accepted the Jobboardly App Ltd. Terms & Conditions
              and Privacy Policy.
            </label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md shadow-md mb-6">
            Send Message
          </button>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <hr className="flex-1 border-slate-200" />
            <span>OR</span>
            <hr className="flex-1 border-slate-200" />
          </div>

          <div className="w-full border flex items-center justify-center gap-2 border-slate-200 rounded-md py-3 text-sm mb-3">
          <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f0c2315dc80cd1cd07d89_google-icon-simple-jobboardly-x-webflow-template.svg" alt="" />
            Sign in with Google
          </div>
          <div className="w-full flex border  gap-3 items-center justify-center border-slate-200 rounded-md py-3 text-sm">
            <img src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/649f0c1f199b481b53c882a3_facebook-icon-simple-jobboardly-x-webflow-template.svg" alt="" />
            Sign in with Facebook
          </div>
        </div>

        <div className="max-w-md mx-auto text-center md:text-left">
          <h3 className="text-3xl font-semibold text-slate-900">Our numbers</h3>
          <p className="text-sm text-slate-500 mt-3 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">
                20,583<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-slate-400 uppercase mt-2">
                Job posted
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">
                3,896<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-slate-400 uppercase mt-2">
                Successful hires
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">
                581<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-slate-400 uppercase mt-2">
                Verified companies
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">
                100K<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-slate-400 uppercase mt-2">
                Monthly visits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterSection