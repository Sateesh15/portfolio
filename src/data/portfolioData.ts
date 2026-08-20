import {
  PersonalProfile,
  SkillCategory,
  ExperienceItem,
  FeaturedProject,
  AICloudSpotlight,
  EducationItem,
  CertificationItem
} from '../types';

export const personalProfile: PersonalProfile = {
  name: 'Munnam Sateesh',
  preferredName: 'Sateesh',
  title: 'Java Full Stack Developer',
  secondaryTitle: 'Software Engineer',
  yearsOfExperience: 4,
  location: 'Hyderabad, India',
  summary:
    'Java Full Stack Developer with 4 years of experience building enterprise applications using Java, Spring Boot, Microservices, and REST APIs for U.S.-based clients. Experienced in backend development, API integration, authentication, role-based access control, production support, and application performance optimization. Skilled in React.js and Vue.js for frontend development, with hands-on experience in MySQL, MongoDB, JUnit, Mockito, Selenium, Postman, SonarQube, Splunk, AWS, Azure, and Azure OpenAI.',
  email: 'munnamsateesh3@gmail.com',
  phone: '+91 7675811508',
  linkedin: 'https://www.linkedin.com/in/sateesh-munnam-8ba81a243',
  github: 'https://github.com/Sateesh-Munnam',
  resumePath: `${import.meta.env.BASE_URL}resume/MY-Resume.pdf`,
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Frameworks',
    iconName: 'Server',
    description: 'Enterprise backend architectures, microservices, ORM, and high-throughput REST APIs',
    skills: [
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'JDBC',
      'API Integration',
    ],
  },
  {
    id: 'core-java',
    name: 'Languages & Core Java',
    iconName: 'Code2',
    description: 'Modern Java development standards, OOP principles, and clean functional coding',
    skills: [
      'Java 17',
      'Java 8',
      'OOP Principles',
      'Java Collections',
      'Stream API',
      'Lambda Expressions',
      'Multi-threading Basics',
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    iconName: 'Layout',
    description: 'Component-driven user interfaces, state management, and modern responsive designs',
    skills: [
      'React.js',
      'Vue.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational data modeling, NoSQL document stores, query optimization, and transaction handling',
    skills: [
      'MySQL',
      'MongoDB',
      'Oracle',
      'PostgreSQL',
      'JPA / Hibernate Mappings',
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & Observability',
    iconName: 'Cloud',
    description: 'Enterprise cloud infrastructure, telemetry, log analysis, and code quality pipelines',
    skills: [
      'AWS',
      'Azure',
      'Splunk (Log Analysis & Monitoring)',
      'SonarQube',
      'GitHub',
      'Bitbucket',
      'Maven',
    ],
  },
  {
    id: 'testing-tools',
    name: 'Testing & Tools',
    iconName: 'CheckCircle2',
    description: 'Automated test suites, API verification, regression testing, and agile tracking',
    skills: [
      'JUnit',
      'Mockito',
      'Vitest',
      'Selenium',
      'Postman',
      'Jira (Agile/Scrum)',
      'ServiceNow',
    ],
  },
  {
    id: 'identity-auth',
    name: 'Identity & Authentication',
    iconName: 'ShieldCheck',
    description: 'Enterprise identity security, single sign-on (SSO), and role-based access controls',
    skills: [
      'Azure Entra ID (Azure AD)',
      'MSAL (Microsoft Authentication Library)',
      'RBAC (Role-Based Access Control)',
      'OAuth2 / JWT Concepts',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'inu-tech',
    company: 'INU Technology Solutions',
    role: 'Software Engineer',
    period: 'Mar 2023 – Present',
    location: 'Hyderabad, India',
    isCurrent: true,
    summary:
      'Engineering mission-critical enterprise applications and microservices for U.S.-based utility leaders and internal AI platforms. Spearheading backend API design, authentication, observability, and full-stack feature delivery.',
    projects: [
      {
        name: 'Florida Power & Light (FPL) — Assist Portal, Streetlight Management & MESP',
        description:
          'Enterprise utility platforms supporting customer assistance programs, streetlight infrastructure management, and medically essential customer services.',
        technologies: ['Java 17', 'Spring Boot', 'Microservices', 'REST APIs', 'Vue.js', 'AWS', 'JUnit', 'Vitest', 'Splunk', 'Postman', 'Jira'],
        responsibilities: [
          'Developed scalable, high-throughput REST APIs using Java 17 and Spring Boot for utility service operations.',
          'Built responsive, accessible user interface workflows using Vue.js for customer and operator portals.',
          'Architected and implemented secure authentication and granular Role-Based Access Control (RBAC).',
          'Configured and integrated Splunk for centralized application logging, alert triggers, and real-time monitoring.',
          'Authored comprehensive unit and integration test suites using JUnit and Vitest to maintain high code reliability.',
          'Conducted end-to-end API validation and contract testing with Postman across integration environments.',
          'Drove application performance tuning, memory profiling, and rapid resolution of production incidents.',
          'Collaborated actively in sprint planning, retrospectives, and ticket tracking via Jira in an Agile/Scrum environment.',
        ],
      },
      {
        name: 'Central Hudson — Enterprise WebApp',
        description:
          'Enterprise web application modernization integrating utility backend microservices with enterprise SAP systems.',
        technologies: ['Vue.js', 'Backend REST APIs', 'SAP OData Services', 'Postman', 'ServiceNow', 'Jira'],
        responsibilities: [
          'Developed and enhanced enterprise web application interfaces using Vue.js connected to backend services.',
          'Integrated and consumed SAP OData enterprise services for real-time utility data exchange.',
          'Utilized Postman for extensive API verification, payload debugging, and contract consistency.',
          'Investigated, diagnosed, and resolved production incidents within strict SLA windows using ServiceNow.',
          'Participated in Agile sprint ceremonies and managed task deliverables through Jira.',
        ],
      },
      {
        name: 'Internal Project — AI Resume Intelligence Platform',
        description:
          'Full-stack AI-enabled recruitment and resume intelligence solution designed for intelligent parsing, semantic matching, and high-volume talent discovery.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Azure OpenAI', 'Azure Entra ID (Azure AD)', 'MSAL'],
        responsibilities: [
          'Architected and developed a full-stack AI-powered resume intelligence platform from requirements to deployment.',
          'Integrated Azure OpenAI models for structured resume information extraction, skill matching, and fit scoring.',
          'Engineered enterprise Single Sign-On (SSO) and access token flows using Azure Entra ID and MSAL.',
          'Implemented high-speed candidate filtering, multi-criteria search, and bulk resume ingestion pipelines.',
          'Designed interactive analytics dashboards for talent acquisition metrics and status tracking.',
        ],
      },
    ],
  },
  {
    id: 'avendata-tech',
    company: 'AvenData Technologies',
    role: 'Software Developer',
    period: 'Aug 2022 – Dec 2022',
    location: 'India',
    isCurrent: false,
    summary:
      'Contributed to MVC enterprise application development, database operations, backend logic, and automated quality assurance.',
    responsibilities: [
      'Developed core MVC application modules and backend business logic handling structured data workflows.',
      'Constructed database schemas, optimized SQL queries, and integrated persistence layers.',
      'Designed and executed automated functional test suites using Selenium WebDriver with Java.',
      'Participated in backend debugging, regression testing, and code quality reviews.',
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'fpl-assist-portal',
    title: 'FPL Assist Portal',
    clientOrContext: 'Florida Power & Light (FPL)',
    period: 'Enterprise Utility Project',
    badge: 'U.S. Enterprise Client',
    summary:
      'Comprehensive customer assistance and program enrollment portal enabling streamlined utility service support and account assistance.',
    description:
      'Developed robust backend REST services and responsive front-end components for Florida Power & Light. The portal empowers customers and representatives to process assistance applications, review eligibility rules, and manage account requests securely.',
    architectureOverview:
      'Spring Boot RESTful microservices architecture deployed on AWS cloud infrastructure, integrated with Splunk for audit logging, and paired with a Vue.js single-page application interface.',
    technologies: ['Java 17', 'Spring Boot', 'REST APIs', 'Vue.js', 'AWS', 'JUnit', 'Splunk', 'Postman'],
    contributions: [
      'Engineered scalable REST endpoints using Java 17 and Spring Boot for customer assistance requests.',
      'Built modular Vue.js components providing intuitive, multi-step workflow interfaces.',
      'Implemented robust authentication and granular role-based permissions for internal staff and customers.',
      'Configured Splunk dashboards and queries for log monitoring, error alerting, and diagnostics.',
      'Wrote comprehensive JUnit unit tests to ensure high test coverage and prevent regression bugs.',
    ],
    highlights: [
      'Java 17 & Spring Boot backend',
      'Vue.js dynamic interface',
      'Splunk centralized logging',
      'AWS cloud deployment',
    ],
    isPrivate: true,
  },
  {
    id: 'fpl-streetlight',
    title: 'Streetlight Management System',
    clientOrContext: 'Florida Power & Light (FPL)',
    period: 'Enterprise Utility Project',
    badge: 'U.S. Enterprise Client',
    summary:
      'Operational management and tracking system for large-scale municipal and residential streetlight infrastructure.',
    description:
      'An enterprise operations platform enabling utility personnel and field technicians to track streetlight asset lifecycles, maintenance orders, outages, and geographical status updates in real time.',
    architectureOverview:
      'Spring Boot backend handling asset domain logic, stateful outage transitions, and inventory management, communicating with AWS services and rendered through a high-performance Vue.js interface.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Vue.js', 'AWS', 'MySQL', 'Postman'],
    contributions: [
      'Developed core backend services in Spring Boot to process asset status transitions and maintenance requests.',
      'Integrated REST APIs with Vue.js frontend for real-time asset search, filtering, and status updates.',
      'Collaborated on database query optimization for fast retrieval of municipal asset inventories.',
      'Ensured resilient error handling and status synchronization across distributed services.',
    ],
    highlights: [
      'Enterprise asset tracking',
      'REST API architecture',
      'Vue.js operations dashboard',
      'AWS cloud integration',
    ],
    isPrivate: true,
  },
  {
    id: 'fpl-mesp',
    title: 'MESP (Medically Essential Service Program)',
    clientOrContext: 'Florida Power & Light (FPL)',
    period: 'Mission-Critical Program',
    badge: 'U.S. Enterprise Client',
    summary:
      'Critical service management platform ensuring uninterrupted utility reliability and emergency protocols for medically dependent accounts.',
    description:
      'A specialized, high-reliability platform dedicated to managing accounts requiring medically essential electric service. It ensures automated certification workflows, rapid emergency alerts, and strict compliance tracking.',
    architectureOverview:
      'Microservices-based Spring Boot architecture with isolated service domains for certification verification, alert notifications, and customer status management.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Vue.js', 'JUnit', 'Splunk'],
    contributions: [
      'Built decoupled microservices in Spring Boot for program verification, renewal tracking, and status checks.',
      'Implemented secure REST endpoints following strict compliance and data governance standards.',
      'Collaborated on Vue.js frontend interfaces to provide seamless customer verification steps.',
      'Set up proactive monitoring and error alerting with Splunk to maintain continuous service availability.',
    ],
    highlights: [
      'Microservices architecture',
      'High-reliability compliance standards',
      'Automated renewal workflows',
      'Proactive Splunk monitoring',
    ],
    isPrivate: true,
  },
  {
    id: 'ai-resume-platform',
    title: 'AI Resume Intelligence Platform',
    clientOrContext: 'Internal Enterprise Innovation',
    period: 'Mar 2026 – Apr 2026',
    badge: 'AI & Cloud Solution',
    summary:
      'Full-stack intelligent recruitment platform leveraging Azure OpenAI for automated resume parsing, candidate scoring, and talent matching.',
    description:
      'An end-to-end recruitment intelligence system built to streamline high-volume talent screening. The application extracts structured candidate skill profiles, generates semantic match scores against job descriptions, and provides recruitment analytics.',
    architectureOverview:
      'React frontend communicating with Node.js/Express API layer, MongoDB document store, Azure OpenAI GPT model endpoints, and secured via Azure Entra ID (Azure AD) with MSAL.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Azure OpenAI', 'Azure Entra ID', 'MSAL', 'TypeScript'],
    contributions: [
      'Architected the full-stack system layout connecting modern React UI with backend processing pipelines.',
      'Integrated Azure OpenAI endpoints for contextual resume parsing, entity extraction, and relevance scoring.',
      'Implemented enterprise Single Sign-On (SSO) and OAuth token verification using Azure Entra ID and MSAL.',
      'Constructed scalable candidate filtering, multi-tag search, and bulk resume batch processing modules.',
      'Created analytics dashboards for talent acquisition metrics, pipeline tracking, and candidate comparisons.',
    ],
    highlights: [
      'Azure OpenAI LLM integration',
      'Azure Entra ID SSO / MSAL',
      'Bulk processing pipeline',
      'MongoDB NoSQL data store',
    ],
    isPrivate: true,
  },
];

export const aiCloudSpotlights: AICloudSpotlight[] = [
  {
    title: 'Azure OpenAI & Generative AI Integration',
    category: 'AI',
    icon: 'Sparkles',
    description:
      'Hands-on experience integrating Azure OpenAI language models for unstructured text processing, intelligent document parsing, and semantic matching pipelines.',
    skills: ['Azure OpenAI', 'Prompt Engineering', 'Semantic Matching', 'Resume Parsing', 'JSON Schema Extraction'],
    keyHighlights: [
      'Engineered structured extraction pipelines from unstructured documents.',
      'Integrated secure API key and Managed Identity access to Azure AI endpoints.',
      'Built semantic match scoring and automated candidate ranking algorithms.',
    ],
  },
  {
    title: 'Enterprise Identity & Access Security',
    category: 'Security',
    icon: 'Shield',
    description:
      'Implementing enterprise-grade Single Sign-On (SSO), OAuth 2.0 authorization, and Role-Based Access Control (RBAC) in mission-critical applications.',
    skills: ['Azure Entra ID (Azure AD)', 'MSAL', 'Role-Based Access Control (RBAC)', 'Token Validation', 'OAuth 2.0'],
    keyHighlights: [
      'Secured enterprise applications using Azure Entra ID / Microsoft Authentication Library (MSAL).',
      'Enforced fine-grained role-based permissions across backend REST services and UI views.',
      'Standardized security token validation and session lifecycle management.',
    ],
  },
  {
    title: 'Enterprise Cloud & Microservices',
    category: 'Cloud',
    icon: 'Cloud',
    description:
      'Deploying and orchestrating Java & Spring Boot microservices on AWS and Azure cloud environments with high availability and scalability.',
    skills: ['AWS Services', 'Azure Cloud', 'Microservices Architecture', 'RESTful API Standards', 'Maven'],
    keyHighlights: [
      'Engineered modular, independently deployable Spring Boot microservices.',
      'Configured cloud environment properties, connection pooling, and resilient API gateways.',
      'Applied 12-factor application design principles for cloud portability.',
    ],
  },
  {
    title: 'Observability, Quality & Production Support',
    category: 'Observability',
    icon: 'Activity',
    description:
      'Comprehensive telemetry, centralized logging with Splunk, automated SonarQube quality gates, and SLA-driven production issue resolution.',
    skills: ['Splunk Monitoring', 'SonarQube Quality Gates', 'ServiceNow Incident Mgmt', 'JUnit & Mockito', 'Postman'],
    keyHighlights: [
      'Constructed Splunk search queries, dashboards, and automated anomaly alerts.',
      'Maintained high code quality and test coverage using SonarQube, JUnit, and Mockito.',
      'Diagnosed and resolved critical production incidents within enterprise SLA targets.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Mechanical Engineering',
    institution: 'Jawaharlal Nehru Technological University (JNTU)',
    location: 'Kakinada, India',
  },
];

export const certificationData: CertificationItem[] = [
  {
    name: 'Java Full Stack Development & Spring Boot',
    issuer: 'Professional Enterprise Training',
    status: 'Completed',
    topics: ['Java 17', 'Spring Boot', 'Microservices', 'REST APIs', 'React / Vue.js', 'JPA/Hibernate'],
  },
  {
    name: 'Cloud & Enterprise Architecture Practice',
    issuer: 'Continuous Professional Development',
    status: 'Active Practitioner',
    topics: ['AWS & Azure Services', 'Azure OpenAI', 'Azure Entra ID / MSAL', 'Splunk Observability'],
  },
];

export const codeSampleSnippet = `// Production-Grade Spring Boot REST Controller
@RestController
@RequestMapping("/api/v1/utility/services")
@Slf4j
public class UtilityServiceController {

    private final CustomerServiceProgram serviceProgram;

    public UtilityServiceController(CustomerServiceProgram serviceProgram) {
        this.serviceProgram = serviceProgram;
    }

    @GetMapping("/{accountId}/eligibility")
    @PreAuthorize("hasRole('OPERATOR') or hasAuthority('SCOPE_read:utility')")
    public ResponseEntity<EligibilityResponse> checkEligibility(
            @PathVariable @NotBlank String accountId,
            @RequestParam(defaultValue = "STANDARD") ProgramTier tier) {
        
        log.info("Evaluating program tier [{}] for account [{}]", tier, accountId);
        EligibilityResponse response = serviceProgram.evaluateAccount(accountId, tier);
        return ResponseEntity.ok(response);
    }
}`;
