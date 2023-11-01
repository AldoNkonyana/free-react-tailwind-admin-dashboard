async function signIn(username: string, password: string) {
    var username = "Peach";
    var password = "12345";

    const response = await fetch('https://pikapp-test-backend.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    if (!response.ok)
        console.log('done');
        // throw new ResponseError('Failed on sign in request', response);

    return await response.json();
};

export default signIn;