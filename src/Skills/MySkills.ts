import * as images from '../assets';

type Skill = {
    name: string;
    image: string;
};

export const mySkills: Array<Skill> = [
    {
        name: "C++",
        image: images.C,
    },
    {
        name: "Python",
        image: images.python,
    },
    {
        name: "C#",
        image: images.sharp,
    },
    {
        name: "TypeScript",
        image: images.TS,
    },
];