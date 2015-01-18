// Написать функцию которая принимает 3 аргумента, и возвращает сумму квадратов двух бОльших.

function square(argument1, argument2, argument3) {
	var result;
	if (argument1 < argument2 && argument1 < argument3) {
		result = (argument2*argument2) + (argument3*argument3);
	} else if (argument2 < argument1 && argument2 < argument3) {
		result = (argument1*argument1) + (argument3*argument3);
	} else {
		result = (argument1*argument1) + (argument2*argument2);
	}
	return result;
}

square(1,2,3);