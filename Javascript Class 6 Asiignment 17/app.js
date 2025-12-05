let firstnam = prompt("Enter your first name")
let lastnam = prompt("Enter your last name")
let fullnam = ("Welcome " + firstnam + " "  +  lastnam )
document.write(fullnam);




let mob = prompt("What is your favourite Mobile")
document.write(" <br><br> My Favourite Phone is: " + mob)
document.write(" <br> Length Of String is:" + mob.length)


let country = "Country: Pakistan"
document.write( "<br><br>" + country);
document.write("<br>Length Of String is: " + country.indexOf("P"))


let text = " Hello World"
document.write("<br><br> String: " + text)
document.write("<br>  Last index of 'l' is: " + text.lastIndexOf("l"))


var string = " Pakistani"
document.write("<br> <br>  String = " + string + "<br> Character at index 3 is: " + string[3] )



let firstname = prompt("Enter your first name")
let lastname = prompt("Enter your last name")
let greeting=("<br><br>  WELCOME...!!")
let fullname = greeting.concat( " ", firstname ,   lastname)
document.write(fullname);



let city = "Hyderabad"
document.write("<br> City: " + city)
let part = city.replace("Hydera", "Islama")
document.write("<br>After Replacement: " + part);


let msg = "Ali and Sami are best friends. They play cricket and football together."
let messag = msg.replaceAll("and","&")
document.write("<br>" +messag)


let c = "472"
document.write("<br> <br>Value : " + c + "<br> Type: String " )
let d = + "472"
document.write("<br> Value : " + d + "<br> Type: Number " )


let input = prompt("Enter something in lower case")
document.write("<br><br> User Input: " + input)
input = input.toUpperCase() 
document.write("<br>  Upper Case: " + input)





// let lower = prompt("Enter something in upper case")
// document.write("<br> User Input: " + lower)
// let result = titleCase(lower)
// document.write("<br>  Title Case: " + result)



let x = "35.36"
document.write("<br><br> Number: " + x ) 
let y = x.replace(".","")
document.write("<br> Result: " + y );


let username = prompt("Enter username without speial symbols")
let specialsymbols = ["@" , "." , ",", "!" ]
for(let i =0; i < specialsymbols.length; i++)
if(username.includes(specialsymbols[i])){
    alert("Please, Enter a valid username")
}



let search = prompt("Enter which bakery item you want") 
search = search.toLowerCase()
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
 if(bakery.includes(search)){
        alert(search + " is available in our bakery at index " + bakery.indexOf(search)  )
    }else{
        alert("We are sorry, " + search +  "  is not available in our bakery")
    }




















var university = "University of Karachi"
var a = university.split(" ")
document.write("<br><br>"+a);



