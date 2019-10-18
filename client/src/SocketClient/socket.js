import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');


const submitAnswer = function(answer) {
    socket.emit('submitAnswer', answer);
}


export default {submitAnswer}