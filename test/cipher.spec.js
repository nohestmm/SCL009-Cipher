describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
assert.equal (cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");

    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwyz" con offset 33',() =>{
      assert.equal (cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");

    });
  it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33',() =>{
      assert.equal (cipher.encode(-33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");

    });

    it('debería retornar "tuvwxyzabcdefghijklmnopqrs" para "abcdefghijklmnopqrstuvwxyz" con offset -33',() =>{
      assert.equal (cipher.encode(-33,"abcdefghijklmnopqrstuvwxyz"), "tuvwxyzabcdefghijklmnopqrs");

    });
    it('debería retornar "3456789012" para "0123456789" con offset 33',() =>{
      assert.equal (cipher.encode(33,"0123456789"), "3456789012");

    });


    it('debería retornar "7890123456" para "0123456789" con offset -33',() =>{
      assert.equal (cipher.encode(-33,"0123456789"), "7890123456");

    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal (cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    });


    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() =>{
      assert.equal (cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");

    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "TUVWXYZABCDEFGHIJKLMNOPQRS" con offset -33',() =>{
      assert.equal (cipher.decode(-33,"TUVWXYZABCDEFGHIJKLMNOPQRS"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "tuvwxyzabcdefghijklmnopqrs" con offset -33',() =>{
      assert.equal (cipher.decode(-33,"tuvwxyzabcdefghijklmnopqrs"), "abcdefghijklmnopqrstuvwxyz");

    });

    it('debería retornar "0123456789" para "3456789012" con offset 33',() =>{
      assert.equal (cipher.decode(33,"3456789012"), "0123456789");

    });


    it('debería retornar "0123456789" para "7890123456" con offset -33',() =>{
      assert.equal (cipher.decode(-33,"7890123456"), "0123456789");

    });

  });

});
