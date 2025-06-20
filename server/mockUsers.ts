import { UpsertUser } from "../shared/schema";

export const mockUsers: UpsertUser[] = [
  {
    id: "admin_user",
    username: "admin",
    email: "admin@travelapp.com",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    isActive: true,
    lastLoginAt: new Date("2025-06-04T10:30:00Z"),
    createdAt: new Date("2024-01-15T09:00:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj" // hashed "admin123"
  },
  {
    id: "user_001",
    username: "sarah_travel",
    email: "sarah.johnson@email.com",
    firstName: "Sarah",
    lastName: "Johnson",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-03T14:20:00Z"),
    createdAt: new Date("2024-02-10T11:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_002",
    username: "mike_explorer",
    email: "mike.chen@email.com",
    firstName: "Mike",
    lastName: "Chen",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-05-30T16:45:00Z"),
    createdAt: new Date("2024-03-05T13:15:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_003",
    username: "emma_wanderer",
    email: "emma.davis@email.com",
    firstName: "Emma",
    lastName: "Davis",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-05-28T09:10:00Z"),
    createdAt: new Date("2024-04-12T10:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_004",
    username: "alex_nomad",
    email: "alex.rodriguez@email.com",
    firstName: "Alex",
    lastName: "Rodriguez",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-02T12:30:00Z"),
    createdAt: new Date("2024-05-18T14:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_005",
    username: "lisa_globe",
    email: "lisa.white@email.com",
    firstName: "Lisa",
    lastName: "White",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-04-15T08:20:00Z"),
    createdAt: new Date("2024-06-20T16:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_006",
    username: "david_backpack",
    email: "david.brown@email.com",
    firstName: "David",
    lastName: "Brown",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-01T11:15:00Z"),
    createdAt: new Date("2024-07-08T12:00:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_007",
    username: "anna_voyage",
    email: "anna.miller@email.com",
    firstName: "Anna",
    lastName: "Miller",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-03-22T15:40:00Z"),
    createdAt: new Date("2024-08-14T09:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_008",
    username: "james_adventure",
    email: "james.wilson@email.com",
    firstName: "James",
    lastName: "Wilson",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-05-25T13:50:00Z"),
    createdAt: new Date("2024-09-30T11:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_009",
    username: "maria_journey",
    email: "maria.garcia@email.com",
    firstName: "Maria",
    lastName: "Garcia",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-03T17:25:00Z"),
    createdAt: new Date("2024-10-15T14:10:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_010",
    username: "kevin_wanderlust",
    email: "kevin.thompson@email.com",
    firstName: "Kevin",
    lastName: "Thompson",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-10T14:30:00Z"),
    createdAt: new Date("2024-11-05T10:15:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_011",
    username: "sophie_explorer",
    email: "sophie.martin@email.com",
    firstName: "Sophie",
    lastName: "Martin",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-09T16:45:00Z"),
    createdAt: new Date("2024-12-01T09:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_012",
    username: "ryan_nomadic",
    email: "ryan.clark@email.com",
    firstName: "Ryan",
    lastName: "Clark",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-04-20T11:20:00Z"),
    createdAt: new Date("2025-01-10T13:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_013",
    username: "jessica_globe",
    email: "jessica.taylor@email.com",
    firstName: "Jessica",
    lastName: "Taylor",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-06-08T08:15:00Z"),
    createdAt: new Date("2025-02-14T15:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_014",
    username: "daniel_adventure",
    email: "daniel.lewis@email.com",
    firstName: "Daniel",
    lastName: "Lewis",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-11T12:00:00Z"),
    createdAt: new Date("2025-03-05T11:10:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_015",
    username: "rachel_backpack",
    email: "rachel.walker@email.com",
    firstName: "Rachel",
    lastName: "Walker",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-07T19:30:00Z"),
    createdAt: new Date("2025-04-12T14:25:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_016",
    username: "chris_roamer",
    email: "chris.hall@email.com",
    firstName: "Chris",
    lastName: "Hall",
    role: "travel_agent",
    isActive: false,
    lastLoginAt: new Date("2025-03-15T10:45:00Z"),
    createdAt: new Date("2024-05-20T16:00:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_017",
    username: "natalie_voyage",
    email: "natalie.young@email.com",
    firstName: "Natalie",
    lastName: "Young",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-06T15:20:00Z"),
    createdAt: new Date("2024-06-30T12:40:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_018",
    username: "ben_discover",
    email: "ben.king@email.com",
    firstName: "Ben",
    lastName: "King",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-06-05T09:50:00Z"),
    createdAt: new Date("2024-07-15T11:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_019",
    username: "ashley_wander",
    email: "ashley.wright@email.com",
    firstName: "Ashley",
    lastName: "Wright",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-04T13:15:00Z"),
    createdAt: new Date("2024-08-22T10:05:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_020",
    username: "tyler_trek",
    email: "tyler.lopez@email.com",
    firstName: "Tyler",
    lastName: "Lopez",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-02-28T14:40:00Z"),
    createdAt: new Date("2024-09-10T13:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_021",
    username: "megan_journey",
    email: "megan.green@email.com",
    firstName: "Megan",
    lastName: "Green",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-10T11:25:00Z"),
    createdAt: new Date("2024-10-05T15:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_022",
    username: "ethan_explore",
    email: "ethan.adams@email.com",
    firstName: "Ethan",
    lastName: "Adams",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-09T18:10:00Z"),
    createdAt: new Date("2024-11-18T09:15:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_023",
    username: "olivia_roam",
    email: "olivia.baker@email.com",
    firstName: "Olivia",
    lastName: "Baker",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-06-08T16:35:00Z"),
    createdAt: new Date("2024-12-03T12:50:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_024",
    username: "jordan_nomad",
    email: "jordan.gonzalez@email.com",
    firstName: "Jordan",
    lastName: "Gonzalez",
    role: "finance",
    isActive: false,
    lastLoginAt: new Date("2025-01-15T10:20:00Z"),
    createdAt: new Date("2025-01-01T14:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_025",
    username: "chloe_adventure",
    email: "chloe.nelson@email.com",
    firstName: "Chloe",
    lastName: "Nelson",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-07T12:45:00Z"),
    createdAt: new Date("2025-02-20T11:15:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_026",
    username: "noah_wanderer",
    email: "noah.carter@email.com",
    firstName: "Noah",
    lastName: "Carter",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-11T08:30:00Z"),
    createdAt: new Date("2025-03-10T16:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_027",
    username: "zoe_globetrotter",
    email: "zoe.mitchell@email.com",
    firstName: "Zoe",
    lastName: "Mitchell",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-06T14:55:00Z"),
    createdAt: new Date("2025-04-01T13:40:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_028",
    username: "lucas_expedition",
    email: "lucas.perez@email.com",
    firstName: "Lucas",
    lastName: "Perez",
    role: "support",
    isActive: false,
    lastLoginAt: new Date("2025-04-10T17:20:00Z"),
    createdAt: new Date("2024-07-28T10:50:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_029",
    username: "grace_travel",
    email: "grace.roberts@email.com",
    firstName: "Grace",
    lastName: "Roberts",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-05T15:40:00Z"),
    createdAt: new Date("2024-08-15T12:25:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_030",
    username: "caleb_journey",
    email: "caleb.turner@email.com",
    firstName: "Caleb",
    lastName: "Turner",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-10T09:15:00Z"),
    createdAt: new Date("2024-09-05T14:35:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_031",
    username: "isabella_voyage",
    email: "isabella.phillips@email.com",
    firstName: "Isabella",
    lastName: "Phillips",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-09T13:20:00Z"),
    createdAt: new Date("2024-10-12T11:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_032",
    username: "mason_explore",
    email: "mason.campbell@email.com",
    firstName: "Mason",
    lastName: "Campbell",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-03-08T16:10:00Z"),
    createdAt: new Date("2024-11-20T15:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_033",
    username: "lily_wander",
    email: "lily.parker@email.com",
    firstName: "Lily",
    lastName: "Parker",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-06-08T11:50:00Z"),
    createdAt: new Date("2024-12-25T09:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_034",
    username: "hunter_roam",
    email: "hunter.evans@email.com",
    firstName: "Hunter",
    lastName: "Evans",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-07T17:25:00Z"),
    createdAt: new Date("2025-01-15T13:10:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_035",
    username: "aria_nomadic",
    email: "aria.edwards@email.com",
    firstName: "Aria",
    lastName: "Edwards",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-11T10:40:00Z"),
    createdAt: new Date("2025-02-28T14:55:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_036",
    username: "grayson_trek",
    email: "grayson.collins@email.com",
    firstName: "Grayson",
    lastName: "Collins",
    role: "travel_agent",
    isActive: false,
    lastLoginAt: new Date("2025-04-05T12:30:00Z"),
    createdAt: new Date("2025-03-18T16:45:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_037",
    username: "maya_adventure",
    email: "maya.stewart@email.com",
    firstName: "Maya",
    lastName: "Stewart",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-06T08:45:00Z"),
    createdAt: new Date("2025-04-20T11:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_038",
    username: "carter_discover",
    email: "carter.sanchez@email.com",
    firstName: "Carter",
    lastName: "Sanchez",
    role: "support",
    isActive: true,
    lastLoginAt: new Date("2025-06-10T15:15:00Z"),
    createdAt: new Date("2025-05-02T12:35:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_039",
    username: "stella_globe",
    email: "stella.morris@email.com",
    firstName: "Stella",
    lastName: "Morris",
    role: "finance",
    isActive: true,
    lastLoginAt: new Date("2025-06-09T14:20:00Z"),
    createdAt: new Date("2025-05-15T10:50:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_040",
    username: "phoenix_wanderer",
    email: "phoenix.rogers@email.com",
    firstName: "Phoenix",
    lastName: "Rogers",
    role: "user",
    isActive: true,
    lastLoginAt: new Date("2025-06-11T16:30:00Z"),
    createdAt: new Date("2025-06-01T09:25:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_041",
    username: "aurora_expedition",
    email: "aurora.cook@email.com",
    firstName: "Aurora",
    lastName: "Cook",
    role: "travel_agent",
    isActive: true,
    lastLoginAt: new Date("2025-06-08T13:45:00Z"),
    createdAt: new Date("2024-06-10T15:30:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  },
  {
    id: "user_042",
    username: "sage_roamer",
    email: "sage.bailey@email.com",
    firstName: "Sage",
    lastName: "Bailey",
    role: "user",
    isActive: false,
    lastLoginAt: new Date("2025-02-14T11:15:00Z"),
    createdAt: new Date("2024-07-05T14:20:00Z"),
    password: "$2a$10$K8qF2mXrNvHxW8ZmkJvNfOmG8EzYhQbRzK4PvNfMjJzYmJ4QvNfMj"
  }
];