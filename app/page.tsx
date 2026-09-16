import { CurriculumStages } from "@/components/curriculum-stages";
import { MediaSlot } from "@/components/media-slot";
import { SiteNav } from "@/components/site-nav";
import { accessRows, mediaSlots, principles } from "@/lib/content";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteNav />

      <div className="page-main">
        <section className="opening" id="top">
          <p className="opening-kicker">Life Row</p>
          <h1>Belonging starts on day one.</h1>
          <p>
            We’re building an afterschool home for East LA’s young men where
            care, opportunity, and belonging don’t depend on family income, past
            mistakes, or having life figured out.
          </p>
          <p>
            This is the foundation of Life Row: who we’re here for, what we’re
            building, and the principles we practice together.
          </p>
        </section>

        <MediaSlot {...mediaSlots.afterOpening} />

        <article className="editorial">
          <section id="mission">
            <h2>Mission</h2>
            <p>
              To develop young men who build meaningful futures and become the
              role models their communities can depend on.
            </p>
          </section>

          <section id="what-is-life-row">
            <h2>What is Life Row?</h2>
            <p>
              Life Row is a planned afterschool community where young men enter
              as a class, grow together, and graduate together. We’re bringing
              licensed therapy, nutritious meals, fitness, financial guidance,
              and leaders from across Los Angeles into one connected program.
            </p>
          </section>

          <section id="why-we-exist">
            <h2>Why we exist</h2>
            <p>
              Too many young people face pain, pressure, and difficult decisions
              without a community consistently involved in their lives. Access
              to care, constructive outlets, and people who open doors too often
              depends on what their family can afford.
            </p>
            <p>
              When support is missing, anger, isolation, and conflict can
              deepen. We invest in the relationships, habits, and opportunities
              that help young men find direction—and become a source of support
              for others.
            </p>
            <MediaSlot {...mediaSlots.whyWeExist} />
          </section>

          <section id="who-were-here-for">
            <h2>Who we’re here for</h2>
            <p>
              We welcome East LA’s boys and young men who need people in their
              corner, including those navigating probation, gang involvement,
              conflict at home, or uncertainty about their future.
            </p>
            <p>
              Anger, distrust, and challenging behavior call for patient
              relationships, clear boundaries, and dependable support. A young
              man’s hardest moment does not erase his worth or decide who he can
              become.
            </p>
            <MediaSlot {...mediaSlots.whoWereHereFor} />
          </section>

          <section id="why-here">
            <h2>Why here</h2>
            <p>
              Our first center is planned for the Arts District, connected to
              Boyle Heights. We want to turn that proximity into shared access:
              a place where East LA’s young people, families, and culture help
              shape the community, and where resources from across Los Angeles
              become part of everyday life.
            </p>
            <MediaSlot {...mediaSlots.whyHere} />
          </section>

          <section id="one-community">
            <h2>One community</h2>
            <p>
              Each class will share meals, train, build projects, explore the
              city, and work through challenges together. Families, therapists,
              coaches, entrepreneurs, athletes, and public servants will
              contribute to that shared life.
            </p>
            <p>
              Trust grows through knowing someone’s name, noticing when they’re
              missing, keeping your word, and coming back after a difficult day.
              The community we build together is the foundation of the program.
            </p>
            <MediaSlot {...mediaSlots.oneCommunity} />
          </section>

          <section id="belonging-and-responsibility">
            <h2>Belonging and responsibility</h2>
            <p className="lede">
              You don’t have to have it together to belong here.
            </p>
            <p>
              Care and support should never depend on family income, past
              mistakes, or perfect behavior. Belonging starts on day one.
            </p>
            <p>
              We hold clear expectations, address harm, and help young men take
              responsibility and repair what they can. Accountability is part of
              believing in who someone can become.
            </p>
          </section>

          <section id="what-access-means">
            <h2>What access means</h2>
            <p>
              Our planned program brings together care, experiences, and
              relationships too often available only through family wealth.
            </p>
            <div className="access-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Access</th>
                    <th>What it makes possible</th>
                  </tr>
                </thead>
                <tbody>
                  {accessRows.map((row) => (
                    <tr key={row.access}>
                      <th scope="row">{row.access}</th>
                      <td>{row.possible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="field-days">
            <h2>Field days</h2>
            <p className="lede">More of the city. More to imagine.</p>
            <p>
              Field days will take each class beyond familiar routines: beaches,
              sporting events, museums, workplaces, games, and time simply spent
              having fun. Exploring Los Angeles together creates space for
              friendship and discovery, including experiences that cost,
              transportation, or lack of access can place out of reach.
            </p>
            <p>Joy is part of growing up. It belongs in the program.</p>
            <MediaSlot {...mediaSlots.accessAndFieldDays} />
          </section>

          <section id="from-belonging-to-leadership">
            <h2>From belonging to leadership</h2>
            <p>
              Each class will practice the habits that help a young man care for
              himself, keep his word, and become someone others can depend on.
              The journey starts with belonging and grows through
              responsibility, practical work, and service.
            </p>
            <p className="thread">
              Recurring thread: <strong>Ask God for wisdom.</strong> Prayer,
              humility, reflection, and seeking guidance run throughout the
              journey.
            </p>
          </section>

          <section id="five-stages">
            <h2>Five stages</h2>
            <p>
              These are proposed curriculum stages, not a finalized clinical
              model or fixed schedule. Stage names and principles stay visible;
              practice examples are optional to open.
            </p>
            <CurriculumStages />
            <p>
              Growth takes practice. Young men may revisit any stage as they
              encounter new challenges. Their place in the community does not
              depend on moving through the curriculum perfectly.
            </p>
            <MediaSlot {...mediaSlots.curriculum} />
          </section>

          <section id="graduation-and-beyond">
            <h2>Graduation and beyond</h2>
            <p>
              Each class will work toward graduation through shared experiences,
              practical learning, and service. Our goal is for every graduate to
              leave with stronger relationships, useful life skills, and a
              concrete next step toward education, work, or entrepreneurship.
            </p>
            <p>
              Over time, we want graduates to return as mentors and leaders:
              people the next class can turn to, carrying the support they
              received into their families and neighborhoods.
            </p>
            <MediaSlot {...mediaSlots.graduation} />
          </section>

          <section id="shared-principles">
            <h2>Shared principles</h2>
            <ul className="principle-list">
              {principles.map((principle) => (
                <li key={principle.title}>
                  <p>
                    <strong>{principle.title}</strong> {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section id="faith-foundation">
            <h2>Faith foundation</h2>
            <p>
              Our foundation is shaped by the teachings of Jesus: love your
              neighbor, tell the truth, practice mercy, take responsibility, and
              use what you have to serve others. These principles guide the
              adults as well as the young men in our community.
            </p>
          </section>

          <section id="stewardship-and-progress">
            <h2>Stewardship and progress</h2>
            <p>
              Support will help fund professional care, program staff,
              nutritious meals, fitness access, field days, learning
              experiences, and a dependable place to gather.
            </p>
            <p>
              We are developing the first class’s schedule, budget, and delivery
              partnerships. As those commitments are confirmed, we will share
              what each participant can access, what the program costs, and how
              we will report progress.
            </p>
            <p>
              Success means more than attendance. We want to understand whether
              young men feel supported, build dependable relationships, practice
              useful skills, and leave with a next step they can pursue.
            </p>
          </section>

          <section id="program-details">
            <h2>Program details being developed</h2>
            <p>
              We’re developing the first class’s schedule, delivery
              partnerships, and budget. We’ll share confirmed details as the
              program takes shape.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
