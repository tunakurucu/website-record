import freddieImg from '../../../img folder/freddie.jpg';
import aliceImg from '../../../img folder/alice.jpg';
import matthewImg from '../../../img folder/matthew.jpg';

const USE_MOCK = true;

export async function fetchPeoplePower(q) {
  if (USE_MOCK) return mockPeoplePower(q);

  // Python integration would go here when needed
  throw new Error("Python integration not yet implemented");
}

async function mockPeoplePower(q) {
  const topic = q.topic || "affordable housing";
  return {
    brief: {
      topic,
      summary:
        `Nashville has seen rising ${topic} challenges with increased demand and limited supply. Recent proposals include zoning changes, incentives for mixed income developments, and public-private partnerships.`,
      keyPoints: [
        "City council considered inclusionary zoning pilots",
        "Nonprofits expanding housing vouchers",
        "Transit oriented development tied to affordability targets",
      ],
      sources: [
        {
          title: "Metro Council advances housing package",
          url: "https://example.com/housing",
          outlet: "Local News",
          publishedAt: "2025-11-15T00:00:00.000Z",
        },
        {
          title: "Nashville affordability report",
          url: "https://example.com/report",
          outlet: "Civic Lab",
          publishedAt: "2025-11-15T00:00:00.000Z",
        },
      ],
    },
    candidates: [
      {
        id: "c1",
        name: "Freddie O'Connell",
        party: "Democratic",
        photoUrl: freddieImg,
        stanceTag: "Supports",
        pastActions: [
          {
            text: "Advocated for transit-oriented development",
            sources: [],
          },
        ],
        plans: [
          {
            text: "Increase affordable housing near transit corridors",
            sources: [],
          },
        ],
      },
      {
        id: "c2",
        name: "Alice Rolli",
        party: "Independent",
        photoUrl: aliceImg,
        stanceTag: "Mixed",
        pastActions: [
          {
            text: "Worked on community zoning advisory boards",
            sources: [],
          },
        ],
        plans: [
          {
            text: "Pilot public-private partnership for workforce housing",
            sources: [],
          },
        ],
      },
      {
        id: "c3",
        name: "Matthew Wiltshire",
        party: "Nonpartisan",
        photoUrl: matthewImg,
        stanceTag: "Unknown",
        pastActions: [
          {
            text: "Served on neighborhood planning committees",
            sources: [],
          },
        ],
        plans: [
          {
            text: "Support small-scale infill development",
            sources: [],
          },
        ],
      },
    ],
    events: [
      {
        id: "e1",
        title: "Affordable Housing Rally",
        startsAt: "2025-11-15T00:00:00.000Z",
        venue: "City Hall",
        address: "1 Public Square #303, Nashville, TN",
        type: "Rally",
        link: "https://www.citizenportal.ai/articles/2127867/Tennessee/Nashville-residents-rally-against-controversial-housing-development-on-Wimbledon-Road",
      },
      {
        id: "org1",
        title: "Nashville Housing Coalition",
        type: "Organization",
        description: "Local nonprofit providing tenant support, technical assistance to developers, and community resources for affordable housing.",
        contact: {
          website: "https://nashvillehousingcoalition.org",
          email: "info@nashvillehousingcoalition.org",
          phone: "(615) 555-0123"
        }
      },
    ],
    voting: {
  registerUrl: "https://vote.gov/register",
  deadline: "2025-11-15T00:00:00.000Z",
  pollingLookupUrl: "https://www.nashville.gov/departments/elections/register-vote",
  notes: "Bring a valid ID to vote.",
    },
  };
}

