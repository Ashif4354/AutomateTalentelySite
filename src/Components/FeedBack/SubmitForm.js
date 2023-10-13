
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


    // grecaptcha.ready(() => {
    //     grecaptcha.execute('6LfDDY8oAAAAAI4smas96xmf227un4JC1aOP73io', { action: 'submit' })
    //         .then((token) => {
    //             check_token(token)
    //         });
    // });

    sendEmbed(name, email, radio, starValue, content)

}

// const check_token = async (token) =>{
//     console.log(token)
//     let options = {
//         method: "POST",
//         mode: "no-cors",
//         body: JSON.stringify({
//             secret: "6LfDDY8oAAAAAMgDdra0q-oUXrIXcPwpwBKQEx3c",
//             token: token
//         })
//     }
//     // let url = "https://www.google.com/recaptcha/api/siteverify?secret=6LfDDY8oAAAAAMgDdra0q-oUXrIXcPwpwBKQEx3c&response=" + token
//     let url = "https://www.google.com/recaptcha/api/siteverify"
//     // Add your logic to submit to your backend server here.
//     try {
//         let response = await fetch(url, options);
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }


//     // response
//     //     .then((res) => res.json())
//     //     .then(res => console.log(res))
//     //     .catch(err => console.log(err));
//     // console.log(2)
// }

const sendEmbed = (name, email, radio, starValue, content) => {
    // const url = "https://discord.com/api/webhooks/1162234038665363496/4YSrN037E-4tnep7GLrXWrgLk784N19xXcMOLXKm8qr1XjhVfEwM57d37PKfRe_yVVi_"
    const url = "https://discord.com/api/webhooks/1161301420037906472/riQ63XNgFX7vjJz0z0MhgxSGA81WxaTpQuD5J3vrBrMoGHTs8pz7vgYjvVhiO6xYtke0"
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
}

export default submitForm;