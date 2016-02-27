			//max tasks can be 10
			//var ids = new Array("1","2","3","4","5","6","7","8","9","10");
			//var b = new Array("b1","b2","b3","b4","b5","b6","b7","b8","b9","b10");
			var i=1;
			
			function buttonFunc(obj){
					
					var b = document.createElement("BUTTON");
					var name = document.createTextNode("ADD TASK");
					b.appendChild(name);
				    b.setAttribute("id","dynamicb1a");
					var section=document.getElementById("sec");
					section.appendChild(b);
			        document.getElementById("dynamicb1a").onclick=addTask;
					
				}
			
			
			function addTask(){
				
				var textfield = document.createElement("INPUT");
				textfield.setAttribute("type","text");
				textfield.setAttribute("id","textf1");
				document.getElementById("sec").appendChild(textfield);
				var button = document.createElement("BUTTON");
				var name = document.createTextNode("add to table");
				button.appendChild(name);
				document.getElementById("sec").appendChild(button);
				button.onclick=addToTable;
				
			}
				var y=0;var v1=0;
				var taskArray=["tabler1c3","tabler2c3","tabler3c3","tabler4c3","tabler5c3","tabler6c3","tabler7c3","tabler8c3","tabler9c3","tabler10c3"];
				function addToTable(){
				
				var value = document.getElementById("textf1").value;
				//alert(value);
				if(value===""){
					alert("pls enter a valid task");
				}
				else{
					document.getElementById(taskArray[y++]).innerHTML=value;
				    document.getElementById("textf1").value="";
					v1=document.getElementById("tabler1c4").innerHTML;
					v1++;
					document.getElementById("tabler1c4").innerHTML=v1;
				}
				}
			
			function deleteFromTable(){
			//alert("delete my task");
				document.getElementById(taskArray[--y]).innerHTML="";
				v1=document.getElementById("tabler1c4").innerHTML;
					v1--;
					document.getElementById("tabler1c4").innerHTML=v1;

			}
			
			
			var val1=0;
			var val2=0;
			function lineThrough(name,obj){
				var id=null;
			
				switch(name){
					case "task1":id=taskArray[0];break;case "task2":id=taskArray[1];break;
					case "task3":id=taskArray[2];break;case "task7":id=taskArray[6];break;
					case "task4":id=taskArray[3];break;case "task8":id=taskArray[7];break;
					case "task5":id=taskArray[4];break;case "task9":id=taskArray[8];break;
					case "task6":id=taskArray[5];break;case "task10":id=taskArray[9];break;
				}
				if(obj.checked){
				document.getElementById(id).style.textDecoration="line-through";
				 val1 = document.getElementById("tabler1c4").innerHTML;
				val1--;
				document.getElementById("tabler1c4").innerHTML=val1;
				 val2 = document.getElementById("tabler1c5").innerHTML;
				val2++;
				document.getElementById("tabler1c5").innerHTML=val2;
				
				}else if(!obj.checked){
					document.getElementById(id).style.textDecoration="none";
					 val1 = document.getElementById("tabler1c4").innerHTML;
				val1++;
				document.getElementById("tabler1c4").innerHTML=val1;
				val2 = document.getElementById("tabler1c5").innerHTML;
				val2--;
				document.getElementById("tabler1c5").innerHTML=val2;
				}
			}
			