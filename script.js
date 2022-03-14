const bloque = document.querySelectorAll('.menuA');
const arrow = document.querySelectorAll('.arrow-a');

arrow.forEach((cadaArrow, i) => {

	arrow[i].addEventListener('click', () => {

		bloque.forEach((cadaBloque, i) => {
			bloque[i].classList.remove('activo');

		})
		bloque[i].classList.add('activo');
	})
});