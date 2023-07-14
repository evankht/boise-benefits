import {
  AcademicCapIcon,
  CursorArrowRaysIcon,
  ListBulletIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Learn",
    description:
      "Our no-nonsense philosophy prioritizes your peace of mind, offering a direct path to fully understanding your benefits, as well as how to make the most of them.",
    icon: AcademicCapIcon,
  },
  {
    name: "Decide",
    description:
      "Work closely with experts you trust, eliminating uncertainty from the equation so that you can confidently make important decisions about your retirement.",
    icon: ListBulletIcon,
  },
  {
    name: "Act",
    description:
      "We design our software to be intuitive and empowering, which means your participation in the process feels natural and rewarding, rather than stressful.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Plans",
    description:
      "Enjoy the stucture and convenience of having detailed, easy-to-follow plans that are tailored specifically to your personal needs, complete with a visual representation of being on track.",
    icon: ShieldCheckIcon,
  },
];

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4x mx-auto text-center">
          <h2 className="text-xl font-semibold leading-7 text-blue-500">
            The Integrated Experience
          </h2>
          <p className="my-2 text-4xl font-bold tracking-tight text-gray-900">
            Everything you need in one place.
          </p>
          <p className="mx-auto mt-6 max-w-4xl border-b pb-8 text-lg leading-6 text-gray-600">
            Boise Benefits is an unparalleled resource for Idahoans looking to
            secure their financial futures. Our system is specifically tailored
            for public employees, as well as a handful of larger private
            employers in the Treasure Valley. <br />
            <br />
            Have a look at the summary below to learn more, or{" "}
            <b>select your organization to get started</b>.
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-6xl rounded-3xl p-6 shadow-xl">
          <dl className="grid max-w-xl grid-cols-1 gap-8 px-6 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-xl pl-16 hover:cursor-pointer hover:shadow"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-6 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
