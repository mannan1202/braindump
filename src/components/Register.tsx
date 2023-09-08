export default function Register() {
  return (
    <div className="border py-5 px-10 w-1/4 rounded-md ">
      <form className="flex flex-col justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-xl">Register</span>
          <span className="text-xs">Sign up to access the app</span>
        </div>
        <div className="flex flex-col space-y-2 mt-5">
          <input
            type="text"
            name="username"
            id="username"
            className="py-2 px-4 rounded-lg text-sm text-black"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col space-y-2 my-5">
          <input
            type="password"
            name="password"
            id="password"
            className="py-2 px-4 rounded-lg text-sm text-black"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col space-y-2 mb-5">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="py-2 px-4 rounded-lg text-sm text-black"
            placeholder="confirm password"
          />
        </div>
        <div className="self-center mt-5">
          <button className="border px-8 py-1 rounded-md hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
