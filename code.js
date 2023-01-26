const double = (arr)=>
	arr.map((val)=> val*2)
		

const squareAndFindEvens = (numbers)=>
	(numbers.map((num)=> num**2)).filter((sqrd)=> 
		sqrd % 2 === 0)