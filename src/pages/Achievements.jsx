import achievementsData from "../data/achievementsData"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"

function Achievements() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Achievements
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Excellence Beyond Academics
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our students and institution consistently achieve
            milestones in academics, sports, leadership,
            and extracurricular excellence.
          </p>

        </div>

        {/* Achievement Cards */}
        <div className="mt-20 space-y-8">

          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition"
            >

              {/* Icon */}
              <div className="bg-blue-900 text-white p-5 rounded-2xl">
                <Trophy size={32} />
              </div>

              {/* Content */}
              <div className="flex-1">

                <h2 className="text-2xl font-bold text-gray-900">
                  {achievement.title}
                </h2>

                <p className="mt-2 text-gray-500 font-medium">
                  Achievement Year: {achievement.year}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
{/* Alumni Section */}
<div className="mt-32">

  {/* Heading */}
  <div className="text-center">

    <p className="uppercase tracking-widest text-blue-900 font-semibold">
      Distinguished Alumni
    </p>

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
      Our Proud Alumni
    </h2>

    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
      Our alumni continue to achieve excellence in various
      professional fields across the country and beyond.
    </p>

  </div>

  {/* Alumni Grid */}
  <div className="mt-20 grid md:grid-cols-3 gap-8">

    {/* Alumni Card 1 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <img
        src="/src/assets/alumni1.jpeg"
        alt="Prabhati Baruah"
        className="w-full h-80 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          Prabhati Baruah Khound
        </h3>

        <p className="mt-3 text-blue-900 font-semibold">
         Deputy Provident Fund Commissioner at A.T.E.P.F.O ( Assam Tea Employees Provident Fund Organization) 
        </p>

        <p className="mt-2 text-gray-600">
          Batch of 2006
          Smt. Prabhati Baruah Khound (HSLC Batch 2006), an alumna of Royal Oak High School, 
          Jorhat, is currently serving as Deputy Provident Fund Commissioner at ATEPFO, Assam Government. 
          She completed her Higher Secondary education from Salt Brook Academy, Dibrugarh, and earned a B.E. in Electronics & Communication Engineering from Visvesvaraya Technological University. 
          She began her professional career as a Probationary Officer at Canara Bank in 2013 before joining ATEPFO in 2014.

        </p>

      </div>

    </div>

    {/* Alumni Card 2 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <img
        src="/src/assets/alumni2.jpeg"
        alt="Niraj Kankani"
        className="w-full h-80 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          Niraj Kankani
        </h3>

        <p className="mt-3 text-blue-900 font-semibold">
          Entrepreneur
        </p>

        <p className="mt-2 text-gray-600">
          Batch of 2003
          Niraj Kankani (HSLC Batch 2003) is an alumnus of Royal Oak High School, Jorhat. 
          A Commerce graduate from J.B. College, Jorhat (2008), he is a successful entrepreneur in the electronics industry.
           After gaining experience in the sector from 2009, he became a business partner and later established his own venture in 2013. 
           Today,he owns and operates three electronics showrooms dealing in both wholesale and retail sales of leading brands such as Samsung and LG.
        </p>

      </div>

    </div>
     {/* Alumni Card 3 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <img
        src="/src/assets/alumni3.jpeg"
        alt="Abhijit Ranjan Roy"
        className="w-full h-80 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          Abhijit Ranjan Roy
        </h3>

        <p className="mt-3 text-blue-900 font-semibold">
          Entrepreneur
        </p>

        <p className="mt-2 text-gray-600">
          Batch of 2001
          Abhijit Ranjan Roy (HSLC Batch 2001) is an alumnus of Royal Oak High School, 
          Jorhat and a respected entrepreneur in Jorhat’s jewellery sector. He began his professional journey in 2002 by assisting his late father in the family business, 
          where he learned the fundamentals of accounting, customer relations, and business management.Drawing upon the discipline, values, and work ethic instilled during his school years, 
          he steadily built upon the family legacy. He credits Royal Oak High School, its dedicated teachers, and especially Principal Zaman Sir for shaping his sense of responsibility, integrity, and commitment to excellence.
          With over 24 years of experience in the jewellery industry, he continues to lead his enterprise with a strong focus on customer trust, product purity, and ethical business practices. He remains grateful to his school, mentors, and family for providing the foundation of his personal and professional success.
        </p>

      </div>

    </div>
 {/* Alumni Card 4 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <img
        src="/src/assets/alumni4.jpeg"
        alt="Anubhav Gogoi"
        className="w-full h-80 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          Anubhav Gogoi
        </h3>

        <p className="mt-3 text-blue-900 font-semibold">
         Deputy Superintendent of Police (Probationer) under the Assam Police Service (APS)
        </p>

        <p className="mt-2 text-gray-600">
          Batch of 2016
          Anubhav Gogoi (HSLC Batch 2016) is an alumnus of Royal Oak High School, Jorhat. He is currently undergoing training at the Lachit Barphukan Police Academy as a Deputy Superintendent of Police (Probationer) under the Assam Police Service (APS).
After completing his Higher Secondary education in Science from NKEM Senior Secondary School, Jorhat, he earned a B.Tech in Civil Engineering from Jorhat Institute of Science and Technology under Assam Science and Technology University in 2022.
Anubhav successfully cleared the APSC Combined Competitive Examination (CCE) 2022 in his very first attempt, securing Rank 184 and joining the Assam Accounts Service. He served as an Assistant Accounts Officer under the Department of Finance, Government of Assam, for nearly two years.
Demonstrating exceptional perseverance and dedication, he appeared for the APSC CCE once again and secured Rank 13 in APSC CCE 2024, earning a place in the prestigious Assam Police Service (APS). His journey reflects hard work, determination, and a commitment to public service.
        </p>

      </div>

    </div>

  </div>

</div>
    </section>
  )
}

export default Achievements