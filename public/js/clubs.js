// Array of club objects containing their name, teacher, description, and optional image
const fishersClubs = [
    {
        name: "2000s FUN",
        teacher: "Erin Knapp",
        description: "This is a throwback to childhood – with little-to-no technology. We’re going to play board games, do crafts, work on puzzles, and use sidewalk chalk to create a stress-free environment for students to gather and socialize for fun! The goal is social interaction and creating a sense of belonging at FHS.",
        meetingInfo: "We will meet twice a month, after school (3:00 to 4:00pm). See the schedule here:",
        image: "" // Add image URL if available
    },
    {
        name: "3D PRINTING CLUB",
        teacher: "Renee Isom",
        description: "We will meet to plan and execute 3D printing projects using the equipment in the media center. We will also fundraise to afford more printing materials. Open to everyone, regardless of experience!",
        meetingInfo: "TBD",
        image: "" // Add image URL if available
    },
    {
        name: "ACADEMIC AMBUSH TEAM",
        teacher: "Alex Smith and Katie Hagerty",
        description: "The Academic Ambush is comprised of three teams: Quiz Bowl, Spell Bowl, and Academic Super Bowl. Quiz Bowl is a team-based, Jeopardy-like trivia competition. Spell Bowl is a team-based spelling bee. Academic Super Bowl is a multidisciplinary team competition unified by them. See Mr. Smith or Ms. Hagerty for information on all three!",
        meetingInfo: "All three teams have different seasons. Spell Bowl will begin late August. Quiz Bowl will begin mid-September. Academic Super Bowl will begin late January. Contact Ms. Hagerty for more information about quiz bowl meeting times. Contact Mr. Smith for more information about meeting times for Spell Bowl and Academic Super Bowl.",
        image: "" // Add image URL if available
    },
    {
        name: "African Association Culture Club",
        teacher: "Harold Spooner",
        description: "This club is a community space for any Africans (or students of African descent) or anyone who simply wants to learn more about African culture. It’s open to all. The goal is to bring people together for community and education. We can learn from each other, share cultural foods, watch African movies, find ways to help local African businesses, etc.",
        meetingInfo: "We will meet once a month after school",
        image: "" // Add image URL if available
    },
    {
        name: "AMERICAN SIGN LANGUAGE (ASL) CLUB",
        teacher: "Angela V. Farrand",
        description: "ASL Club members will expand their knowledge of ASL and Deaf culture through ASL related activities and by attending events for the Deaf in our local community.",
        meetingInfo: "Meetings will be the 1st and 3rd Tuesday of each month ...",
        image: ""
    },
    {
        name: "ANIMAL ALLIANCE",
        teacher: "Tammie Spencer",
        description: "If you are an animal lover, then this club is for you! Animal Alliance is a club that gives students the opportunity to make a difference in our community by helping animals. Club members 16 years or older will be eligible for volunteering at the Hamilton County Humane Society once a month for a couple of hours. Members under 16 will have the opportunity to design projects that bring awareness to the help that animals in our community need.",
        meetingInfo: "Call out meeting will be held in B212 on August 28th, 3:00 - 4:00 pm.",
        image: ""
    },
    {
        name: "ANIMATION CLUB",
        teacher: "Glenn Seland",
        description: "The Animation Club will allow students to explore different animation mediums and learn about the different aspects of animation production. We will start with learning how to animate, but in the end, we hope to create a 3-5 minute animated short film to submit to the All-American High School Film Festival in early March 2023.",
        meetingInfo: "Mondays, 3:00 - 4:00 PM",
        image: ""
    },
    {
        name: "ART CLUB",
        teacher: "Lisa Brown",
        description: "For all who love art – making, collaborating, discussing, sharing art of all kinds. This club is about fellowship and making friends who share that common interest. Mostly, it’s FUN. Contact Mrs. Lisa Brown at lgbrown@hse.k12.in.us",
        meetingInfo: "2nd and 4th Mondays",
        image: ""
    },
    {
        name: "ASIAN STUDENT UNION",
        teacher: "Scott Black",
        description: "The Asian Student Union is a group of students seeking to learn about and celebrate the many countries and cultures from the continent of Asia.",
        meetingInfo: "One Friday a month. Watch for Instagram Post to announce a Friday meeting!",
        image: ""
    },
    {
        name: "AURA8 DANCE CLUB",
        teacher: "Taylor Meador",
        description: "If you love K-pop and also love to dance, Aura8 is a great space for you! Whether you have 10 years of dance experience or only one month, you can join this club! We’re here to learn and have fun while preparing to showcase our talent.",
        meetingInfo: "Every Wednesday from 3:00 to 5:00 pm Room B204",
        image: ""
    },
    {
        name: "BEST BUDDIES",
        teacher: "Mary McGuire",
        description: "FHS Best Buddies Program is all about the inclusion of people with disabilities in all aspects of society. We strive to increase students’ understanding and comfort level around people with disabilities. We hope to develop lifelong friendships, social supports, opportunities, and resources for people with disabilities.",
        meetingInfo: "TBD",
        image: ""
    },
    {
        name: "BETTER HELP CLUB",
        teacher: "Shelley Lidy",
        description: "The goal of this club is to help students at FHS with eating disorders feel accepted and supported. All are welcome to attend. We hope to connect students with external resources, such as support groups, health care information, etc. We want to create a safe place and will engage in a variety of activities and conversations that promote better wellness.",
        meetingInfo: "TBD",
        image: ""
    },
    {
        name: "BIBLE STUDY GROUP",
        teacher: "Jacob Kapitan",
        description: "In this club, we will go through various books of the Bible using a set of guiding questions to help understand what they are saying. We will reflect on the questions individually before discussing as a group to help each other create a shared understanding. We will try to incorporate games and multimedia elements whenever possible!",
        meetingInfo: "Every other Thursday at 7:45 AM",
        image: "" // Add image URL if available
    },
    {
        name: "BRING CHANGE TO MIND",
        teacher: "Chelley Gastineau",
        description: "Bring Change to Mind's High School Program gives teens a platform to share their voices and raise awareness around mental health. Our goal is to empower students to educate one another and to foster a culture of peer support about mental health at FHS. The club organizes thematic monthly meetings or community outreach, maintains the Wellness Room in Guidance, and plans and staffs the student-run event, Hope for Happiness, which occurs every May in the Nickel Plate District.",
        meetingInfo: "TBD",
        image: "" // Add image URL if available
    },
    {
        name: "CHAMPIONS TOGETHER CLUB",
        teacher: "Patrick Schooley",
        description: "Champions Together Club will promote servant leadership among student athletes by engaging the whole school to provide & promote unified sports activities, competitions and clinics. Teams include Unified Bocce, Unified Flag Football, Unified Track & Field and Unified Bowling. Also included are basketball and kickball. The goal is to have representatives from each varsity athletic team and performing arts on planning committees.",
        meetingInfo: "TBD",
        image: "" // Add image URL if available
    },
    {
        name: "CHEMISTRY CLUB",
        teacher: "Lance Kuhn",
        description: "Come join us for a variety of fun science demos and labs that ordinarily would not be covered in Chemistry classes. We will also have guest speakers in September and November. We’re just getting started, so come join us and help the club grow!",
        meetingInfo: "First semester: Call-out Aug. 23; Sept. 26 during TI; Oct. 25 before school; Nov. 14 during TI; Dec. 6 before school",
        image: "" // Add image URL if available
    },
    {
        name: "CHESS CLUB",
        teacher: "Brigham French",
        description: "Chess club is a place to learn the basics of the game in a friendly environment and a place to play competitively with other students.",
        meetingInfo: "Every Red Tuesday after school in B116 until 4pm",
        image: "" // Add image URL if available
    },
    {
        name: "CLUB MED / HOSA (“Health Occupations Students of America”)",
        teacher: "Sarah Walker",
        description: "HOSA is a club that explores a wide range of occupations to give students a broad view of the medical community. We also try to give students some experience with medicine, by having a variety of speakers each year and a couple of field trips to relevant sites in the city (ex. The Medical Academic Center for a cadaver lab, Medical History Museum, etc.)",
        meetingInfo: "Wednesdays at 7:45am in A217 (Note: we do not meet every Wed)",
        image: "" // Add image URL if available
    },
    {
        name: "COMPUTER SCIENCE CLUB",
        teacher: "Ryan Harris",
        description: "Computer Science Club is a forum for students interested in computer programming, hardware, software, or other CS topics to connect with students who have similar interests and learn from each other.",
        meetingInfo: "TBD",
        image: "" // Add image URL if available
    },
    {
        name: "CREATING ACTION THROUGH SERVICE (C.A.T.S.)",
        teacher: "Renee Vanlandingham",
        description: "CATS is a student-led service club focused on developing resources and in-classroom activities for teachers, as well as creating service day camps for the HSE e-Learning day. K-4th grade students attend to learn foundational information for service-based learning and complete their own service projects.",
        meetingInfo: "Meetings will be Monday at 7:45am, Mz. Vanlandingham room (B236)",
        image: "" // Add image URL if available
    },
    {
        name: "CRICKET CLUB",
        teacher: "Xavier Halder",
        description: "In this club, our goal is to teach and get better at Cricket! We welcome anyone who wants to learn or get better at the game; no experience is required. Ultimately, once we have a team established, the goal is to compete against other local school-based cricket teams.",
        meetingInfo: "TBD",
        image: "" // Add image URL if available
    },

    
        {
            name: "CROCHET CLUB",
            teacher: "Heather Ferguson",
            description: "All are welcome at Crochet club! We meet in the mornings to talk, meet new friends, and crochet. We teach beginners how to crochet and make little squares to form blankets, which we eventually donate to a local organization in need. The club provides crochet hooks and yarn. Great opportunity to meet people and de-stress!",
            meetingInfo: "Every other Friday @ 7:30 AM in H212",
            image: "" // Add image URL if available
        },
        {
            name: "CRU",
            teacher: "Tammy Snyder",
            description: "Everyone is on a spiritual journey, and Cru is here to help you on yours. Cru is a Christian-based organization where students come together and spend time learning more about faith, no matter what your spiritual background is. Follow us on Instagram as we keep you connected with our meetings and sign up for text updates to let us know if you are interested in joining our club and to get our text updates.",
            meetingInfo: "Monday Nights, 7:17pm - 8:45pm in the CCA starting Aug 21st",
            image: "" // Add image URL if available
        },
        {
            name: "CULTURAL CONNECTIONS CLUB",
            teacher: "Renee Isom",
            description: "Our club focuses on learning about various cultures present at Fishers High School. We work together in groups to create presentations demonstrating traditional games, dances, and other aspects of a chosen country’s culture. We also share what we learn about celebrations and enjoy food together. Our long-term goal is to host an international fair at Fishers High School and in the meantime we learn, share, and have fun. Students can join at anytime, even if you missed the call-out meeting!",
            meetingInfo: "TBD",
            image: "" // Add image URL if available
        },
        {
            name: "DANCE TEAM",
            teacher: "Riley Clarey",
            description: "The official competitive and performance based team representing Fishers High School. It is our mission to show pride in our team by upholding tradition, honoring teammates, and committing to make this an exemplary program each year. We strive to be an example to others by promoting community service and leadership within the town of Fishers. As a competitive team, we will compete as part of the Indiana High School Dance Team Association (IHSDTA) and perform at various school sporting events and functions (football, basketball, spirit events, etc.). We will work to push and support each other to reach higher expectations than previous years and above all recognize that this team is not built by one person alone but by the group as a whole.",
            meetingInfo: "Call out Meetings are held in the spring and our tryout week is typically held in April/early May. Tryout registration information will be available in the spring on all social media platforms. Team practices are Monday/Wednesday 6:00-9:00 PM at FHS from July-March along with weekend performances/competitions.",
            image: "" // Add image URL if available
        },
        {
            name: "DECA",
            teacher: "Braden Tribolet and Jeremy Guler",
            description: "DECA prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management in high schools and colleges around the globe. There are many ways to be involved with DECA for the social aspects, networking, leadership, scholarship opportunities, competition (district, state and international), community service, etc.",
            meetingInfo: "Call-Out Meeting: Wednesday, September 14th at 7:30 am in Cafe A",
            image: "" // Add image URL if available
        },
        {
            name: "DESI (INDIAN) STUDENT ASSOCIATION",
            teacher: "Ryan Harris",
            description: "TBD.",
            meetingInfo: "TBD",
            image: "" // Add image URL if available
        },
        {
            name: "DISNEY CLUB",
            teacher: "Kristin Marr",
            description: "Love everything Disney? Want a fun club to join? Just want to hang out and play games, do trivia, and watch movies? Disney Club is the club for you! We play Disney-themed games, engage in Disney trivia, play/take Disney-themed quizzes, watch Disney movies, read scripts from Disney movies, talk about Disney, and even sing Disney karaoke!",
            meetingInfo: "Call out meeting will be August 26 from 3:10 to 4:10 in the CCA",
            image: "" // Add image URL if available
        },
        
            {
                name: "DO SOMETHING CLUB",
                teacher: "Suzie Huppenthal",
                description: "This club will be dedicated to the website. This organization provides many different opportunities for serving communities and provides action plans for seeing projects through. We will be doing our part to better the world. We will attempt to engage in a different campaign each meeting, with the goal of collecting donations for various causes. This club will be student-run (but supervised by a teacher).",
                meetingInfo: "Every other Wednesday after school (3:00 to 4:00pm)",
                image: "" // Add image URL if available
            },
            {
                name: "DRAMA CLUB",
                teacher: "Emma Rund and Andy Smith",
                description: "Drama Club is the organization for students who are involved or want to be involved in the extracurricular theatre program at FHS, whether onstage or behind-the-scenes. Drama Club helps support Theatre Fishers productions and meets independently of those rehearsals every other Friday from 3:05-4:00.",
                meetingInfo: "CALLOUT MEETING for Drama Club is Aug 25th and 10th 3:00pm to 3:40pm in the Blackbox Theatre (G167).",
                image: "" // Add image URL if available
            },
            {
                name: "DUNGEONS & DRAGONS CLUB",
                teacher: "Steven Curtis and Jacob Kapitan",
                description: "Adventurers Needed! All are welcome to join in on the fun, playing one of the most popular table-top role playing games. If you’ve never played, no problem! We would love to teach you how. If you are an experienced player, we are always in need of students to help DM and run a group through an adventure. We use 5th edition D&D materials. There is no requirement to purchase books since the basic rules for D&D play and character creation are available for free online.",
                meetingInfo: "Club meets every other Tuesday after school until 4:30. Actual dates are available on the Dungeons and Dragons Club Canvas page.",
                image: "" // Add image URL if available
            },
            {
                name: "E-SPORTS CLUB",
                teacher: "Jacob Kapitan",
                description: "E-Sports Club is a place where you can connect and play with fellow students who take an interest in E-Sports. Join to find a team of friends to play in the competitive scene of whichever game you have an interest in or just join for casual gaming.",
                meetingInfo: "TBD",
                image: "" // Add image URL if available
            },
            {
                name: "ECONOMICS CLUB",
                teacher: "Dave Turner",
                description: "Members of the economics club meet to learn economics beyond what is taught in the classroom and to prepare for spring economics competitions.",
                meetingInfo: "TBD",
                image: "" // Add image URL if available
            },
            {
                name: "EMPOWER HER: SELF-DEFENSE CLUB",
                teacher: "Jeniffer Powell",
                description: "Empower Her Self-Defense Club focuses on empowering female students (although all are welcome) by building meaningful connections and building confidence through self-defense techniques. Guest speakers will also be invited to provide instruction for members and to provide more information on self-defense, empowerment, and confidence. Although the club is targeted toward female students, anyone who wants to learn about self-defense and empowerment is welcome.",
                meetingInfo: "TBD",
                image: "" // Add image URL if available
            },
            {
                name: "ENL TUTORING CLUB",
                teacher: "Alisa Vaughn",
                description: "Math tutors will teach ENL students math in different languages in order to help students who need additional assistance. Subjects covered will include Algebra I, Algebra II, Geometry, and Pre-Calculus.",
                meetingInfo: "Thursdays, 3:00 to 4:00 PM",
                image: "" // Add image URL if available
            },
            {
                name: "ETHICS BOWL & PHILOSOPHY CLUB",
                teacher: "Chris Edwards",
                description: "Philosophy Club is centered around civil discussions about ethical problems and questions. Most of the club is spent preparing for the Ethics Bowl Competition at the Prindle Institute for Ethics at DePauw University in the beginning of the second semester; thus, the club is considered to the FHS Ethics Bowl team. Join the Hamilton Southeastern Ethics Bowl Team, as well. Email Dr. Edwards with questions.",
                meetingInfo: "TBD",
                image: "" // Add image URL if available
            },
            {
                name: "EUCHRE CLUB",
                teacher: "Terri Thompson-Mejias",
                description: "Euchre Club is a great way to end the school week! If you like this traditional midwestern card game, this is the club for you. We meet every final RED day of the week. Everyone is welcome, from beginner to advanced players. Can’t wait to see you there!",
                meetingInfo: "We meet at the tables outside H205 at 7:30 a.m. on RED days. Check social media for dates.",
                image: "" // Add image URL if available
            },
           
                {
                    name: "FELLOWSHIP OF CHRISTIAN ATHLETES (FCA)",
                    teacher: "Lauren Votaw",
                    description: "F.C.A. is open to any student looking for fellowship with other students who enjoy sports through games, a devotional, and prayer. Donuts are always free!",
                    meetingInfo: "Kick-Off Meeting Wednesday, August 21st at 7:45 AM in Main Gym.. We will meet every Wednesday beginning August 21st . FCA will not meet on October 16th , November 27th or December 18th.",
                    image: "" // Add image URL if available
                },
                {
                    name: "FILM CLUB",
                    teacher: "Glenn Seland",
                    description: "Come to our club and you will never watch movies the same again! Go deeper into film ideas and think like a film critic...or just come and hang out! Film club is where students gather to watch movies from different eras and genres and discuss them in a relaxed, fun environment. While watching, we discuss all the interesting things the filmmakers were doing in creating the film. We want to know what the filmmaker wanted to tell the story in a specific way.  Films are selected regularly by students and range from blockbuster films to classics.  Films are all capped by a PG13 level rating.",
                    meetingInfo: "TBD",
                    image: "" // Add image URL if available
                },
                {
                    name: "Fishers swimming tigers",
                    teacher: "idk",
                    description: "swimming in the water like tigers",
                    meetingInfo: "every day of the week 3:15-:530 basically",
                    image: "https://www.bing.com/images/search?view=detailV2&ccid=MztT9JvC&id=4B05A1D17FDCC41369C787009CB0844709B723E9&thid=OIP.MztT9JvCqRAG1yvrNUlcIgHaJQ&mediaurl=https%3a%2f%2fstatic.wixstatic.com%2fmedia%2f9e3042_b2df1104fad14e688d0b391914fc7691%7emv2.jpg%2fv1%2ffill%2fw_980%2ch_1226%2cal_c%2cq_85%2cusm_0.66_1.00_0.01%2cenc_auto%2fFAST+Logos+7.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.333b53f49bc2a91006d72beb35495c22%3frik%3d6SO3CUeEsJwAhw%26pid%3dImgRaw%26r%3d0&exph=1226&expw=980&q=fast+tigers+swimming+logo&simid=608053347285737218&FORM=IRPRST&ck=C4D40FC609AF354164CE395BC9A47D2E&selectedIndex=12&itb=0" // Add image URL if available
                },
                {
                    name: "FISHERS FIRE & EMERGENCY SERVICES CAREER EXPLORATION",
                    teacher: "Ashley Heckly",
                    description: "The goal of this club is to offer a space, within school, for students to have an opportunity to learn more about a career in the fire service. Through speakers, demonstrations, hands-on activities, and field trips, the students will interact with the different divisions within the fire department.",
                    meetingInfo: "TBD",
                    image: "" // Add image URL if available
                },
                {
                    name: "FISHERS STEP CLUB",
                    teacher: "Rachael Allen",
                    description: "Stepping, is a showcase for exhibiting individual style and teamwork. It’s a coordinated dance-like performance that blends African folk traditions with popular. The body is used to make sounds through clapping, stomping, vocal exchanges, and sharp movements.",
                    meetingInfo: "TBD",
                    image: "" // Add image URL if available
                },
                {
                    name: "FISHERS TUTORS",
                    teacher: "Kitti Gal and Renée Vanlandingham",
                    description: "Fishers Tutors is a group of students who want to help tutor students at Fishers Junior High and possibly the other two junior highs so they are ready for high school their freshman year. Anyone can join, but we are asking for students who are strong in a certain subject area. Subjects needed include math, English, social studies, and science. If you are interested, email a sponsor or Sharanya Srivastava, President of Fishers Tutors: srivasha Note: This opportunity counts toward service hours! We especially need students to volunteer second semester.",
                    meetingInfo: "We meet on Tuesdays at FHS for quick check-ins (3:00 - 3:30) as tutors; we will tutor junior high students on Thursdays (4:00 - 4:45 PM).",
                    image: "" // Add image URL if available
                },
                {
                    name: "FRENCH CLUB",
                    teacher: "Jessica Geisinger and Dahnya Chop",
                    description: "We meet to eat! Every meeting involves food. Some of our big events of the year are: a crêpe party, a murder mystery dinner, a French yule log cake party, a French cooking night, a fondue party, French breakfast and more.",
                    meetingInfo: "Pay dues to your French teacher.",
                    image: "" // Add image URL if available
                },
                {
                    name: "FSN BROADCASTING (HS SPORTS NETWORK)",
                    teacher: "Ben Beasley and Jenna Petroff",
                    description: "FSN is our FHS sports network that does live streaming and broadcasting of select FHS sporting events. There are several different roles to be played within the organization including broadcasting, player/coach interviews, camera work, production and design, creative - social media, and more.",
                    meetingInfo: "Please e-mail sponsors for information to join the club!",
                    image: "" // Add image URL if available
                },
                {
                    name: "FUTURE BLACK LEADERS (FBL)",
                    teacher: "Renee Isom (library) and Nawla Williams (deans’ office)",
                    description: "The mission of Future Black Leaders (FBL) is to radiate excellence, promote racial equity, and empower black leaders.",
                    meetingInfo: "FBL meets Weds. Talk to the club sponsors",
                    image: "" // Add image URL if available
                },
                
                    {
                        name: "FUTURE FARMERS OF AMERICA (FFA)",
                        teacher: "Samuel Lawrence",
                        description: "We are an agricultural career-based leadership organization. We travel around the state and country showcasing our career skills in animal, plant, and natural resource career development events.",
                        meetingInfo: "Practices Tuesday-Thursday after school for Career Development Events",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "GARDENING CLUB",
                        teacher: "Lori Kixmiller",
                        description: "The Gardening Club aims to connect students with nature and the community through gardening. The Gardening Club will plant two seasons of plants (one in early fall and one in late spring), and what is grown will be donated to local charities or people in need. It mostly focuses on planting vegetables and fruits but could also branch out to plant other things like trees and bushes. The club will also work with the FHS Environmental Club on various activities, including planting trees, organizing a compost bin, making sure the garden uses environmentally-friendly fertilizer, etc. Overall, the Gardening Club accepts everyone who wants a closer relationship with nature and the community in an environmentally friendly way through gardening.",
                        meetingInfo: "TBD",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "GERMAN CLUB",
                        teacher: "Robin Geisinger and Corbin Mathias",
                        description: "The Fishers German Club is here to promote the further exploration of all things German. Examples are through movies, games, field trips, guest speakers, celebration of holidays and community volunteering.",
                        meetingInfo: "TBD /will be announced in class and via Remind",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "GIRLS WHO CODE",
                        teacher: "Natalie Thomen",
                        description: "TBD",
                        meetingInfo: "TBD",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "GSA (GENDER & SEXUALITY ALLIANCE)",
                        teacher: "TBD",
                        description: "The mission of the FHS Gender & Sexuality Alliance (GSA) is to foster pride, create a safe harbor, empower the lonely, fortify the weak, and engage in learning about LGBTQIA+ history and current events. We believe a diverse school community prepares us for life in a dynamic world, and we celebrate what unites us and what makes us unique. We support the intersectionality of all identity affinity clubs that strive for diversity, equity, and inclusion.",
                        meetingInfo: "We meet once per month, on Wednesday from 3:05-4:05 P.M. in A105 (The schedule is posted outside A105.) Call-out meeting Wed, August 30.",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "HARRY POTTER CLUB",
                        teacher: "Stephanie Gutting",
                        description: "The Harry Potter Club celebrates the world of Harry Potter. We read and discuss the books and movies of Harry Potter. We will discuss character developments and major plot events. We will do crafts, play trivia games, Sorting Hat, learn some “spells and potions,” and mostly have fun. Both new and old readers are welcome!",
                        meetingInfo: "Once per month after school in room A102",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "HISPANIC HERITAGE CLUB",
                        teacher: "Sharon Placzek",
                        description: "This is a club for Hispanic students (or those of Hispanic descent) or those who simply want to learn more about Hispanic cultures. This club is made to motivate the members to explore different Hispanic cultures and the Spanish language while connecting with the Fishers community.",
                        meetingInfo: "Once a month after school",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "IMPROV CLUB",
                        teacher: "Kelsey Ondish",
                        description: "TBD",
                        meetingInfo: "TBD",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "INTRAMURALS (BASKETBALL)",
                        teacher: "Jim Werbe",
                        description: "This program is run entirely through HSE S.P.O.R.T.S. The opportunity guarantees a player 8 officiated games, a team t-shirt, a season-ending bracket tournament with Champions and Runners-up awards. There are two co-ed leagues with four divisions: 9th & 10th grade advanced (competitive), 9th & 10th grade recreation, 11th & 12th grade advanced (competitive), and 11th & 12th grade recreation.",
                        meetingInfo: "TBD",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "K-POP CLUB",
                        teacher: "Taylor Meador",
                        description: "Informal meetings of like-minded individuals gathering to watch YouTube videos, play video games, learn and choreograph dances, and enjoy each other’s company while obsessing over all things K-Pop. The club also has a dance division, Aura8, that learn several routines each year in hopes of performing in front of audiences.",
                        meetingInfo: "Callout Where: B204, When: Thursday, August 22, 3-4:15",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "KEY CLUB",
                        teacher: "Jessica White",
                        description: "JOIN ANYTIME! It’s never too late to start volunteering! Key Club is an international service club for leaders and good citizens! Members of the Key Club are informed of volunteer opportunities in the community, and they are responsible for getting ten service hours in Key Club-sponsored activities. Mini-service projects are completed at each meeting, and leadership opportunities are available to those looking to get further involved in the club after joining.",
                        meetingInfo: "WHERE: LGI; WHEN: Second Friday of every month, 7:45-8:15 am",
                        image: "" // Add image URL if available
                    },
                    {
                        name: "LATINO STUDENT UNION",
                        teacher: "Terri Thompson-Mejias",
                        description: "An aspiring community for all and any who identifies as Spanish or Latino (or anyone else who wants to learn about these cultures). We want this club to be more of a union / gathering place and a place to build community. We plan to bring in Latino speakers and connect with our culture.",
                        meetingInfo: "Every other week, on Wednesdays, from 3-4 pm",
                        image: "" // Add image URL if available
                    },
                        {
                            name: "LITERARY MAGAZINE: THE MONTAGE",
                            teacher: "Alexis Barfield",
                            description: "A collaborative group of writers, thinkers, publications, and artists working on their own projects and helping each other get ready to publish them.",
                            meetingInfo: "Every Tuesday of every month after school in room A212",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MATH TEAM",
                            teacher: "Erin Ingwersen and Becky Hufty",
                            description: "The FHS Math Team participates in a number of math contests both at FHS and local colleges throughout the school year. The Math Team welcomes any level of student who likes math and encourages everyone to engage in mathematical problem solving.",
                            meetingInfo: "Call-out meeting - Wed., Aug. 21, 7:45am, H222; All other meetings: - Wednesdays, 7:45 - 8:15am, Room H222",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MILLION MEAL MOVEMENT CLUB",
                            teacher: "Kate Young",
                            description: "This club will focus on finding a way to involve students in helping food banks and the underprivileged. We will hold multiple fundraisers yearly, so that the student body can still contribute even if they are not full-time members of the club. Trips to various food banks, packaging and delivering food, and maintaining period stations in all unisex and women’s bathrooms will be our main objectives.",
                            meetingInfo: "Every other Wednesday, after school",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MOCK TRIAL",
                            teacher: "Corbin Mathias",
                            description: "Take on the role of a witness, a lawyer, or a defendant and compete against other schools in a REAL courtroom with a REAL judge presiding. The team that makes the most compelling argument for their side wins! Perfect for anyone interested in acting, law, and having fun. FHS fields both a Varsity and a JV team.",
                            meetingInfo: "2024 Callout Meetings (attend one): – Wednesday August 21, 7:55am in H120– Wednesday August 21, 3:00pm in H12– Thursday August 22, 7:55am in H120– Thursday, August 22, 3:00 pm in H120. 2024 Tryouts: Wednesday September 4 & Thursday September 5, before and after school in H120.",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MODEL UNITED NATIONS",
                            teacher: "Jennifer Gabbard and Jenna Pritchard",
                            description: "Model United Nations is an opportunity for students to apply their knowledge and skills in a real-world situation. Students learn and become “delegates” to various committees within the United Nations and then role-play through the procedures, debates, and negotiations that take place during UN meetings. During regular meetings and at optional competitions (both local and out-of-state), delegates work together to develop resolutions that solve a particular problem or provide new solutions to existing concerns. The skills necessary to do well in Model UN come from all disciplines, and no previous experience is required. Students share one common trait: they care and/or want to know more about the world around them.",
                            meetingInfo: "Callout meeting is Tuesday, August 27th, at 3pm in the LGI room (near FH1). We will continue to meet every Tuesday in the LGI room from 3:00-4:00 pm. Prior attendance isn’t necessary--join us!",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MUSIC & SOUND RECORDING CLUB",
                            teacher: "Ray Masterson",
                            description: "Write, record and enjoy music.",
                            meetingInfo: "Red Day Wednesdays 3PM - 4:30PM",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "MUSLIM STUDENT ASSOCIATION (MSA)",
                            teacher: "Matt Bockenfeld",
                            description: "The MSA is an organization devoted to activating the Muslim students in FHS via service and activism, educating both Muslims and people of other faiths about Islam, and cultivating a better environment for students.",
                            meetingInfo: "Meet every other Wednesday (starting September 1) in B230",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "NATIONAL HONOR SOCIETY",
                            teacher: "Beth Schulhof and Sarah Druelinger",
                            description: "Service is an intricate part of membership in The National Honor Society. Our chapter organizes one service project each semester, runs the annual FHS No Shave November, and sponsors a family. The chapter donates all money raised to different organizations in or around our community every year. This society is only for juniors and seniors. The application process starts in February (for the following year).",
                            meetingInfo: "TBD",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "ORCHESTRA CLUB",
                            teacher: "Susan Lyons and Julie Armey",
                            description: "This club accepts anyone that plays an orchestral instrument (winds and percussion included). We will perform for a nursing home in December, and with other students from the district in the spring. The club has the potential to have masterclasses and technique lessons. The club will also have social events.",
                            meetingInfo: "Red Mondays from 3:15 to 4:00pm in F137",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "PEP BAND",
                            teacher: "Chad Kohler and Elijah Gardner",
                            description: "Pep Band plays at 10-14 varsity basketball home games each year. Any band student can join to play high-energy music!",
                            meetingInfo: "Basketball season (selected home games November-March)",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "PICKLEBALL CLUB",
                            teacher: "Beth Schulhof",
                            description: "Club participants will play pickleball! While it is meant for experienced players, we will also provide some instruction each session for those who wish to learn the game’s basics. The club will provide pickleball nets, as well as court markers, paddles, and balls. Games will be played according to official pickleball rules.",
                            meetingInfo: "New Aux. gym Tuesdays 3-4pm Fall: Sept 3- Oct. 8 Spring : April 15- May 20",
                            image: "" // Add image URL if available
                        },
                        {
                            name: "PING PONG CLUB",
                            teacher: "Sarah Druelinger",
                            description: "An easy going opportunity to play ping pong!",
                            meetingInfo: "Upstairs H-meetings TBD",
                            image: "" // Add image URL if available
                        },
                            {
                                name: "POKEMON CLUB",
                                teacher: "Jacob Kapitan",
                                description: "This club is for students who want to meet to play Pokemon together! Students should have access to a Nintendo device with at least 1 Pokemon game (recommended: Switch). We will have competitive tournaments (singles and doubles, hide & seek, Guess Who, etc.). We may also do some activities with Pokemon cards.",
                                meetingInfo: "Every Friday, from 4:00 to 5:00 pm",
                                image: "" // Add image URL if available
                            },
                            {
                                name: "POKER CLUB",
                                teacher: "Bill Buckman",
                                description: "This club will meet Wednesday mornings (see dates below) to play variations of the traditional game, Poker. In Poker club, no gambling is involved. Instead, members will play recreationally, with allergy-safe candy as a prize. In the first few meetings of the year, we will lead instructive games that will teach everyone the game, and then we will evolve into more of a competitive structure. The poker chips, playing cards, etc. will be supplied by the two presidents of the club.",
                                meetingInfo: "Meeting dates: 2/7, 2/21, 3/6, 3/20, 4/10, 4/24, 5/1,and 5/22, 7:30-8:15 AM, Room B111",
                                image: "" // Add image URL if available
                            },
                            {
                                name: "PUNJABI CULTURE CLUB (PCC)",
                                teacher: "Matt Stahl",
                                description: "Punjabi Culture Club (PCC) is a club that teaches about the culture of the Punjab region. The Punjab region is an area located in northern India and into Pakistan. In PCC we cover language, dancing, games, and do other things native to this region.",
                                meetingInfo: "Club meetings are usually every red week on Wednesdays from 3:00 to 4:00 pm in room H105.",
                                image: "" // Add image URL if available
                            },
                            {
                                name: "RED CROSS CLUB",
                                teacher: "Kelsey Ondish",
                                description: "Red Cross Club provides students with an opportunity to serve their community alongside their friends. Students will have access to mission-related activities in their community, as well as training and leadership development opportunities. Students will also be able to participate in projects ranging from blood drives to disaster preparedness education.",
                                meetingInfo: "TBD",
                                image: "" // Add image URL if available
                            },
                            {
                                name: "RILEY DANCE MARATHON",
                                teacher: "Danielle Goodwin and Natalie Thomen",
                                description: "Fishers Dance Marathon is a student driven organization, focusing on yearlong fundraising that benefits Riley Hospital for Children in Indianapolis. This organization was started in 2008, raising $6,400 to 2019, when we raised over $114,000. With all proceeds specifically going towards children's cancer research. The year culminates in a 6-hour dance marathon event, held in the CCA of Fishers High School. This is a magical, emotional and life-changing night for the student body, community, and Riley families. They get together to share stories, laughter and tears. Dances will be taught, awareness will be raised, and the understanding of empathy and philanthropy will be present “For The Kids” at Riley Hospital.",
                                meetingInfo: "Meet before school throughout the year - look at our Canvas/Remind 101s/Social Media for specific dates and upcoming events",
                                image: "" // Add image URL if available
                            },
                                {
                                    name: "ROBOTICS TEAM",
                                    teacher: "Jeff Fronius",
                                    description: "The robotics team competes in the FIRST Robotics League. The team works with mentors to design, build, and compete with a robot. The team mentors students for the following skills: mechanical building, electrical, marketing, computer programming, strategy, and leadership. The team meets two days per week during the non-competition season, and six days a week between January and April. Many outreach events also occur throughout the year. A majority of our students receive college scholarships in a technical field.",
                                    meetingInfo: "August 16th, and August 23rd, in room C101.",
                                    image: "" // Add image URL if available
                                },
                                {
                                    name: "ROCK CLIMBING CLUB",
                                    teacher: "Monica Jordan",
                                    description: "This club is for students who have a passion for rock climbing AND students who are interested in learning how to rock climb! The group meets at Climb Time Indy on a bi-weekly basis on Wednesdays from 6:00 to 8:00 PM beginning 09/20/2023. The group gets a school club discount ($10).",
                                    meetingInfo: "The group meets at Climb Time Indy on a bi-weekly basis on Wednesdays from 6:00 to 8:00 PM beginning 09/20/2023. Call Out Meeting is 09/13/2023 in FHS Library.",
                                    image: "" // Add image URL if available
                                },
                                {
                                    name: "Rugby (Mudsock High School Girls)",
                                    teacher: "Austin Antoni",
                                    description: "We are a high school girls rugby club under Mudsock Athletics. We play Spring 15s and Fall 7s seasons against various school teams and clubs throughout Northern and Central Indiana. We are open to all backgrounds and experience levels. Our mission is to grow girls rugby in our community and elevate our players in a fun, competitive environment.",
                                    meetingInfo: "Fall 7s practices will be held at Brookschool Park from 5:30 - 7:30PM on Monday, August 19th and Wednesday, August 21st.",
                                    image: "" // Add image URL if available
                                },
                                {
                                    name: "SCHOOL OF ROCK",
                                    teacher: "Mike Czech",
                                    description: "This club will be a place for students to bring in their guitar and musical gear to jam and play music together.",
                                    meetingInfo: "TBD",
                                    image: "" // Add image URL if available
                                },
                                {
                                    name: "SCIENCE OLYMPIAD",
                                    teacher: "Laura Filipek-Nieves",
                                    description: "Science Olympiad is a team competition in which students compete in 23 “events” pertaining to various scientific disciplines, including earth science, biology, chemistry, physics, and engineering.",
                                    meetingInfo: "TBD",
                                    image: "" // Add image URL if available
                                },
                                {
                                    name: "SENIOR SMILE SOCIETY",
                                    teacher: "Summer Noyes and Heather Ferguson",
                                    description: "We have partnered with Prairie Lakes to make art and letters to uplift the spirit of elderly people in a local nursing home.",
                                    meetingInfo: "Once a month in H211",
                                    image: "" // Add image URL if available
                                },
                               
                                    {
                                        name: "SKI CLUB",
                                        teacher: "Ben Beasley",
                                        description: "This club is open to all students (experienced and non-experienced skiers are welcome). The club will meet in November to establish a schedule for the season. We ski four times per year at Perfect North slopes starting in January.",
                                        meetingInfo: "TBD",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "SPANISH CLUB",
                                        teacher: "Stephanie Gutting and Michelle Helmkamp",
                                        description: "¡Olé! Join Spanish Club! Normally, we take field trips to restaurants, cultural festivals, and more. We watch movies in Spanish, celebrate Hispanic holidays, and we would love to have you join us!",
                                        meetingInfo: "Once a month after school in A102/A103, meeting dates TBD",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "SPEECH & DEBATE TEAM",
                                        teacher: "Jim Hayes and Emma Rund",
                                        description: "The Fishers Speech & Debate team competes in public speaking tournaments throughout the state and on the national circuit. Students can compete in theatrical performances, broadcasting, platform speaking, and multiple types of debate.",
                                        meetingInfo: "Built around student schedules— we can accommodate almost all conflicts",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "SPORTS TRADING CARD CLUB",
                                        teacher: "Ryan Harris",
                                        description: "Open to anyone with a passion for sports trading cards. This club will meet to discuss and share knowledge of the hobby and business of Sports Trading Cards.",
                                        meetingInfo: "TBD",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "STUDENT GOVERNMENT",
                                        teacher: "Jennifer Pope, Lori Kixmiller, and Matt Bockenfeld",
                                        description: "Student Government is the place to be to get involved in all things FHS. From organizing Homecoming week and Riley week to the Pasta Bowl, this club will get you locked in on all the major service and school spirit events that FHS has to offer.",
                                        meetingInfo: "Usually monthly; announced via announcements & Remind",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "STUDENT ORGAN DONATION ADVOCATES (SODA)",
                                        teacher: "Terri Hamilton",
                                        description: "SODA is a national organization and is supported by Indiana Donor Network. SODA’s main goal is organ donation awareness to students, helping them decide if organ donation is a good fit for them and/or their family. Here is a link to the website:",
                                        meetingInfo: "First Red Tuesday of the Month, beginning September 5th. This group will meet after school in Room B136",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "STUDENTS IN ACTION",
                                        teacher: "Beth Carson",
                                        description: "Students in Action empowers students to think big, choose or create their own public service projects, engage the entire school and broader communities, and create maximum impact and sustainable change.",
                                        meetingInfo: "TBD",
                                        image: "" // Add image URL if available
                                    },
                                    {
                                        name: "TECH CREW",
                                        teacher: "Andy Smith",
                                        description: "Tech crew is a group of people that help build scenery and run productions in the auditorium.",
                                        meetingInfo: "Tech crew will meet Tuesdays and Thursdays (beginning date TBD)",
                                        image: "" // Add image URL if available
                                    },
                                        {
                                            name: "TECHNOLOGY STUDENT ASSOCIATION (TSA)",
                                            teacher: "Brigham French",
                                            description: "TSA is a national student organization dedicated to promoting skills in science, technology, engineering, and mathematics, as well as business education. FHS will have an official chapter of TSA, giving students interested in these fields an opportunity to enhance their learning and compete at the state conference annually.",
                                            meetingInfo: "TBD",
                                            image: "" // Add image URL if available
                                        },
                                        {
                                            name: "TIGER AMBASSADORS",
                                            teacher: "Matt Swaim",
                                            description: "Tiger Ambassadors is a student-run organization that helps new students feel welcome at FHS. Ambassadors are matched with new students to help these students make a positive connection at FHS. We want to make new students feel welcome and to make FHS an inclusive environment.",
                                            meetingInfo: "Every other Tuesday in the LGI",
                                            image: "" // Add image URL if available
                                        },
                                        {
                                            name: "TIGER LEADERS",
                                            teacher: "Braden Tribolet",
                                            description: "Tiger Leaders aims to create a more positive student experience at Fishers High School through student engagement and school spirit. Tiger Leaders look to create experiences that benefit the school as well as advertising the events at the school. Additionally, Tiger Leaders help build upon the student body connection and look to attend and be involved in all school events.",
                                            meetingInfo: "Every Monday morning at 7:30 am in H136",
                                            image: "" // Add image URL if available
                                        },
                                        {
                                            name: "W.R.I.T.E. CLUB",
                                            teacher: "Leah VanTrees",
                                            description: "The purpose of this club is to promote positivity and lift others up in the community. We will meet to write letters to people around the community: police officers, business leaders, teachers, other students, healthcare workers, etc. Students can earn an hour of volunteer hours for every hour spent writing letters. We will spread joy and put smiles on people’s faces!",
                                            meetingInfo: "Twice a month in Mrs. VanTrees' classroom",
                                            image: "" // Add image URL if available
                                        },
                                            {
                                                name: "WARHAMMER 40000 CLUB",
                                                teacher: "Steven Curtis",
                                                description: "The Warhammer 40000 Club is a branch of the Dungeons & Dragons (D&D) Club, where members will play and learn more about the game. The club will meet at the same time as D&D. The games will consist of multiple people that have already started an army of 500+ points and have some experience with the game.",
                                                meetingInfo: "TBD",
                                                image: "" // Add image URL if available
                                            },
                                            {
                                                name: "WOMEN'S EMPOWERMENT CLUB",
                                                teacher: "Summer Noyes",
                                                description: "This is a club meant to empower the girls at our school. Any student who is willing to contribute positively to our mission is able to attend, regardless of gender. We want to foster confidence in girls so that they can carry this disposition with them into their future lives. We will do various activities during club meetings.",
                                                meetingInfo: "Meets Twice a month on Wednesdays (30 min after school)",
                                                image: "" // Add image URL if available
                                            },
                                            {
                                                name: "YOGA CLUB",
                                                teacher: "Erin Knapp",
                                                description: "Yoga Club is an opportunity for students to learn basic yoga poses, breathing techniques, and mindfulness practices to help manage stress, improve emotional regulation, enhance concentration, increase self-awareness, and develop strength & flexibility. NO EXPERIENCE NECESSARY!",
                                                meetingInfo: "https://docs.google.com/spreadsheets/d/194ocGBWvLEfPE0F081XlKtvpQtYOmXx6bCR65DDsF4E/edit?usp=sharing",
                                                image: "" // Add image URL if available
                                            }
                                        ];
                                        
                                    
                                 
                                        
                                        const hseClubs = [
                                            // Your HSE-specific club data here
                                            {
                                                name: "ROCK CLIMBING CLUB",
                                                teacher: "Monica Jordan",
                                                description: "This club is for students who have a passion for rock climbing AND students who are interested in learning how to rock climb! The group meets at Climb Time Indy on a bi-weekly basis on Wednesdays from 6:00 to 8:00 PM beginning 09/20/2023. The group gets a school club discount ($10).",
                                                meetingInfo: "The group meets at Climb Time Indy on a bi-weekly basis on Wednesdays from 6:00 to 8:00 PM beginning 09/20/2023. Call Out Meeting is 09/13/2023 in FHS Library.",
                                                image: "" // Add image URL if available
                                            },
                                        ];
                                        const user = JSON.parse(localStorage.getItem('user'));
                                        const schoolName = user.school === 'hse' ? 'HSE' : 'Fishers';
                                        const teacher = user.teacher;
                                        
                                        function createButtonsFromClubs(clubs,school,teacher) {
                                            const container = document.getElementById('buttons-container');
                                            container.innerHTML = '';
                                        
                                            clubs.forEach(club => {
                                                const button = document.createElement('div');
                                                button.className = 'button';
                                                if(school == "Fishers"){
                                                    button.style.backgroundColor = "red";
                                                }else{

                                                    button.style.backgroundColor = "blue";
                                                }
                                                button.innerHTML = `<h2>${club.name}</h2><em>${club.teacher}</em>`;
                                                button.addEventListener('click', () => {
                                                    displayClubInfo(club);
                                                });
                                                container.appendChild(button);
                                            });
                                            if(teacher){
                                                const button = document.createElement('div');
                                                button.className = 'button';
                                                if(school == "Fishers"){
                                                    button.style.backgroundColor = "red";
                                                }else{

                                                    button.style.backgroundColor = "blue";
                                                }
                                                button.innerHTML = `<h2>add club</h2>`;
                                                button.addEventListener('click', () => {
                                                    
                                                });
                                                container.appendChild(button);
                                            }
                                        }
                                        
                                        function displayClubInfo(club) {
                                            const overlay = document.getElementById('modal-overlay');
                                            const image = club.image ? club.image : 'img/questionmark_white.png';
                                            overlay.innerHTML = `
                                                <div class="modal-content visible">
                                                    <span class="close">&times;</span>
                                                    <img src="${image}" alt="${club.name} logo" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px;">
                                                    <h2>${club.name}</h2>
                                                    <em>${club.teacher}</em>
                                                    <p>${club.description}</p>
                                                    <p><strong>Meeting Info:</strong> ${club.meetingInfo}</p>
                                                </div>
                                            `;
                                            const closeBtn = overlay.querySelector('.close');
                                            closeBtn.addEventListener('click', hideModalContent);
                                            overlay.classList.add('visible');
                                        }
                                        
                                        function hideModalContent() {
                                            const overlay = document.getElementById('modal-overlay');
                                            overlay.classList.remove('visible');
                                            overlay.innerHTML = ''; // Clear previous content to avoid conflicts
                                        }
                                        if(schoolName=="Fishers"){
                                        document.addEventListener('DOMContentLoaded', createButtonsFromClubs(fishersClubs,schoolName,teacher));
                                        }else{
                                            document.addEventListener('DOMContentLoaded', createButtonsFromClubs(hseClubs,schoolName,teacher));
                                        }
                            
                        
                    
                
                  
 

