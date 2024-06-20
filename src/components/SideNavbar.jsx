import Image from "next/image";
export default function SideNavbar() {
  return (
    <div className=" shadow p-6 flex rounded-xl flex-col justify-center items-center">
        <div className="profilebg  shadow-purple-700 rounded-full ">
          <Image
            className="rounded-full "
            src="/profile.png"
            alt="tasin"
            width={150}
            height={150}
          ></Image>
        </div>
        <h1 className="text-gradient my-1 text-lg font-bold">Mohotasir Al Mamun</h1>
        <h2 className="bg-slate-900 text-gray-400 py-2 px-4 rounded-xl text-sm font-semibold">FullStack Web Developer</h2>
        <div>
             
        </div>
    </div>
  );
}
