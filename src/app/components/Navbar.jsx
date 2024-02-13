import Image from "next/image"

const Navbar = () => {
  return (
    <div className="bg-[#222222] flex items-center gap-6 px-12 py-6">
            <Image width={100} height={50} alt="react image" src='https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png' />
            <div className="flex flex-col">
                <h1 className="text-[#00D8FF] text-4xl">React.js</h1>
                <p className="text-[#98e3f0]">i.e., using the React library for rendering the UI</p>
            </div>
    </div>
  )
}

export default Navbar