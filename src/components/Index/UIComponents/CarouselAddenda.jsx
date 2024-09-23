import { cn } from "../../../lib/utils";
import Marquee from "../../MagicUI/Marquee";


import { addendasC1, addendasC2 } from "../../../Data/Addendas/dataAddendas";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,

}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-52 sm:w-56 lg:w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="gap-2 content-center">
        <div>
          <img className="m-auto" width="200" alt="" src={img} />
        </div>

      </div>
    </figure>
  );
};

export function CarouselAddenda() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {addendasC1.map((addenda) => (
          <ReviewCard img={addenda.pathImg} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {addendasC2.map((addenda) => (
          <ReviewCard img={addenda.pathImg} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
