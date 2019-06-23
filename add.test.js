function add(a,b){
	return a+b;
}

test change

describe('test練習',function(){
	it('a+b應該等於15',function(){
		expect(add(5,10)).toEqual(15)
		})
	})
