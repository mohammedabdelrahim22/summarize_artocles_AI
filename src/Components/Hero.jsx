import { logo } from '../assets'

function Hero() {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center  w-full mb-10 mt-3'>
                <img src={logo} alt='logo' className='w-28 object-contain' />
                <button type='button' onClick={() => window.open("https://githup.com")} className='black_btn'>
                    Githup
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Articles With <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI  GPT-4</span>
            </h1>
            <h2 className='desc'>     Simplify your reading with Summize, an open-source article summarizer
                that transforms lengthy articles into clear and concise summaries</h2>
        </header>
    )
}

export default Hero