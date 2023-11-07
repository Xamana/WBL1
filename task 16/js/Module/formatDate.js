const moment = require('moment');

module.export = {
    formatDate: (date) => {
        return moment(date).format('YYYY-MM-DD');
    }
};