import jsonQuery from 'json-query';

function filterSessions(data, query) {
    return jsonQuery(query, { data }).value;
}

module.exports = filterSessions;
