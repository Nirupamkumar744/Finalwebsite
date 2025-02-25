import { IoIosCloudDone } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { FaPersonChalkboard } from "react-icons/fa6";
import styles from "../Franchise/Franchise.module.css";
import { FaPersonBurst } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FcOnlineSupport } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { GiIndianPalace } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { MdGroupAdd } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

//OUR CONCEPT
import { MdLibraryAdd } from "react-icons/md";
import { GiPizzaCutter } from "react-icons/gi";
import { TbBinaryTree } from "react-icons/tb";
import video1 from "/images/S1.mov";
import video2 from "/images/S2.mov";
import video3 from "/images/S3.mov";

export const CentreFranchiseData = [



    {
        icon: <IoIosCloudDone className={styles.icons} color="green" />,
        title: "Apply Online",
        text: "Submit your application through our easy-to-use 'Apply Now' form. Provide your basic details and express your interest in partnering with us to bring stock market education to your city.",
    },
    {
        icon: <FaHandshakeSimple className={styles.icons} color="green" />,
        title: "Introductory Call",
        text: "Connect with our franchise development team to share your background, discuss your region's potential, and learn more about our business model.",
    },
    {
        icon: <LuNotebookText className={styles.icons} color="green" />,
        title: "Business Plan Review & Evaluation",
        text: "Dive into the financial aspects, operational requirements, and market potential. We'll guide you through creating a sustainable plan for success.",
    },
    {
        icon: <GrGroup className={styles.icons} color="green" />,
        title: "Orientation Day",
        text: "Meet our leadership, explore our hybrid learning model, and experience how our innovative courses are changing lives. This step will help you align with our mission.",
    },
    {
        icon: <FaPersonChalkboard className={styles.icons} color="green" />,
        title: "Final Approval & Partnership Launch",
        text: "Complete the documentation, finalize compliance, and receive all the resources needed to launch your Stock Market Learning Center in your territory.",
    },
];


//Why Choose StockArchery Section

export const CentreFranchiseData2 = [
    {
        icon: <FaPersonBurst color="green" className={styles.chooseIcon} />,
        title: "Proven Success",
    },
    {
        icon: <FaBalanceScale color="brown" className={styles.chooseIcon} />,
        title: "Ownership Equity",
    },
    {
        icon: <AiTwotoneSafetyCertificate className={styles.chooseIcon} />,
        title: "Operational Efficiency",
    },
    {
        icon: <FcOnlineSupport className={styles.chooseIcon} />,
        title: "Support from central operations",
    },
    {
        icon: <HiUserGroup color="#00a2ff" className={styles.chooseIcon} />,
        title: "50,000+ Social media followers",
    },
    {
        icon: <GrUserExpert color="#7acfff" className={styles.chooseIcon} />,
        title: "Led by Industry Experts",
    },
    {
        icon: <FaUserGraduate color="#6c3de3" className={styles.chooseIcon} />,
        title: "500+ Enrolled Learners",
    },
    {
        icon: <GiIndianPalace color="green" className={styles.chooseIcon} />,
        title: "Social Media Presence",
    },
    {
        icon: <BsFillBarChartLineFill color="#07e30e" className={styles.chooseIcon} />,
        title: "1Cr+ Annualised Revenue",
    },
    {
        icon: <FcRating className={styles.chooseIcon} />,
        title: "Rated 4.9 & Above",
    },
    {
        icon: <MdGroupAdd color="#e3be07" className={styles.chooseIcon} />,
        title: "25+ New Monthly Hybrid Enrollments",
    },
    {
        icon: <IoTicketOutline color="#670578" className={styles.chooseIcon} />,
        title: "INR 35000 Average Ticket Size",
    },
]


// OUR CONCEPT 

export const CentreFranchiseData3 = [
    {
        icon: <MdLibraryAdd color="green" className={styles.chooseIcon} />,
        title: "Vibrant & Positive",
        text: "Discover a vibrant and positive atmosphere at our Stock Market Hybrid Learning Center, where innovation and education flourish.",
    },
    {
        icon: <GiPizzaCutter color="brown" className={styles.chooseIcon} />,
        title: "Cutting-edge Technology",
        text: "We seamlessly integrate innovative tools to enhance the learning experience, ensuring our students stay ahead in the dynamic world of stock market education.",
    },
    {
        icon: <HiUserGroup color="#00a2ff" className={styles.chooseIcon} />,
        title: "Community Based Learning",
        text: "Experience hands-on, community-based learning at our Hybrid Learning Center, where practical skills meet a supportive environment for real-world success.",
    },
    {
        icon: <TbBinaryTree color="gray" className={styles.chooseIcon} />,
        title: "Social Engagement",
        text: "Fueling success through social engagement, our Hybrid Learning Center creates a dynamic space where students connect, collaborate, and thrive.",
    }
]



//Listen from our users & students section

export const CentreFranchiseData4 = [
    {
        name: "Md Shanawaz Hussain",
        role: "Student",
        
        videoSrc: video1,  // Uses s1.mp4
    },
    {
        name: "Arvind Sharma",
        role: "Student",
        
        videoSrc: video2,  // Uses s2.mp4
    },
    {
        name: "Priyanshu",
        role: "Student",
        
        videoSrc: video3,  // Uses s3.mp4
    },
];
