export default function Content () {
    return (
        <div className='pt-32 pb-8 px-4 lg:w-[1000px] lg:m-auto '>
            <div className='hidden lg:block mt-32 mb-64 text-6xl whitespace-nowrap text-center'>
                a digital minimalist who can code.
            </div>
            <div className='font-bold text-4xl flex flex-col sm:flex-row sm:gap-4'>
                <div className='header'>
                    Hello, 
                </div>
                <div className='header'>
                    I&apos;m Puriwat
                </div>
            </div>
            <div>This is my portfolio.</div>
            <div className='italic font-extralight text-xs text-gray-400'>Last Updated: 04 Jan 2024</div>
            <div className='font-bold text-xl mt-4'>About</div>
            <div className='indent-8 font-light text-gray-900'>
                Recent Industrial Engineering graduate with a passion for combining technical expertise in
                software development and process optimization to solve complex operational challenges. With
                hands-on experience in full-stack development and system analysis, I bring a unique ability to
                integrate technology into working processes to enhance efficiency and scalability. Seeking an
                opportunity to apply my skills in process improvement, workflow automation, and data-driven
                decision-making in an Industrial Engineering or Process Engineering role.
            </div>
            <div className='font-bold text-xl mt-4'>Experiences</div>
            <ul className='flex flex-col gap-2'>
                <ItemList header="Internship Frontend Developer - Donuts Bangkok" subHeader="Jun 2023 - Aug 2023"/>
                <ItemList header="Fullstack Developer - Know Are Learning" subHeader="Aug 2024 - Dec 2024"/>
                <ItemList header="Process Improvement - Bangkok Bank" subHeader="Jan 2025 - Present"/>
            </ul>
            <div className='font-bold text-xl mt-4'>Educations</div>
            <ul className='flex flex-col gap-2'>
                <ItemList header="Debsirin School (DSA134)" subHeader="Highschool"/>
                <ItemList header="Industrial Engineering - Chulalongkorn University (IE104)" subHeader="Bachelor"/>
            </ul>
            <div className='font-bold text-xl mt-4'>Certificates</div>
            <ul className='flex flex-col gap-2'>
                <ItemList header="JavaScript: The Hard Parts, v2" subHeader="Frontend Master" link={"https://static.frontendmasters.com/ud/c/af8fb0c6fb/fjjCYVxYTO/javascript-hard-parts-v2.pdf"}/>
                <ItemList header="Mastering TypeScript 2022 Edition" subHeader="Udemy" link={'https://coursera.org/share/2ddec7e8a507bcda4a1b5bd8151e76fe'}/>
                <ItemList header="Six Sigma Principle" subHeader="Coursera" link={"https://static.frontendmasters.com/ud/c/af8fb0c6fb/EtNBEoWAeZ/complete-react-v7.pdf"}/>
            </ul>
            <div className='mt-4'>View all my certificates on my <a className='italic text-blue-400 underline underline-offset-2' href='https://www.linkedin.com/in/p-nitijarasrat/details/certifications/' target='_blank' rel="noreferrer">linkedin</a></div>
            <div className='font-bold text-xl mt-4'>Contact</div>
            <ul className='flex flex-col gap-2'>
                <ItemList header="0804292884" subHeader="Tel."/>
                <ItemList header="puriwatds@gmail.com" subHeader="email"/>
                <ItemList header="Puriwat Nitijarasrat" subHeader="linkedin" link={"https://www.linkedin.com/in/p-nitijarasrat/"}/>
                <ItemList header="pnitijarasrat" subHeader="github" link="https://github.com/pnitijarasrat"/>
            </ul>
            <div className='mt-8'>Thank for visiting :)</div>
            <div className='mb-[200px]'>Puriwat Nitijarasrat</div>
        </div >
    )
}

function ItemList({header, subHeader, link}) {
    return (
        <li className='text-gray-900 font-light'>
            <div className='flex flex-col'>
                <div>{header}</div>
                <div className='flex justify-between sm:justify-start sm:gap-2 items-center'>
                    <div className='text-xs text-gray-500'>{subHeader}</div>
                    {link ? <a className='text-xs text-blue-400 underline underline-offset-2' href={link} target='_blank' rel='noreferrer'>view</a> : null}
                </div>
            </div>
        </li>
    )
}
