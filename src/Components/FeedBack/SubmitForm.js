
const submitForm = (name, email, radio, content, starValue) => {

    if (name === "") {
        alert("Please enter your name");
        return
    }
    if (email === "") {
        alert("Please enter your email");
        return
    }
    if (radio === "") {
        alert("Please select feedback type");
        return
    }
    if (radio === "general-feedback" && starValue === "") {
        alert("Please select rating");
        return
    }
    if (content === "") {
        console.log(starValue)
        alert("Please enter your feedback");
        return
    }

    sendEmbed(name, email, radio, starValue, content)
    
    return true

}


const sendEmbed = (name, email, radio, starValue, content) => {
    // const rosario_url = process.env.REACT_APP_FEEDBACK_DISCORD_WEBHOOK_URL_ROSARIO
    const url = process.env.REACT_APP_FEEDBACK_DISCORD_WEBHOOK_URL
    // const url = process.env.REACT_APP_FEEDBACK_DISCORD_WEBHOOK_URL_TEST // For testing
    const Header = {
        "Content-Type": "application/json"
    }

    if (starValue === "") {
        starValue = "Not applicable"
    }

    const data = {
        'embeds': [
            {
                'title': radio,
                'color': 0xffffff,
                fields: [
                    {
                        name: "Name",
                        value: name
                    },
                    {
                        name: "Email",
                        value: email
                    },
                    {
                        name: "Rating",
                        value: starValue
                    },
                    {
                        name: "Feedback",
                        value: content
                    }

                ]
            }
        ]
    }

    fetch(url, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(data)
    })

    // fetch(rosario_url, {
    //     method: "POST",
    //     headers: Header,
    //     body: JSON.stringify(data)
    // })
}

export default submitForm;