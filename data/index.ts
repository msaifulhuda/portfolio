import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm very passionate about design and development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible time-wise and can work with any timezone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tools stack",
    description: "I constantly try to learn",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Design enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently freelancing and open to new opportunities",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Software Engineering Project",
    des: "Budal Travel is an innovative web application designed to revolutionize group travel planning by simplifying bus rentals for various occasions, such as school trips, family vacations, and corporate outings.",
    img: "/coverp1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/laravel.svg", "/figma.svg"],
    link: "https://budaltravel.nganggurlab.my.id/",
  },
  {
    id: 2,
    title: "News Classification Website",
    des: "This website was created to demonstrate the classification of Kompas.com news using the Convolutional Neural Network (CNN) model. The model is trained on Kompas.com news dataset and can predict the news category from the given URL.",
    img: "/coverp2.svg",
    iconLists: ["/flask.png", "/colab.svg"],
    link: "https://kompasnews.domcloud.dev/",
  },
  {
    id: 3,
    title: "Bank Marketing Website",
    des: "This website performs analysis, preprocessing, and model evaluation for the Bank Marketing dataset available at the UCI Machine Learning Repository. The method used in this calculation is K-Nearest Neighbor (KNN).",
    img: "/coverp3.svg",
    iconLists: ["/colab.svg", "/flask.png"],
    link: "https://psd-bank-marketing.domcloud.dev/",
  },
  {
    id: 4,
    title: "SIDIK Project",
    des: "SIDIK (System for Information on Data and Performance Indicators of University Lecturers), this project has significantly improved the efficiency of managing lecturer data, supported data-driven decision-making, and ensured compliance with accreditation standards.",
    img: "/coverp4.svg",
    iconLists: ["/tail.svg", "/ci.png"],
    link: "https://sidik.sakera.id/",
  },
];

export const testimonials = [
  {
    quote:
      "I am so thrilled for his performance during this 3 months contribution on developing Boosternesia content at social media significantly. Even if he got so many responsiblities as well, he still finished his jobs fascinatingly. He also given speaking skill improvement through a chance in becoming an MC in other division at Boosternesia. I couldn't be happier to see him enhance his skills more at the next opportunity!",
    name: "Indriani",
    title: "Founder of Boosternesia",
  },
  {
    quote:
      "Collaborating with Huda so far has been a great experience. He is very professional and always delivers on time. His enthusiasm for every aspect of development truly stands out. If you're looking to elevate your design and tech stack, Huda is the ideal partner.",
    name: "Aurellia Philbertha",
    title: "Founder of Tempat Pulih Indonesia",
  },
  {
    quote:
      "Huda is a very talented and hardworking person. He is very passionate about his work. He solves problems very quickly and efficiently. He is a very good team player and always ready to help others. He is a very good learner and always ready to learn new things",
    name: "Rizka Nailah Nahdah",
    title: "CO-Founder of ManusiaAsa",
  },
  {
    quote:
      "He is a designer who is very good at making designs, he is also very good at making ui/ux designs. So I am very happy to collaborate with him. I hope we can collaborate again in the future.",
    name: "Lintang Buwono",
    title: "Tech Division of YOTers Surabaya 2024",
  },
  {
    quote:
      "In Media & Creative Division, Huda is very passionate about design with a purpose. He designed the best design for the division. He is also very good at making UI/UX designs. He is a very good team player and always ready to help others. He also has a good leadership spirit.",
    name: "Wahyu Cahyanto",
    title: "Lead of GDGoC Trunojoyo Chapter 2024",
  },
];

export const companies = [
  {
    id: 1,
    name: "boosternesia",
    img: "/boosternesia.png",
    className: "md:max-w-60",
    nameImg: "/boostName.svg",
  },
  {
    id: 2,
    name: "Tempat Pulih",
    img: "/tp.png",
    className: "md:max-w-60",
    nameImg: "/tpName.svg",
  },
  {
    id: 3,
    name: "GDGOC UTM",
    img: "/gdg.png",
    nameImg: "/gdgName.svg",
  },
  {
    id: 4,
    name: "ManusiaAsa",
    img: "/manusiasa.svg",
    className: "md:max-w-60",
    nameImg: "/manusiaName.svg",
  },
  {
    id: 5,
    name: "Young On Top",
    img: "/yot.png",
    nameImg: "/yotName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Creative Designer - ManusiaAsa",
    desc: "Handled weekly Instagram feed material with a new theme every 2 weeks. Increased engagement by 40% and followers by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI/UX Designer - BudalTravel",
    desc: "Worked with developers and stakeholders to implement 100% of the design specs, ensuring responsive and accessible designs for mobile and desktop platforms.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Design Project",
    desc: "Led the design and development of a company social media platform, resulting in a 30% increase in user engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mentor Graphic Design - Tempat Pulih",
    desc: "Regular monitoring of graphic designers and organize graphic designers to handle social media visual content management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/msaifulhuda",
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: "https://www.instagram.com/sfl.huda/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammadsaifulhuda/",
  },
];
