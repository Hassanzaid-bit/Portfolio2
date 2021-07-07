import './aboutme.css'

const Aboutme = () => {
    return ( 
        <div className="about-me text-left my-48">
            <div class="personal-details">
                <h1 className="font-semibold text-6xl md:text-7xl my-6">Who's this?</h1>
                <p className="font-normal text-4xl md:text-4xl">Hi, I’m Hassan Zaid. I’m a Web Developer, Web Designer, working remotely from Nairobi, Kenya.

                    Right now I’m working on my side projects, while looking for a long-term product I could get stuck into. <br/> If you are working on one and looking for a Web Developer/Designer, get in touch. <br/>
                    
                    Recently, I’ve made sharedthis.email, a platform for publishing emails. Feel free to check out my other side projects.
                    
                    I’m most active as <a href="https://www.instagram.com/hassan_zaid__/">@Hassan_zaid__</a> on Instagram, where I post about design and development. You can also find me on GitHub where I experiment with code.</p>
            </div>
            
            <div class="personal-skills text-sm font-normal my-6">
                <h2 className="text-5xl md:text-6xl font-medium my-6">What can you do?</h2>
                <p className="text-4xl md:text-4xl font-normal">Here are some of the things I can do. I spend a lot of time learning things that help me grow as a designer and developer.</p>
                <h3 className="code text-3xl md:text-4xl font-medium my-5">Code</h3>
                <div class="skillset">
                    <div className="my-5">
                        <h4 className="text-4xl font-semibold">HTML/CSS/JAVASCRIPT</h4>
                        <p className="text-4xl md:text-4xl font-normal">My go-to tools for working on the Web.</p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-4xl md:text-4xl font-semibold">React</h4>
                        <p className="text-4xl md:text-4xl font-normal">My favoutite javascript library for creating Single Page Applications</p>
                    </div>

                    <div className="my-5">
                    <h4 className="text-4xl md:text-4xl font-semibold">Django</h4>
                        <p className="text-4xl md:text-4xl font-normal">What i use for my backend</p>
                    </div>
                </div>
                
            </div>
         </div>
     );
}
 
export default Aboutme;