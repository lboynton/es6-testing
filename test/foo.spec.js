import Foo from 'js/foo';

describe('foo', function () {
	var foo = new Foo();

	it('should return bar', function () {
		expect(foo.bar()).toBe('bar');
	});
});
