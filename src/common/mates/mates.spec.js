describe( 'Mates', function() {

    beforeEach( module( 'mates' ) );

    it( 'should exist', inject( function($mates) {
        expect( $mates ).toBeDefined();
    }));

    it( 'returns correct size when there are 6 default mates', inject( function($mates) {
        expect( 6 === $mates.size() ).toBeTruthy();
    }));

    it( 'returns size 7 after adding a mate', inject( function($mates) {
        $mates.add('Lolita');
        expect( 7 === $mates.size() ).toBeTruthy();
    }));

    it( 'returns size 5 after removing a mate', inject( function($mates) {
        var list = $mates.list();
        $mates.remove(list[2]);
        expect( 5 === $mates.size() ).toBeTruthy();
    }));

    it( ' should return Lolita as a unique name', inject( function($mates) {
        expect($mates.isUnique('Lolita') ).toBeTruthy();
    }));

    it( ' should return Roger as a NOT unique name', inject( function($mates) {
        expect(!$mates.isUnique('Roger')).toBeTruthy();
    }));

});
