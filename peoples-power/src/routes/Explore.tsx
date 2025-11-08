import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Explore() {
  const [searchParams] = useSearchParams();
  const searchedTopic = searchParams.get("topic");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const topicsData = [
    {
      topic: "Housing",
      summary: "Affordable housing initiatives and policies.",
      articles: [
        { title: "The Future of Affordable Housing", link: "#" },
        { title: "Housing Policies That Work", link: "#" },
      ],
    },
    {
      topic: "Public transit",
      summary: "Improving public transportation systems.",
      articles: [
        { title: "Innovations in Public Transit", link: "#" },
        { title: "Sustainable Transit Solutions", link: "#" },
      ],
    },
    {
      topic: "Public safety",
      summary: "Community safety and crime prevention.",
      articles: [
        { title: "Building Safer Communities", link: "#" },
        { title: "Crime Prevention Strategies", link: "#" },
      ],
    },
    {
      topic: "Education",
      summary: "Enhancing educational opportunities and resources.",
      articles: [
        { title: "Revolutionizing Education", link: "#" },
        { title: "Access to Quality Education", link: "#" },
      ],
    },
    {
      topic: "Environment",
      summary: "Sustainability and environmental protection efforts.",
      articles: [
        { title: "Protecting Our Planet", link: "#" },
        { title: "Green Energy Initiatives", link: "#" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-xl p-6 text-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Explore</h1>
        <p className="text-sm text-gray-300">Explore the topics you care about.</p>
      </header>

      {searchedTopic && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <p className="text-gray-300">
            Showing results for: <span className="font-bold">{searchedTopic}</span>
          </p>
        </div>
      )}

      <ul className="space-y-4">
        {topicsData.map(({ topic, summary, articles }) => (
          <li
            key={topic}
            className="rounded-lg p-4 shadow cursor-pointer"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}
            onClick={() => setExpandedTopic(expandedTopic === topic ? null : topic)}
          >
            <h3 className="text-lg font-semibold text-white">{topic}</h3>
            <p className="text-sm text-white">{summary}</p>

            {expandedTopic === topic && (
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {articles.map((article) => (
                  <div
                    key={article.title}
                    className="rounded bg-white p-3 shadow flex flex-col items-center"
                  >
                    <div className="h-28 w-full bg-gray-300 rounded mb-2"></div> {/* Placeholder for image */}
                    <h4 className="text-blue-700 font-semibold text-center text-sm">{article.title}</h4>
                    <p className="text-xs text-gray-600 text-center mt-1">Brief description of the article.</p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}