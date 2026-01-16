import Image from "next/image";

export const metadata = {
  title: "About Us | Ceovine",
  description: "Learn more about Ceovine, our vision, mission, and values.",
};

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            About Ceovine
          </h1>
          <p className="leading-relaxed">
            CEO VINE is a digital publication dedicated to India’s growing startup and business ecosystem. We spotlight visionary founders, innovative startups, and emerging brands shaping the future of entrepreneurship.</p>

<p className="leading-relaxed">Our platform serves as a hub for authentic business stories, insightful interviews, and industry updates — helping readers stay informed, inspired, and connected to what’s next in the world of startups and innovation.</p>

<p className="leading-relaxed">At CEO VINE, we go beyond news. We bring together entrepreneurship, branding, and media to create meaningful visibility for founders and businesses. Whether it’s a growth story, a product launch, or a founder’s perspective, every publication is designed to highlight impact and innovation across sectors.
          </p>
        </div>

        <Image
          src="/about.jpg" // public/about.jpg
          alt="About Ceovine"
          width={600}
          height={400}
          className="rounded-xl object-cover"
          priority
        />
      </section>

      {/* MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className=" ">
            Our mission is to amplify entrepreneurial voices and contribute to a transparent, informed, and thriving business community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className=" ">
            Through our curated content and collaborations, we aim to bridge the gap between brands, investors, and audiences while celebrating the people driving India’s new-age business revolution.
          </p>
        </div>
      </section>

    <section className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-16">
      <p>For stories that inspire, insights that matter, and brands that lead — CEO VINE is where business meets visibility.</p>
      <p>For partnerships, collaborations, and features: corporate@ceovine.com</p>
    </section>

      {/* VALUES */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm">
              We constantly explore new ideas and technologies.
            </p>
          </li>

          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Quality</h3>
            <p className="text-sm">
              Performance, reliability, and clean code matter to us.
            </p>
          </li>

          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p className="text-sm">
              We believe in honesty, clarity, and long-term trust.
            </p>
          </li>
        </ul>
      </section>

    </main>
  );
};

export default AboutPage;
