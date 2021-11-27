class Person{
	constructor(firstName, age, height, location){
		this.firstName = firstName;
		this.age = age;
		this.height = height;
        this.location = location;
 }
}

let fields = document.querySelectorAll("header>section>input")

let button = document.querySelector('.send')
button.addEventListener("click", () =>{
    builderAux = []
    fields.forEach(field=>{   
        builderAux.push(field.value)
    })
      const person = new Person(builderAux[0],builderAux[1],builderAux[2],builderAux[3])
      builderAux = [];
      tableInsert(person)  
})

function tableInsert(person){
    let table = document.querySelector('table')
    let row = table.insertRow(1)
    let cel= row.insertCell(0)
    cel.innerHTML = person.firstName.toString();
    let cel2= row.insertCell(1)
    cel2.innerHTML = person.age.toString();
    let cel3= row.insertCell(2)
    cel3.innerHTML = person.height.toString();
    let cel4= row.insertCell(3)
    cel4.innerHTML = person.location.toString();
    table.style.visibility="visible";
    let tableSize = table.rows.length;
    footerCounter(tableSize);
}

function footerCounter(tableSize){
    document.querySelector(".section-footer>p").innerText 
    =`O número de usuários cadastrados é: ${tableSize-1}`;
}
function tableSearch(){ 
      let table = document.querySelector('table')
      let searchInput1 = document.querySelector('#username-data');
      let searchInput=searchInput1.value.toUpperCase();
      let rowSearch = table.getElementsByTagName('tr')
      let valueTd=[]
      let validationRow;
      for(i=1; i<rowSearch.length;i++){
        
          td = rowSearch[i].getElementsByTagName("td");

          validationRow = iterateCollumn(td, valueTd, searchInput)

            if (validationRow) {
              rowSearch[i].style.display = "";
            } else {
              rowSearch[i].style.display = "none";
            }
          
        }
  
        
        alphabeticalOrder(valueTd, table, rowSearch);
        
}

function iterateCollumn(td, valueTd, searchInput){
  let tdFound=false;
  td=Array.from(td)
  td.forEach(td=>{
    if (td) {
      txtValue = td.textContent || td.innerText;
      valueTd.push(txtValue+" "+i)
      if (txtValue.toUpperCase().indexOf(searchInput) > -1) {
        tdFound=true
      } 
    }
    
  })

  return tdFound;
}



function alphabeticalOrder(rowIndex, table, rowSearch){
  let valueIndex;
  rowSearch=Array.from(rowSearch)
  rowIndex.sort();
 
 for(i in rowIndex){
   rowIndex[i]=rowIndex[i].split(" ")
   valueIndex=parseInt(rowIndex[i][1])
   table.append(rowSearch[valueIndex])
  }
  
}



