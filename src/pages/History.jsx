import { motion } from "framer-motion"
import schoolBuilding from "../assets/school-building.jpeg"

const historyData = [
  {
    year: "1998",
    title: "Foundation of Royal Oak School",
    description:
      "Royal Oak School was established at D.C.B. Road, Tarajan, Jorhat, Assam, with a vision to provide quality education and holistic development for students.",
  },

  {
    year: "2005",
    title: "Expansion of Campus",
    description:
      "The school expanded its infrastructure with additional classrooms, science laboratories, and improved learning facilities.",
  },

  {
    year: "2015",
    title: "Academic Growth & Excellence",
    description:
      "Royal Oak School strengthened its academic programs and continued to build a reputation for educational excellence and student achievement.",
  },

  {
    year: "2024",
    title: "Tobacco-Free School Recognition",
    description:
      "The school received recognition as a Tobacco-Free School, reflecting its commitment to creating a healthy and safe environment for students and staff.",
  },
]

function History() {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Our Journey
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            History of Royal Oak School
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Since 1998, Royal Oak School has been committed to
            nurturing young minds through quality education,
            character development, and academic excellence.
          </p>

        </div>

        {/* School Image + Story */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              A Legacy of Learning Since 1998
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Established in 1998 at D.C.B. Road, Tarajan,
              Jorhat, Assam, Royal Oak School was founded with
              the objective of providing quality education while
              fostering discipline, integrity, leadership, and
              holistic development among students.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Over the years, the school has grown into a trusted
              educational institution known for its dedicated
              faculty, student-centered learning, and commitment
              to academic excellence.
            </p>

          </div>

          <img
            src={schoolBuilding}
            alt="Royal Oak School"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* Statistics */}
        <div className="mt-24 grid md:grid-cols-4 gap-8">

          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center">

            <h3 className="text-5xl font-bold text-blue-900">
              1998
            </h3>

            <p className="mt-3 text-gray-600">
              Established
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center">

            <h3 className="text-5xl font-bold text-blue-900">
              25+
            </h3>

            <p className="mt-3 text-gray-600">
              Years of Excellence
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center">

            <h3 className="text-5xl font-bold text-blue-900">
              20+
            </h3>

            <p className="mt-3 text-gray-600">
              Dedicated Faculty
            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg text-center">

            <h3 className="text-5xl font-bold text-blue-900">
              ✓
            </h3>

            <p className="mt-3 text-gray-600">
              Tobacco-Free School
            </p>

          </div>

        </div>

        {/* Timeline */}
        <div className="mt-32">

          <div className="text-center">

            <p className="text-blue-900 font-semibold uppercase tracking-widest">
              Milestones
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Our Journey Through The Years
            </h2>

          </div>

          <div className="mt-20 relative border-l-4 border-blue-900 ml-4 md:ml-0">

            {historyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="mb-16 ml-8"
              >

                <div className="absolute -left-[14px] w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow-md"></div>

                <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">

                  <span className="text-blue-900 font-bold text-lg">
                    {item.year}
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Vision & Mission */}
        <div className="mt-32 grid md:grid-cols-2 gap-8">

          <div className="bg-blue-900 text-white p-10 rounded-3xl">

            <h2 className="text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-6 leading-8">
              To inspire and empower students to become
              responsible citizens, lifelong learners,
              and future leaders through quality education.
            </p>

          </div>

          <div className="bg-gray-100 p-10 rounded-3xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To provide a nurturing environment that promotes
              academic excellence, character development,
              creativity, leadership, and social responsibility.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default History