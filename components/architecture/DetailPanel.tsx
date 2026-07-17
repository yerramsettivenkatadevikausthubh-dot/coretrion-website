"use client";

interface Props {
  item: any;
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

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div>
          <h3 className="text-cyan-400 font-bold text-xl mb-4">
            Specifications
          </h3>

          <ul className="space-y-3">
            {item.specifications.map((spec: string) => (
              <li
                key={spec}
                className="bg-white/5 rounded-xl p-3 border border-white/10"
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cyan-400 font-bold text-xl mb-4">
            Applications
          </h3>

          <ul className="space-y-3">
            {item.applications.map((app: string) => (
              <li
                key={app}
                className="bg-white/5 rounded-xl p-3 border border-white/10"
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