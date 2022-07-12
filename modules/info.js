const links = {
    "links": [
        {
            "name": "Github",
            "description": "My Github",
            "url": "https://github.com/JtheFox/",
            "active": true,
            "fa_icon": "fa-brands fa-github"
        },
        {
            "name": "LinkedIn",
            "description": "My LinkedIn",
            "url": "https://www.linkedin.com/in/jason-fox-878262197/",
            "active": false,
            "fa_icon": "fa-brands fa-linkedin"
        },
        {
            "name": "Resume",
            "description": "My CV",
            "url": "#",
            "active": false,
            "fa_icon": "fa-solid fa-file-lines"
        }
    ],
    "linkTemplate": {
        "name": "",
        "description": "",
        "url": "",
        "active": true,
        "fa_icon": ""
    }
}

const projects = {
    "projects": [
        {
            "date": "April 2022",
            "title": "Chopping Block",
            "image": "https://i.imgur.com/Y5MsQDC.png",
            "live": "#",
            "repo": "https://github.com/FidelHen/Chopping-Block",
            "keywords": ["React Native", "Firebase"]
        },
        {
            "date": "May 2022",
            "title": "Password Generator",
            "image": "https://i.imgur.com/F24PmtE.png",
            "live": "https://jthefox.github.io/password-generator/",
            "repo": "https://github.com/JtheFox/password-generator",
            "keywords": ["HTML", "CSS", "JS"]
        },
        {
            "date": "May 2022",
            "title": "Weather Dashboard",
            "image": "https://i.imgur.com/IZ72hZt.png",
            "live": "https://jthefox.github.io/weather-dashboard/",
            "repo": "https://github.com/JtheFox/weather-dashboard",
            "keywords": ["Bootstrap", "jQuery"]
        },
        {
            "date": "June 2022",
            "title": "Somewhere.",
            "image": "https://i.imgur.com/AnQy3h7.png",
            "live": "https://jthefox.github.io/somewhere-project/",
            "repo": "https://github.com/JtheFox/somewhere-project",
            "keywords": ["HTML", "CSS", "jQuery"]
        },
        {
            "date": "Julu 2022",
            "title": "Blastoff",
            "image": "https://raw.githubusercontent.com/JtheFox/blastoff/main/public/images/launch.png",
            "live": "https://blastoff2.herokuapp.com/",
            "repo": "https://github.com/JtheFox/blastoff",
            "keywords": ["Express", "Handlebars", "Sequelize"]]
        },
    ],
    "featuredProject": {

    },
    "projectTemplate": {
        "date": "",
        "title": "",
        "image": "",
        "live": "",
        "repo": "",
        "keywords": []
    }
}

export { links, projects };
