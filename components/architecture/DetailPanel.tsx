"use client";

interface DetailItem {
  title: string;
  description: string;
  specifications: string[];
  applications: string[];
}

interface Props {
  item: DetailItem;
}

export default function DetailPanel({ item }: Props) {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-black text-white">
        {item.title}
      </h2>

      <p className="mt-5 text-zinc-300 leading-8">
        {item.description}
      </p>

      <div className="grid gap-10 mt-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">
            Specifications
          </h3>

          <ul className="space-y-3">
            {item.specifications.map((spec) => (
              <li
                key={spec}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-cyan-400">
            Applications
          </h3>

          <ul className="space-y-3">
            {item.applications.map((app) => (
              <li
                key={app}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                {app}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}