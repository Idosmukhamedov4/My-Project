 const titleData = {
    title: true,
    selectable:true,
    question: null,
    options: [
        {
            key: 1,
            prompt: "Drive the trail",
            dest: "gameStart"
        },
        {
            key: 2,
            prompt: "Read the lore",
            dest: "lore"
        },
        {
            key: 3,
            prompt: "How the game works",
            dest: "tutorial"
        }
    ],
    text: [],
    tooltip:null
}

const loreData = {
    title: true,
    selectable: false,
    question: null,
    options: [],
    text: [
        `It all starts in January 15, 1979 when a Soviet experiment in Warsaw got 
        out of containment and spread across Europe. But on July 4, 1980
         the zombie virus landed in eastern United States.`,
         ``
    ],
    tooltip: "press space bar to continue"
}

export const optionData = {
    title: titleData,
    lore:  loreData
}