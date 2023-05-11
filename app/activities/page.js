// import candelImg from "../../public/candle-1.png";

import EventCard from "@/components/EventCard";

const Events = () => {
  return (
    <>
      <div className="flex flex-col items-end px-20 text-right justify-center w-full h-screen space-y-10">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl   header-font">
          النشاطات والفعاليات
        </h1>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
};

export default Events;
