/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.unshift(0);

    for (let i = 1; i < preferences.length; i++) {
        const k = preferences[i],
              n = preferences[k],
              m = preferences[n];
        if (m === i && n !== k && m !== n && k !== m) {
            count++;
        }
    }

    return count/3;
};
