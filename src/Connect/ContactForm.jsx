// Importing local files

// Importing react icons
import { CgArrowLongRight } from "react-icons/cg";

function ContactForm({ darkTheme }){
  console.log(darkTheme);

  return (
    <form action="https://api.web3forms.com/submit" method="POST" className={`${darkTheme ? "text-black" : "text-white"} flex flex-col gap-5 items-end`}>
      <div className="w-full flex flex-col gap-5">
        {/* Replace with your Access Key */}
        <input type="hidden" name="access_key" value="0c878e5f-80d6-4475-abf0-345c75cb6041" />
        <section className="flex flex-wrap gap-5">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            required
            className="text-black flex-1 py-1 px-3 rounded-sm border-none outline-none" />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            className="text-black flex-1 py-1 px-3 rounded-sm border-none outline-none" />
        </section>

        <section className="flex flex-wrap gap-5">
          <input
            type="text"
            placeholder="SUBJECT"
            name="subject"
            className="text-black flex-1 py-1 px-3 rounded-sm border-none outline-none" />

          <input
            type="text"
            name="knowMe"
            placeholder="HOW'D YOU HEAR ABOUT ME?"
            className="text-black flex-1 py-1 px-3 rounded-sm border-none outline-none" />
        </section>

        <section className="flex-1 flex">
            <input
            type="text"
            name="thinking"
            placeholder="What's on your mind?"
            className="text-black flex-1 h-48 py-1 px-3 rounded-sm outline-none" />
        </section>
      </div>

      <button type="submit" className="bg-yellow-500 flex flex-col items-center justify-center w-20 h-20 py-1 px-3 rounded-full rounded-br-none hover:bg-yellow-600 hover:text-white">
        <span>Send IT</span>
        <CgArrowLongRight className="size-10 -mt-3" />
      </button>

    </form>
  )
}

export default ContactForm