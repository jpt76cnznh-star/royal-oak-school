import eventsData from "../data/eventsData"

function Events() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            School Events
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Events & Activities
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore school activities, programs,
            competitions, celebrations, and memorable
            moments from Royal Oak School.
          </p>

        </div>

        {/* Events */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {eventsData.map((event) => (

            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 transition duration-300"
            >

              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              {/* Event Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-900">
                  {event.title}
                </h2>

                {/* Date */}
                {event.date && (
                  <p className="mt-2 text-blue-900 font-medium">
                    {event.date}
                  </p>
                )}

                {/* Description */}
                <p className="mt-6 text-gray-600 leading-7">
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Events