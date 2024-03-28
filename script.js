let cities=['Faisalabad','Lahore','Karachi','Islamabad','Burewala','Sheikupura','Kashmir']

for(let i=0; i<cities.length; i++)
{
    let num=i+1
    document.getElementById('originalString').innerHTML += num + ') ' +cities[i] + '&emsp;'  ;
}

document.getElementById('clear').onclick=function()
{
    document.getElementById('textArea').value="";
}

function simpleAlert(){
    alert('This is an alert message')
}

function printName(){
   let name =document.getElementById('textArea').value
   if(name==="")
   {
    alert('Please Enter your Name')
   }
   else{ 
   document.getElementById('output').innerHTML=name;
   }
}

function printCities()
{
    document.getElementById('output').innerHTML="";
    for(let i=0; i<cities.length; i++)
    {
        let num=i+1
        document.getElementById('output').innerHTML += num + ') ' +cities[i] + '<br>' ;
    }
}

function addCities()
{
    let city=document.getElementById('textArea').value
    if(!city)
    {
        alert('Please enter the city to add')
        return;
    }
    else
    {
        cities.push(city);
        document.getElementById('output').innerHTML='<span style="font-size:20px; color:red;"> "'+ city + '"</span> has been successfully added to cities ';
    }
}

function generateTable(){
    let num=document.getElementById('textArea').value
    if(!num)
    {
        alert('Please enter the number')
    }
    else{
        let table=+prompt('Enter the number')
    
    for(let i=0; i<table; i++)
    {
        let j=i+1
        let k=num*j
        document.getElementById('output').innerHTML+= num + ' * ' + j + ' = ' +  k + '<br>';
    }
}
}

document.getElementById('clearOutput').onclick=function(){
    document.getElementById('output').innerHTML="";
}