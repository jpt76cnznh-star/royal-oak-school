import qr from "../assets/qr.png"

function Donate() {

  return (

    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            Support Our School
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Donate to Royal Oak School
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Your contributions help improve infrastructure,
            student programs, scholarships, and educational activities.
          </p>

          {/* QR */}
          <div className="mt-12 flex justify-center">

            <img
              src={qr}
              alt="School Donation QR"
              className="w-80 rounded-2xl shadow-lg"
            />

          </div>

          {/* Bank Details */}
          <div className="mt-10 text-gray-700 space-y-2">

           
            <p>
              <span className="font-semibold">Bank:</span>
              State Bank of India
            </p>

            <p>
              <span className="font-semibold">Account Name:</span>
              Royal Oak School
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Donate