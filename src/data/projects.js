import powerline from "../assets/powerline.jpg";
import substation from "../assets/projects/substation.jpg";
import testing from "../assets/projects/testing.jpg";

const projects = [
    {
        id: 1,
        title: "Монтаж подстанции 110 кВ",
        category: "Подстанции",
        image: substation,
        description: "Полный цикл монтажа и наладки оборудования подстанции.",
    },
    {
        id: 2,
        title: "Строительство ЛЭП 35 кВ",
        category: "ЛЭП",
        image: powerline,
        description: "Возведение линии электропередач в горной местности.",
    },
    {
        id: 3,
        title: "Испытания трансформаторов",
        category: "Испытания",
        image: testing,
        description: "Лабораторные испытания и диагностика оборудования.",
    },
];

export default projects;
