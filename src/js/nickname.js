
export default class Validator {
        constructor(nick){
                this.nick = nick;
        }
        validateUsername(){
                const re = /^[a-z][a-z0-9\-_]+[a-z]$/i;
                return (re.exec(this.nick) !== null)&&(!/[0-9]{4}/.test(this.nick));    
        }
}