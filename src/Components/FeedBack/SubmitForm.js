

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
}

// const sendEmbed = () => {
//     const url = "https://discord.com/api/webhooks/1161711920508838012/DKngRnE6aSQ4Xhe-j6O0atkaEY5D5UriZVVmOpkOXvdenZ7RPwq_wvPLZNX6JjQtc-fH"
//     const Header = {
//         "Content-Type": "application/json"
//     }

//     const data = {
//         'embeds': [
//             {
//                 'title': 'ATS Feedback',
                
//                 'color': 0xffffff
//             }
//         ]
//     }

//     fetch(url, {
//         method: "POST",
//         headers: Header,
//         body: JSON.stringify(data)
//     })
// }

export default submitForm;