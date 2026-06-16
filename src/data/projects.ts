import { IProjectData } from "../types/projects";

export const PROJECTS_LIST: IProjectData[] = [
    {
        projectSlug  : 'immersive-ecommerce-website',
        title: 'Immersive E-commerce Website',
        description: 'A highly responsive, adaptable e-commerce storefront designed to scale across retail, grocery, and wholesale domains. Developed utilizing Next.js, Tailwind CSS, and zustand with a strict focus on SEO optimization, lightning-fast load times, and intuitive user experience. \n\nThe frontend architecture and UI were specifically designed and structured to support the future integration of an agentic AI shopping assistant to drive sales and automate customer support.',
        thumbnail: {url:'/images/projects/immersive-website/thumbnail.webp', alt:'immersive-website-thumbnail'},
        images: [
            {url:'/images/projects/immersive-website/immersive-website-1.webp', alt:'immersive-website-1'},
            {url:'/images/projects/immersive-website/immersive-website-2.webp', alt:'immersive-website-2'},
            {url:'/images/projects/immersive-website/immersive-website-3.webp', alt:'immersive-website-3'},
        ],
        startDate: '2025-11-01',
        endDate: '2026-04-01',
        tags: ['Next.js', 'Agentic AI', 'Full-Stack', 'LLM', 'Tailwind', 'PyTorch', 'zustand','Framer Motion', 'NLP', 'Hugging Face'],
    },

    {
        projectSlug: 'arabic-data-filtering-desktop-app',
        title: 'Arabic Data Filtering Desktop App',
        description: 'This a side project that I have been working for someone where I decided to experiment with a new cross-platform \"programming language\" that I had never worked with before, to develop on a desktop application. Since I\'m comfortable with Python I favored the idea of using it for this app, hence why I developed it using the Python framework Kivy. Which spoiler alert! turned out to be a bad idea because it does not support Arabic natively and Kivy is really outdated. The project is a simple data filtering desktop application that allows the user to filter database data based on stakeholder requested criteria. It uses Arabic Reshaper and Bidi Algorithm libraries for the proper display of Arabic. Also the data (which is not included since it belongs to the stakeholder) had to be preprocessed using Python and Excel for the proper displaying and working of the app. Including the removal of Arabic diacritics. \n\nBut overall it was a great learning experience.',
        thumbnail: {url:'/images/projects/kivy-datafilter-app/kivy-datafiltering-project.webp', alt:'Arabic Data Filtering Desktop App'},
        images: [{url:'/images/projects/kivy-datafilter-app/kivy-datafiltering-project.webp', alt:'Arabic Data Filtering Desktop App'}],
        startDate: '2025-10-06',
        endDate: '2026-03-24',
        githubUrl: 'https://github.com/MohdAlabed/Arabic-DataFiltering-DApp-using-Kivy',
        tags: ['Kivy', 'Arabic NLP', 'Stand-Alone App', 'SQLite3', 'Python'],
    },

    {
        projectSlug: 'advanced-registration-website',
        title: 'Advanced Registration Website Leveraging a Recommendation System',
        description: 'A fully functional and responsive website that leverages a recommendation system which is capable of providing schedule suggestions for students using machine learning algorithms. The website was enhancements on the Jordan University registration\'s website that includes a page about courses and their description, a student\'s recommended schedule, and an algorithm that notifies admin users about graduates with conflicting essential to help the Admission and Registration department with the substitute courses problem which was a functionality not available at the university of Jordan at that time. As for the recommendation system which used hybrid filtering combining collaborative and content-based filtering to output a timed course schedule for every student. Here we explore the preparation and deployment stage in more depth: \n\n1. A matrix was created for the courses plan including general university courses to determine the prerequisite relationships between courses. Then a \'popularity\' vector is created scoring each course\'s importance based on the number courses they can open through the use of the Depth-First-Search algorithm. They were after scaled between zero and one to later be used in the optimization function. \n\n2. Courses\' descriptions were pre-processed by lowering cases, filling null values, tokenization, lemmatizing words, and removing stop words. \n\n3. Courses are split into clusters by first converting words into vectors using CountVectorizer then K-Mean clustering algorithm is applied to 5 clusters (determined through the use of the elbow method). By this content-based filtering was completed to later be used in the optimization function. \n\n4. Using a students\' grades dataset (provided by the Admission and Registration department) which only included students\' grades for the one semester of the summer term for 2022. For this to work properly courses had to be processed finding their prerequisites and giving them random character grades (matching the database). After that these character grades will be converted to their numerical values and scaled by adding one to be used as rankings. Pass and fail courses were not taken into account so to not affect the results negatively. Also if a student failed a course that course will be re-entered as an eligible course. \n\n5. After that, collaborative filtering for each student will be calculated using an item-based matrix using the Pearson correlation algorithm. The collaborative filtering values will be scaled between 0 to 1 to later be used in the optimization function as well. \n\n6. Here, the CVXPY optimization algorithm is used to find the optimal schedule for each student. After the admin uploaded the registration schedule from the website, the time slots for courses and their sections will be treated as Boolean set of decision variables determined by the eligible courses for each student. Popularity vector and collaborative filtering results will both act as an objective functions to be maximized. A semester allowed number of credit hours, one course per-timeslot, one section per course, and a section\'s capacity will act as the constraints. The previously created 5 clusters for BIT plan courses plus group for university obligatory and elective requirements, and another group for general courses creating a total of 7 groups will act as a soft constraint encouraging the solver to choose only one course from each group. \n\n7. The solver will output the optimal schedule for each student by iterating over all students. The algorithm can return two schedules for each student the optimal one plus an alternative one given the student the freedom of the choose on the website.',
        thumbnail: {url:'/images/projects/RecommendationSystemProject/thumbnail.webp', alt:'JU_logo'},
        images: [
            {url:'/images/projects/RecommendationSystemProject/recommendation-system1.webp', alt:'recommendation-system1'},
            {url:'/images/projects/RecommendationSystemProject/recommendation-system2.webp', alt:'recommendation-system2'},
            {url:'/images/projects/RecommendationSystemProject/recommendation-system3.webp', alt:'recommendation-system3'},
            {url:'/images/projects/RecommendationSystemProject/recommendation-system4.webp', alt:'recommendation-system4'},
        ],
        startDate: '2022-10-01',
        endDate: '2023-06-05',
        githubUrl: 'https://github.com/MohdAlabed/Advanced-Registration-Website',
        tags: ['Content-Based Filtering','Collaborative Filtering', 'AI', 'NLP', 'CVXPY', 'Full Stack', 'ASP.NET', 'Bootstrap', 'Microsoft SQL Server' ],
    },
]