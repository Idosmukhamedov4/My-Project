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
         `You might encounter some brave newsmen that are sacrificing themselfes to Deliver news to those travelers who need it most. 
         Some of those newsmen include Mike who had no family left, Henry who couldn't bear the fear of living in a world of zombies, 
         and Henry who was old and grumpy in his past years, but wanted to compensate.`,
         `Ther are infinite ways a person could die on the trail. Be careful, you might
          encounter some unreal events. There are truly infinite ways you could die on the trail`,
         ``
    ],
    tooltip: "press space bar to continue"
}

export const optionData = {
    title: titleData,
    lore:  loreData
}