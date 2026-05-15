// Array of Objects

const students = [
    { name: "Alice", age: 25},
    { name: "Bob", age: 27},
    { name: "Charlie", age: 39},
]

console.log(students[0].age);

students.forEach(val => {
    console.log(val.name + "\t" + val.age);
})


// Nested Array of objects

const arrOfObj = [
{
    name: 'John',
    age: 25,
    hobbies: ['Reading','Traveling'],
},
{
    name: 'Alice',
    age: 29,
    skills: ['Javascript','React'],
    projects: [
        {title: 'Project A', completed: true},
        {title: 'Project B', complete: false}
    ]
},
{
    title: 'Special Objects',
    data: [1,2,3],
    metadata: {key: 'value'}
},
{
    //empty object
},
{
    anotherObject: true,
    nestedArrays: [
        [1,2,3,4],
        ['a','b','c']
    ],
    additionalProperty: 'Extra'
}
];


