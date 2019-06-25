describe('Airport', function() {

  var airport;

  describe('Allows a plane to land', function() {
    it('lands a plane', function() {
      var airport = new Airport();
      var plane
      // spyOn(plane, 'land');
      airport.land(plane);
      expect(airport.land(plane)).toHaveBeenCalled();
      expect(airport.hangar).toContain(plane);
    });
  });
});
