//step1
function dynamicArgument(keys, value) {
    let user = {
        id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
        scores: { english: 10, math: 19.5, physics: 14 },
    };
    let user1 = { ...user };
    user1.scores[keys] = value;
    return user1;

}
console.log(dynamicArgument("art", 19));

//step2
function addNewRoll(roll) {
    let user = {
        id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 14,
        scores: { english: 10, math: 19.5, physics: 14 },
    };
    let user1 = { ...user };
    user1.roles = [...user1.roles, roll];
    if (user1.age < 18) {
        user1["status"] = "veryYoung";
    }
    return user1;
}
console.log(addNewRoll("teacher"))

//step3


function convertToArray( key, value) {
    let user = {
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
};
    user1 = Object.entries(user);
    user1.push([key, value]);
    return Object.fromEntries(user1);
}
console.log(convertToArray("fatherName", "ali"));
