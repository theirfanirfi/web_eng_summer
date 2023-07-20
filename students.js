let students = {
	filterByMarks : (marks) => {
		let stds = []
		students.all_students.filter(function(obj, index){
			if(obj.marks == marks){
				stds.push(obj);
			}
		});

		return stds;
	},

	all_students: [
{
	name: "wajid",
	marks: 98,
	
	
},
{
	name: "soban",
	marks: 97,

},

{
	name: "Moiz",
	marks: 96,
	
},
{
	name: "Khuzaima",
	marks: 95,

},

{
	name: "Laiba",
	marks: 94,
	
},
{
	name: "Abad",
	marks: 93,

},

{
	name: "Suleman",
	marks: 93,

},

	]
}


module.exports = students