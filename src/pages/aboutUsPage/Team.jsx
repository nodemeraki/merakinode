import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

// from public
import Member0 from "/about-img/member1.png";
import Member1 from "/about-img/member2.png";
import Member2 from "/about-img/member3.png";
import Member3 from "/about-img/member4.png";
import Member4 from "/about-img/member5.png";

// import Member0 from "../../assets/about-img/member1.png";
// import Member1 from "../../assets/about-img/member2.png";
// import Member2 from "../../assets/about-img/member3.png";
// import Member3 from "../../assets/about-img/member4.png";
// import Member4 from "../../assets/about-img/member5.png";

const teamMembers = [
  {
    id: 1,
    name: "SUNDAY TOGGS",
    profession: "Web Developer",
    image: Member0,
  },
  {
    id: 2,
    name: "MICHEAL ADEBOLA",
    profession: "Manager",
    image: Member1,
  },
  {
    id: 3,
    name: "GRACE LOVEDAY",
    profession: "Marketer",
    image: Member2,
  },
  {
    id: 4,
    name: "BRIGGS BROWN",
    profession: "Content Writer",
    image: Member3,
  },
  {
    id: 5,
    name: "EBRUWIYO SAMUEL",
    profession: "C.E.O",
    image: Member4,
  },
];

const Team = () => {
  return (
    <section className="py-12 bg-body px-2 md:px-16">
      <h2 className="text-center text-3xl font-lora font-semibold text-gray-800">
        Meet our Team
      </h2>
      <p className="text-center text-gray-600 max-w-[80vw] md:max-w-[50vw] w-full m-auto mt-2">
        We have much planned for the future, working with great minds and
        organizations to create a better, smarter, and most effective business
        solution that works.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-16">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            loading="lazy"
            className="bg-[#1A4E89] text-white shadow-lg rounded-lg p-3 pb-10 flex flex-col items-center text-center mx-auto"
          >
            {/* <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover rounded-sm border-4 border-gray-300"
            /> */}
            <img
              src={`/assets/about-img/member${member.id}.png`}
              alt={member.name}
              className="w-full h-auto object-cover rounded-sm border-4 border-gray-300"
            />

            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-300 text-sm mt-2">{member.profession}</p>
            <div className="flex gap-3 mt-4">
              <FaLinkedinIn className="fill-amber-300 cursor-pointer hover:opacity-80" />
              <FaXTwitter
                size={14}
                className="fill-amber-300 cursor-pointer hover:opacity-80"
              />
              <FaSquareInstagram
                size={14}
                className="fill-amber-300 cursor-pointer hover:opacity-80"
              />
              <FaFacebookF
                size={14}
                className="fill-amber-300 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
