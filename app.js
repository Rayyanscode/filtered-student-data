// let obj={
//     actions: Object,
//     dirty: false,
//     form: "Statement",
//     name: 'Muhib',
//     statement: {
//         firstName: "John",
//         lastName: "Peter",
//         isConfirmed: true
//     }
//    }


//    const {statement: {firstName,lastName,isConfirmed}} = obj
//    console.log(firstName)


//    let arr = [[1,2,3,4],['Muhib','Ahmed',923463334943]]
//    const [[a1,a2],[b1,b2]] = arr
//    console.log(a1,a2,b1,b2 )

// const num = [1,2,3,[11,12,13]]
// const [one,two,three,[eleven,twelve,thirteen]] = num;
// console.log(thirteen)


// const arr = [1,2,3,['Muhib']]
// const [a1,a2,a3,[name]] = arr
// console.log(name)



// let obj1 = {
//     name: 'Muhib',
//     fname: 'Ahmed',
//     Inst: 'SAIMS',
//     city: 'Karachi'
// }
// 
// it count how many property are there
// for(var i in obj1){
//     console.log(name);
//      var value = obj1[name]
//      console.log(value);
// }

// it show the name of property
// let keyName = Object.keys(obj1)
// console.log(keyName)


const searchfun = () =>{
    let filter = document.getElementById('myinput').value.toUpperCase();

    let mytable = document.getElementById('mytable');

    let tr = mytable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1) {

                tr[i].style.display = "";
                
            }else{
                tr[i].style.display = "none";
            }
            
        }
    }
}

searchfun()
































// let obj1 = {
//     name: "Rayyan",
//     class: '11th', 
//     age: 20,
//     inst: 'SAIMS',
//     cnic: '42401-67439653'
// }
// let obj2 = {
//     name: "Muhib",
//     class: '10th', 
//     age: 18,
//     inst: 'Hamdard',
//     cnic: '42123-8756438-0'
// }
// let obj3 = {
//     name: "Raheel",
//     class: '12th', 
//     age: 11,
//     inst: 'Practical center',
//     cnic: '41010-9829675-1'
// }
// let obj4 = {
//     name: "Anas",
//     class: 'Graduation', 
//     age: 23,
//     inst: 'MAK',
//     cnic: '42401-67239653'
// }
// let obj5 = {
//     name: "Muzammil",
//     class: '13th', 
//     age: 20,
//     inst: 'SAIMS',
//     cnic: '42401-67239653'
// }
// let obj6 = {
//     name: "zain",
//     class: '12th', 
//     age: 20,
//     inst: 'Adamjee',
//     cnic: '42401-67239653'
// }
// let obj7 = {
//     name: "Ibrahim",
//     class: '14th', 
//     age: 20,
//     inst: 'Fazaia Degree collee',
//     cnic: '42401-67239653'
// }
// let obj8 = {
//     name: "Usman",
//     class: '15th', 
//     age: 20,
//     inst: 'SAIMS',
//     cnic: '42401-67239653'
// }
// let obj9 = {
//     name: "Faisal",
//     class: '15th', 
//     age: 20,
//     inst: 'SAIMS',
//     cnic: '42401-67239653'
// }
// let obj10 = {
//     name: "Moiz",
//     class: '11th', 
//     age: 20,
//     inst: 'SAIMS',
//     cnic: '42401-67239653'
// }

// var inp = document.getElementById('inp')
// var put = document.getElementById('put')

// let arr = [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10]

// // console.log(arr[1].name)

// function search(searchValue,searchBy){
//     let classArray = arr.filter(function(y){
//         return y['name'] == searchValue
//     })
//     console.log(classArray)
//     put.innerHTML = classArray
// }

// search('Rayyan')