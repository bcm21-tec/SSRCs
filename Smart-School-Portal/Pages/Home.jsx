import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="homeTxt">
        <h1>Smart School Result Checker</h1>

        <p className="homeptxt">
          Welcome to the school portal where students can check their mock
          examination results easily.
        </p>
        <div className="btnDiv">
          <button className="btn">See Your Result</button>
          <Link to="/students">
            <button className="btn2">See Student List</button>
          </Link>
        </div>
      </div>
      <div className="abtsec">
        <h1 className="abtus">About Us - The Story of Our Educational Journey</h1>
        <h2>Our Beginning</h2>
        <p>
          Every great story begins with a dream — and ours started in 2012, in a
          small classroom filled with big ideas. A group of passionate
          educators, led by our founder <strong>Dr. Emmanuel Adeyemi</strong>,
          believed that education should be more than memorizing facts; it
          should be a journey of discovery, creativity, and empowerment. With
          just a handful of students and a single computer, they launched what
          would become one of the most forward-thinking educational platforms in
          Africa. Their vision was simple yet powerful:
          <strong>
            to make quality education accessible, engaging, and transformative
            for every learner
          </strong>
          , regardless of background or location.
        </p>
        <h2>Our Growth</h2>
        <p>
          From those modest beginnings, our institution grew rapidly. By 2015,
          we had expanded into multiple schools and online learning centers,
          offering courses that blended traditional teaching with modern
          technology. We introduced interactive learning tools, digital
          classrooms, and personalized study plans — innovations that helped
          thousands of students achieve academic excellence. In 2018, we
          launched our <strong>Mock Exam Result Checker</strong>, a
          groundbreaking system that allowed students to instantly access their
          performance data online. This innovation not only simplified result
          checking but also encouraged students to take ownership of their
          learning progress.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to{" "}
          <strong>
            ignite curiosity, inspire excellence, and empower learners to shape
            the future
          </strong>
          . We believe education is not just about passing exams — it's about
          building character, confidence, and creativity. Every student who
          joins our community becomes part of a global movement that values
          knowledge, innovation, and compassion. We strive to create an
          environment where learning feels exciting, where teachers are mentors,
          and where technology bridges the gap between dreams and reality.
        </p>
        <h2>Our Philosophy</h2>
        <p>
          We stand on three pillars
          <ol>
            <strong>Access – </strong>Every student deserves equal opportunity
            to learn, no matter where they live or what resources they have.
          </ol>
          <ol>
            <strong>Innovation –</strong> We embrace technology to make learning
            smarter, faster, and more interactive.
          </ol>
          <ol>
            <strong>Integrity –</strong> Education must be honest, transparent,
            and focused on real growth, not shortcuts.
          </ol>
          These principles guide every decision we make — from curriculum design
          to student support.
        </p>
        <h2>Our Impact</h2>
        <p>
          Today, our platform serves over
          <strong>50,000 students across Nigeria and beyond</strong>, helping
          them prepare for exams, discover new subjects, and build lifelong
          skills. We've partnered with schools, universities, and educational
          organizations to create a network of excellence that continues to
          expand. Our alumni have gone on to become engineers, doctors, artists,
          entrepreneurs, and educators themselves — living proof that when you
          invest in learning, you invest in the future.
        </p>
        <h2>Our Future</h2>
        <p>
          As we look ahead, we're not just building a website — we're building a
          legacy. We're developing AI-powered learning assistants, virtual
          classrooms, and mentorship programs that connect students with
          professionals worldwide. Our goal is to make learning{" "}
          <strong>limitless</strong>, where curiosity leads to opportunity and
          every student can dream boldly. We envision a world where education is
          not confined to walls or textbooks, but flows freely through
          technology, creativity, and collaboration.
        </p>
        <h2>Our Promise</h2>
        <p>
          To every student who visits our site, we promise this: “You are not
          just checking results — you are checking your progress, your growth,
          and your potential.” We are here to guide you, support you, and
          celebrate every step of your learning journey. Because education is
          not the end of a path — it's the beginning of a lifelong adventure.
        </p>
      </div>
    </>
  );
}

export default Home;
