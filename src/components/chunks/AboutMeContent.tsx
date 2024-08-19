async function AboutMeContent() {
  // TODO: Replace with data fetching layer to get info straight from mdx
  return (
    <div>
      <div className="md:ml-10 mt-10 max-w-xl">
        {
          "Hey! I'm Ujaan, a Computer Engineering student at the Hong Kong University of Science and Technology, and an aspiring software engineer."
        }
      </div>
      <div className="md:ml-10 mt-5 max-w-xl">
        {
          "Frankly, a lot of my time is split between coursework, research projects and Leetcode, but I also enjoy cooking, reading, and badminton. I'm currently working on a few projects, (including this website!), and I'm always looking for new opportunities to learn and grow."
        }
      </div>
      <div className="md:ml-10 mt-5 max-w-xl">
        {"Feel free to reach out to me on any of my socials!"}
      </div>
    </div>
  );
}

export default AboutMeContent;
