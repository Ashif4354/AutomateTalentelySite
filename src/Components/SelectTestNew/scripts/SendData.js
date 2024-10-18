const sendData = (data, setOpenDialog, setSubmit, setSubmitted, setSubmitResponse) => {
    console.log(data);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // var response_confirm = window.confirm('Are you sure that you want to update your tests.\nThis will RESET your PROGRESS')

    // if (response_confirm) {
    fetch('http://localhost:2210', requestOptions)
        .then(res => {
            console.log(res.text());
            setSubmitResponse(true);
            setSubmitted(true);
            setOpenDialog(false);
            setSubmit(false);
        })
        .catch(error => {
            setSubmitResponse(false);
            setSubmitted(true);
            setOpenDialog(false);
            setSubmit(false);
        });
    
    
    
    // }
}

export default sendData;