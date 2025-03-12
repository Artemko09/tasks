console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// --------------------------------------
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
// --------------------------------------
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// --------------------------------------
let str = '           dirty string   '
console.log(str);
console.log(str.trim());
// --------------------------------------
let str_2 = 'Ревуть воли як ясла повні'

const stringToArray = (str) => {
    return console.log(str.split(' '))
}

stringToArray(str_2)
// --------------------------------------
const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const strNums = nums.map(num => num.toString())
console.log(nums);
console.log(strNums);
// --------------------------------------
let num1 = [11,21,3];
const sortNums = (arr, choice) => {
    if(choice == '+'){
        console.log(arr.sort((a, b) => a - b))
    }
    else if(choice == '-'){
        console.log(arr.sort((a, b) => b - a))
    }
}

sortNums(num1, '+')
sortNums(num1, '-')
// -------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
let longCourses = coursesAndDurationArray.filter(cours => cours.monthDuration >= 5)
const addIdCourses = coursesAndDurationArray.map((course, index) => ({
    id: index += 1,
    title: course.title, 
    monthDuration: course.monthDuration
}))


console.log(coursesAndDurationArray);
console.log(longCourses);
console.log(addIdCourses);