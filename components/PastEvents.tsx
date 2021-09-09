import React from 'react';
import EventCard from '@/components/EventCards/EventCard';
export default function PastEvents() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto py-12">
        <div className="flex flex-col items-center justify-center w-full mb-24">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            Past Events
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-10/12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <EventCard
                name="Hackathon"
                img="assets/avatars/avatar.svg"
                date="10/9/21"
                about="exciting"
              />
              <EventCard
                name="Hackathon"
                img="assets/avatars/avatar.svg"
                date="10/9/21"
                about="exciting"
              />
              <EventCard
                name="Hackathon"
                img="assets/avatars/avatar.svg"
                date="10/9/21"
                about="exciting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
