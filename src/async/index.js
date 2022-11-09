export default class asyncMethods {
    static async createMessage(message, state) {
        const res = await fetch('https://encrypteds.herokuapp.com/create-message', {
            method: 'POST',
            body: JSON.stringify({ message: message }),
            headers: { 'content-type': 'application/json' },
        })
        const data = res.json();

        data.then(data => state(data))
    }
    static async getMessage(key, state) {
        const res = await fetch('https://encrypteds.herokuapp.com/read-message', {
            method: 'POST',
            body: JSON.stringify({ key: key }),
            headers: { 'content-type': 'application/json' },
        })
        const data = res.json();

        data.then(data => data.length ? state(data) : state(''))
    }
}