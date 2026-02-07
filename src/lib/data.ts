import { KnowledgeCard, AlphabetEntry } from "./types";

export const knowledgeCards: KnowledgeCard[] = [
  {
    id: "cog-1",
    title: "The Mental Architecture of Golf",
    subtitle: "Understanding how elite golfers think",
    category: "cognition",
    content:
      "Golf is fundamentally a mental game masquerading as a physical one. The cognitive demands of processing wind speed, slope gradients, and distance calculations while maintaining emotional equilibrium make golf one of the most psychologically complex sports. Pre-shot routines serve as cognitive anchors, creating neural pathways that automate decision-making under pressure. Visualization techniques used by touring professionals activate the same motor cortex regions as physical execution.",
    keyPoints: [
      "Pre-shot routines reduce cognitive load by 40%",
      "Visualization activates mirror neurons for motor planning",
      "Emotional regulation separates amateurs from professionals",
      "Decision fatigue increases stroke count after hole 12",
    ],
    quiz: [
      {
        id: "cog-1-q1",
        question: "What is the primary benefit of a pre-shot routine?",
        options: [
          "It looks professional on camera",
          "It reduces cognitive load through automation",
          "It intimidates opponents",
          "It increases swing speed",
        ],
        correctIndex: 1,
      },
      {
        id: "cog-1-q2",
        question: "Visualization techniques activate which brain region?",
        options: [
          "Occipital lobe only",
          "Hippocampus",
          "Motor cortex (same as physical execution)",
          "Cerebellum exclusively",
        ],
        correctIndex: 2,
      },
    ],
    imageAlt: "Neural pathways illustration for golf cognition",
  },
  {
    id: "cog-2",
    title: "Course Reading & Strategy",
    subtitle: "The chess match beneath the fairway",
    category: "cognition",
    content:
      "Strategic course management is the art of playing the course, not the scorecard. Elite golfers construct a mental map of each hole before their first swing, identifying optimal landing zones, bailout areas, and risk-reward calculations. Understanding pin positions relative to hazards, green contours, and prevailing wind patterns creates a decision tree that simplifies in-the-moment choices. The best strategists play to their strengths while respecting the course architect's intentions.",
    keyPoints: [
      "Course management accounts for 30% of scoring improvement",
      "Aim for the center of greens to reduce three-putt probability",
      "Wind affects a 7-iron shot by up to 15 yards laterally",
      "Slope reading accuracy improves with systematic green mapping",
    ],
    quiz: [
      {
        id: "cog-2-q1",
        question: "What percentage of scoring improvement comes from course management?",
        options: ["10%", "20%", "30%", "50%"],
        correctIndex: 2,
      },
      {
        id: "cog-2-q2",
        question: "Where should you generally aim on approach shots?",
        options: [
          "Directly at the pin always",
          "Center of the green",
          "The nearest bunker",
          "The shortest route over water",
        ],
        correctIndex: 1,
      },
    ],
    imageAlt: "Strategic course layout with landing zones",
  },
  {
    id: "act-1",
    title: "The Biomechanics of the Swing",
    subtitle: "Kinetic chain mastery from ground up",
    category: "action",
    content:
      "The golf swing is a complex kinetic chain that begins with ground reaction forces and culminates in clubhead speed exceeding 100 mph for professionals. The sequence of hip rotation, torso coiling, shoulder turn, arm extension, and wrist release must fire in precise order with millisecond timing. Modern 3D motion capture reveals that the most efficient swings create a separation angle of 45 degrees between hip and shoulder rotation at the top of the backswing. This X-factor stretch is the primary generator of power.",
    keyPoints: [
      "Ground reaction forces initiate the downswing sequence",
      "The X-factor (hip-shoulder separation) generates 60% of power",
      "Wrist lag maintains stored energy until the release point",
      "Balance throughout the swing predicts consistency more than speed",
    ],
    quiz: [
      {
        id: "act-1-q1",
        question: "What initiates the downswing in the kinetic chain?",
        options: [
          "Arm movement",
          "Ground reaction forces",
          "Shoulder rotation",
          "Wrist release",
        ],
        correctIndex: 1,
      },
      {
        id: "act-1-q2",
        question: "What is the X-factor in the golf swing?",
        options: [
          "Club head speed at impact",
          "The angle of the clubface",
          "Hip-shoulder separation angle",
          "The depth of the backswing",
        ],
        correctIndex: 2,
      },
    ],
    imageAlt: "Golf swing biomechanics diagram",
  },
  {
    id: "act-2",
    title: "Short Game Artistry",
    subtitle: "Where scoring actually happens",
    category: "action",
    content:
      "The short game accounts for approximately 65% of all strokes in a round of golf, yet receives a fraction of practice time for most amateurs. Chipping, pitching, and putting demand a different skill set than full swings: touch, feel, and distance control replace raw power. The bounce angle of a wedge, the grain direction of Bermuda grass, and the moisture content of the green all factor into shot selection within 50 yards. Masters champions consistently rank in the top 10 for scrambling percentage.",
    keyPoints: [
      "65% of strokes occur within 100 yards of the green",
      "Putting accounts for roughly 40% of total strokes",
      "Bounce angle selection prevents fat chips on tight lies",
      "Green reading combines slope analysis with grain direction",
    ],
    quiz: [
      {
        id: "act-2-q1",
        question: "What percentage of strokes occur within 100 yards?",
        options: ["35%", "45%", "55%", "65%"],
        correctIndex: 3,
      },
      {
        id: "act-2-q2",
        question: "What prevents fat chip shots on tight lies?",
        options: [
          "A stronger grip",
          "Proper bounce angle selection",
          "Faster swing speed",
          "Standing closer to the ball",
        ],
        correctIndex: 1,
      },
    ],
    imageAlt: "Short game technique demonstration",
  },
  {
    id: "crs-1",
    title: "Links Golf: Where It All Began",
    subtitle: "The spiritual home of the game",
    category: "course",
    content:
      "Links courses represent golf in its most natural form, shaped by wind, rain, and time rather than bulldozers. Built on the sandy linksland between arable farmland and the sea, these courses feature firm, fast-running fairways, deep pot bunkers, and undulating greens that reject anything but the most precise approaches. The Old Course at St Andrews, with its shared fairways and hidden bunkers, has been played for over 600 years and remains the ultimate test of imaginative golf.",
    keyPoints: [
      "Links courses use natural terrain with minimal artificial shaping",
      "Firm conditions favor low, running approach shots",
      "Pot bunkers penalize wayward shots severely",
      "Wind management is the defining skill on links courses",
    ],
    quiz: [
      {
        id: "crs-1-q1",
        question: "What defines the terrain of a links course?",
        options: [
          "Mountain terrain",
          "Sandy linksland between farmland and sea",
          "Dense forest corridors",
          "Desert landscape",
        ],
        correctIndex: 1,
      },
      {
        id: "crs-1-q2",
        question: "What type of approach shots do firm links conditions favor?",
        options: [
          "High, soft landing shots",
          "Low, running shots",
          "Maximum backspin shots",
          "Lob wedge shots",
        ],
        correctIndex: 1,
      },
    ],
    imageAlt: "Aerial view of a links golf course",
  },
  {
    id: "crs-2",
    title: "Augusta National: A Design Masterclass",
    subtitle: "Where every contour tells a story",
    category: "course",
    content:
      "Augusta National Golf Club, designed by Alister MacKenzie and Bobby Jones, is perhaps the most strategically layered course in existence. Every hole offers multiple routes of varying risk and reward, with pin positions that can transform a birdie hole into a survival test. The course's signature features include the undulating greens of Amen Corner (holes 11-13), where water guards three consecutive holes, and the dramatic downhill approach on the par-3 12th across Rae's Creek. The annual Masters Tournament has produced some of golf's most iconic moments.",
    keyPoints: [
      "MacKenzie and Jones designed strategic options on every hole",
      "Amen Corner (11-13) is considered the toughest three-hole stretch",
      "Green speeds at Augusta average 13+ on the Stimpmeter",
      "Course knowledge compounds over years of Masters participation",
    ],
    quiz: [
      {
        id: "crs-2-q1",
        question: "Which holes comprise Amen Corner at Augusta National?",
        options: [
          "Holes 1-3",
          "Holes 7-9",
          "Holes 11-13",
          "Holes 15-17",
        ],
        correctIndex: 2,
      },
      {
        id: "crs-2-q2",
        question: "Who co-designed Augusta National with Alister MacKenzie?",
        options: [
          "Jack Nicklaus",
          "Bobby Jones",
          "Arnold Palmer",
          "Ben Hogan",
        ],
        correctIndex: 1,
      },
    ],
    imageAlt: "Augusta National aerial perspective",
  },
  {
    id: "soc-1",
    title: "Golf Etiquette & Traditions",
    subtitle: "The unwritten code of the fairway",
    category: "social",
    content:
      "Golf etiquette is the invisible framework that makes the game possible. Unlike most sports, golf relies on self-regulation and mutual respect rather than referees. The traditions of replacing divots, raking bunkers, repairing ball marks, and maintaining pace of play are not mere formalities but essential components of course preservation and enjoyment. The handshake on the 18th green, removing one's hat, and the tradition of buying drinks after a hole-in-one connect modern players to centuries of sporting heritage.",
    keyPoints: [
      "Golf is largely self-officiated under the Rules of Golf",
      "Pace of play is the most important courtesy to fellow golfers",
      "Repairing ball marks helps the next 50 golfers who putt over them",
      "The honor system in golf reflects its Scottish origins of integrity",
    ],
    quiz: [
      {
        id: "soc-1-q1",
        question: "What is considered the most important courtesy in golf?",
        options: [
          "Wearing proper attire",
          "Maintaining pace of play",
          "Having the newest equipment",
          "Keeping a low handicap",
        ],
        correctIndex: 1,
      },
      {
        id: "soc-1-q2",
        question: "Why is golf largely self-officiated?",
        options: [
          "There aren't enough referees",
          "It's based on an honor system reflecting its heritage of integrity",
          "The rules are too simple to need referees",
          "Players can't be penalized anyway",
        ],
        correctIndex: 1,
      },
    ],
    imageAlt: "Golfers shaking hands on the 18th green",
  },
  {
    id: "soc-2",
    title: "The Business of Golf",
    subtitle: "Networking on the nineteenth hole",
    category: "social",
    content:
      "More business deals have been closed on golf courses than in boardrooms. The four-hour round provides a unique social laboratory where character, integrity, and temperament are revealed under low-stakes pressure. How someone handles a bad bounce, a lost ball, or a missed putt reveals more about their character than any interview. Corporate golf events, charity tournaments, and club memberships create networking opportunities that transcend industry boundaries. The nineteenth hole tradition of post-round socializing cements relationships forged over 18 holes.",
    keyPoints: [
      "A round of golf reveals character traits over 4+ hours",
      "68% of executives say golf has helped close business deals",
      "Charity golf tournaments raise over $4 billion annually in the US",
      "Club memberships provide cross-industry networking advantages",
    ],
    quiz: [
      {
        id: "soc-2-q1",
        question: "What does a round of golf uniquely reveal about a person?",
        options: [
          "Their physical fitness",
          "Their character and temperament under pressure",
          "Their financial status",
          "Their fashion sense",
        ],
        correctIndex: 1,
      },
      {
        id: "soc-2-q2",
        question: "What is the 'nineteenth hole' in golf tradition?",
        options: [
          "A secret bonus hole",
          "The practice putting green",
          "Post-round socializing at the clubhouse",
          "The driving range",
        ],
        correctIndex: 2,
      },
    ],
    imageAlt: "Business meeting at the clubhouse",
  },
];

export const defaultAlphabetEntries: AlphabetEntry[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  .split("")
  .map((letter) => ({
    letter,
    courseName: "",
    location: "",
    completed: false,
    badgeEarned: false,
  }));

export const alphabetCourseHints: Record<string, { name: string; location: string }> = {
  A: { name: "Augusta National", location: "Augusta, Georgia" },
  B: { name: "Bethpage Black", location: "Farmingdale, New York" },
  C: { name: "Cypress Point", location: "Pebble Beach, California" },
  D: { name: "Doral Blue Monster", location: "Miami, Florida" },
  E: { name: "Erin Hills", location: "Erin, Wisconsin" },
  F: { name: "Firestone South", location: "Akron, Ohio" },
  G: { name: "Gleneagles Kings", location: "Perthshire, Scotland" },
  H: { name: "Harbour Town", location: "Hilton Head, South Carolina" },
  I: { name: "Inverness Club", location: "Toledo, Ohio" },
  J: { name: "Jumeirah Golf Estates", location: "Dubai, UAE" },
  K: { name: "Kiawah Island Ocean", location: "Kiawah Island, South Carolina" },
  L: { name: "Links at Spanish Bay", location: "Pebble Beach, California" },
  M: { name: "Muirfield", location: "Gullane, Scotland" },
  N: { name: "North Berwick", location: "East Lothian, Scotland" },
  O: { name: "Oakmont Country Club", location: "Oakmont, Pennsylvania" },
  P: { name: "Pebble Beach", location: "Pebble Beach, California" },
  Q: { name: "Quail Hollow Club", location: "Charlotte, North Carolina" },
  R: { name: "Royal Melbourne West", location: "Melbourne, Australia" },
  S: { name: "St Andrews Old Course", location: "St Andrews, Scotland" },
  T: { name: "TPC Sawgrass", location: "Ponte Vedra Beach, Florida" },
  U: { name: "Ury Estate Golf", location: "Stonehaven, Scotland" },
  V: { name: "Valhalla Golf Club", location: "Louisville, Kentucky" },
  W: { name: "Winged Foot West", location: "Mamaroneck, New York" },
  X: { name: "Xandu Golf Club", location: "Bali, Indonesia" },
  Y: { name: "Yeamans Hall Club", location: "Hanahan, South Carolina" },
  Z: { name: "Zollikon Golf Club", location: "Zurich, Switzerland" },
};

export const stageInfo = {
  cognition: {
    title: "Cognition",
    subtitle: "Master the Mental Game",
    description: "Understand the psychology, strategy, and decision-making that separates great golfers from good ones.",
    icon: "brain",
  },
  action: {
    title: "Action",
    subtitle: "Perfect Your Technique",
    description: "From biomechanics to short game artistry, develop the physical skills that translate knowledge into results.",
    icon: "target",
  },
  course: {
    title: "Course",
    subtitle: "Know the Grounds",
    description: "Study the world's greatest courses and learn how design philosophy shapes strategic play.",
    icon: "map",
  },
  social: {
    title: "Social",
    subtitle: "Embrace the Culture",
    description: "Golf is a social sport rooted in tradition. Learn the etiquette, business, and community of the game.",
    icon: "users",
  },
} as const;
