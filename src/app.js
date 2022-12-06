module.exports = {
    async handler(event) {
        if(event)
            return { statusCode: 200, message: 'Has event!' }

        return { statusCode: 400, message: 'Error!' }
    }
};    
