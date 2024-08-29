export default class ErrorRepository {
    constructor() {
        this.errorsContainer = new Map();
    };


    translate(code) {
        if(this.errorsContainer.has(code)) {
            return this.errorsContainer.get(code)
        };

        if(!this.errorsContainer.has(code)) {
            throw new Error('Unknown error')
        };
    };
};

