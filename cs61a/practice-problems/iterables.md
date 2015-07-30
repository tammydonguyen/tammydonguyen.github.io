## Iterables
### Concepts
1. What method(s) must **iterables** have?
2. What method(s) must **iterators** have?
3. What data type does `__iter__` return?
4. What data type does `__next__` return?
5. Is a **generator** an iterable or an iterator?
6. What keyword in the body of a function makes that function return a generator object?
7. How is `yield` different from `return`?
8. When you call `next` on a generator, the body starts executing at what line? At what line will it stop? At what line will it start the next time you call `next`?
9. What happens when you call `list` on an iterable or an iterator? What happens if you call it a second time on the same objects?
10. Can you iterate through an iterable in a for loop? Can you iterate through an iterator in a for loop?


### What would Python print?
The following classes define an iterable representing the sequence of multiples for any given number and the iterator that returns the next value in the sequence. The sequence goes up to 1000.

    class Multiples:
    	def __init__(self, num):
    		self.num = num
    	
    	def __iter__(self):
    		return MultiplesIterator(self.num)
    
    class MultiplesIterator:
    	def __init__(self, num):
    		self.num = num
    		self.curr = num
    	
    	def __iter__(self):
    		return self
    	
    	def __next__(self):
    		if self.curr >= 1000:
    			raise StopIteration
    		val = self.curr
    		self.curr = self.curr + self.num
    		return val
    		
What will the following lines output?

    >>> hundreds = Multiples(100)
    >>> next(hundreds)
    TypeError: 'Multiples' object is not an iterator
    >>> next(iter(hundreds))
    100
    >>> next(iter(hundreds))
    100
    >>> i = iter(hundreds)
    >>> i is iter(hundreds)
    False
    >>> i is iter(i)
    True
    >>> next(i)
    100
    >>> next(i)
    200
    >>> list(hundreds)
    [100, 200, 300, 400, 500, 600, 700, 800, 900]
    >>> list(i)
    [300, 400, 500, 600, 700, 800, 900]
    >>> list(hundreds)
    [100, 200, 300, 400, 500, 600, 700, 800, 900]
    >>> i = iter(hundreds)
    >>> list(i)
    [100, 200, 300, 400, 500, 600, 700, 800, 900]
    >>> list(i)
	[]
	>>> for i in m:
	...     print(i)
	5
	25
	125
	625
	>>> for x in i:
	...     print(x)
    	

### Writing Iterables and Iterators
1. Write `__iter__` and `__next__` for the Binary Search Tree class so that the sequence is in increasing order.
2. Fill in the following definition of a generator function which yields every number from `1` to `n` and prints `'factor!'` if the current number is a factor of `n`.  
  
	    def print_factor(n):
	        curr = 1
	        while curr <= n:
	            if n % curr == 0:
	                print('factor!')
	            yield curr
	            curr += 1

3. Implement `my_list` so that it behaves like Python's built-in `list` constructor. See WWPP answers for examples of the behavior.

        def my_list(iterable):
        


