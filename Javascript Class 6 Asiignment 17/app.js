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





