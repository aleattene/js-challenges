
const solution = require('./solution');


test("Barbecue Skewers", () => {
    expect(solution.bbqSkewers(["--oooo-ooo--",
                                    "--xx--x--xx--",
                                    "--o---o--oo--",
                                    "--xx--x--ox--",
                                    "--xx--x--ox--"]))
        .toStrictEqual([2, 3]);
    expect(solution.bbqSkewers(["--oooo-ooo--",
                                    "--xxxxxxxx--",
                                    "--o---",
                                    "-o-----o---x--",
                                    "--o---o-----"]))
        .toStrictEqual([3, 2]);
    expect(solution.bbqSkewers(["--oooo-ooo--",
                                    "--ooooooo--",
                                    "--o---",
                                    "-o-----o---x--",
                                    "--o-oooo-----"]))
        .toStrictEqual([4, 1]);
});
