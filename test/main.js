describe('Fib Controller Test', function() {

	beforeEach(module('root'));

	var index_controller, scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		index_controller = $controller('index', {
			$scope: scope
		});
	}));

	it('starts with currect values and resets correctly for simple functionality', function () {
		S_CUR = 0
		S_PREV = -1
		expect(scope.cur_fib).toEqual(S_CUR)
		expect(scope.prev_fib).toEqual(S_PREV)
		scope.simple_reset()
		expect(scope.cur_fib).toEqual(S_CUR)
		expect(scope.prev_fib).toEqual(S_PREV)
	});

	it('has a correct simple functionality', function() {
		fib = [scope.cur_fib]
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);
		scope.simple_next(); fib.push(scope.cur_fib);

		expect(fib).toEqual([0,1,1,2,3,5,8,13,21,34,55,89, 144, 233])
	});

	it('starts with currect values and resets correctly for iterative and recursive functionality', function () {
		FIRST_FIB = 0
		STARTING_SEQ = [0,1]
		expect(scope.fib_step).toEqual(FIRST_FIB)
		expect(scope.fib_sequence).toEqual(STARTING_SEQ)
		scope.reset()
		expect(scope.fib_step).toEqual(FIRST_FIB)
		expect(scope.fib_sequence).toEqual(STARTING_SEQ)
	});

	it('has a correct iterative function', function() {
		fib = []
		fib.push(scope.fib_at_n_iter(0))
		fib.push(scope.fib_at_n_iter(1))
		fib.push(scope.fib_at_n_iter(2))
		fib.push(scope.fib_at_n_iter(3))
		fib.push(scope.fib_at_n_iter(4))
		fib.push(scope.fib_at_n_iter(5))
		fib.push(scope.fib_at_n_iter(6))
		fib.push(scope.fib_at_n_iter(7))
		fib.push(scope.fib_at_n_iter(8))
		fib.push(scope.fib_at_n_iter(9))
		fib.push(scope.fib_at_n_iter(20))

		expect(fib).toEqual([0,1,1,2,3,5,8,13,21,34,6765])

	});

	it('has a correct recursive function', function() {
		fib = []
		fib.push(scope.fib_at_n_recursivly(0))
		fib.push(scope.fib_at_n_recursivly(1))
		fib.push(scope.fib_at_n_recursivly(2))
		fib.push(scope.fib_at_n_recursivly(3))
		fib.push(scope.fib_at_n_recursivly(4))
		fib.push(scope.fib_at_n_recursivly(5))
		fib.push(scope.fib_at_n_recursivly(6))
		fib.push(scope.fib_at_n_recursivly(7))
		fib.push(scope.fib_at_n_recursivly(8))
		fib.push(scope.fib_at_n_recursivly(9))
		fib.push(scope.fib_at_n_recursivly(20))

		expect(fib).toEqual([0,1,1,2,3,5,8,13,21,34,6765])

	});


	it('iterative picks up from recursive', function() {
		cur_fib = function() { return scope.fib_sequence[scope.fib_step] }
		expect(cur_fib()).toEqual(0)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(1)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(1)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(2)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(3)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(5)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(8)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(13)
	});

	it('recursive picks up from iterative', function() {
		cur_fib = function() { return scope.fib_sequence[scope.fib_step] }
		expect(cur_fib()).toEqual(0)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(1)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(1)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(2)
		scope.next_fib_iter()
		expect(cur_fib()).toEqual(3)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(5)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(8)
		scope.next_fib_recurs()
		expect(cur_fib()).toEqual(13)
	});
});