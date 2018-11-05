export function registerTimes(hbs) {
    hbs.registerHelper('times', function (count, block) {
        let accum = '';

        for (let i = 0; i < count; ++i) {
            accum += block.fn(i);
        }
        return accum;
    });
}