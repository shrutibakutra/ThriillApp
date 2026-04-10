import { useEffect, useRef } from 'react';
import CardThrill from "../../featureComponents/Card/card";
import "./about.scss";
import { faGraduationCap, faVideo, faBook, faBullseye } from '@fortawesome/free-solid-svg-icons'

const cards = [
    {
        icon: faBullseye,
        title: "Interactive Tests",
        text: "Train your ears, eyes, and mind with dynamic exercises that build essential music theory basics",
        color: "#0075FF",
    },
    {
        icon: faGraduationCap,
        title: "Learn Through Play",
        text: "Enjoy a fun, game-like way to learn music! With a clear structure, it's great for all ages, from beginners to seasoned learners.",
        color: "#ffae18",
    },
    {
        icon: faVideo,
        title: "Visual Learning",
        text: "Enjoy easy-to-follow video lessons that break down complex topics. Rewatch anytime, at your own pace!",
        color: "#00BA3C",
    },
    {
        icon: faBook,
        title: "On-the-Go Reading",
        text: "Prefer reading? All topics are available in text format, so you can dive in whenever it suits you",
        color: "#FF4732",
    },
];

const About = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about__card--visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about" id="features">
            {cards.map((card, i) => (
                <div
                    key={card.title}
                    className="about__card"
                    ref={(el) => (cardRefs.current[i] = el)}
                    style={{ '--anim-delay': `${i * 120}ms` }}
                >
                    <CardThrill
                        src={card.icon}
                        title={card.title}
                        cardText={card.text}
                        iconColor={card.color}
                    />
                </div>
            ))}
        </div>
    );
}
export default About;
