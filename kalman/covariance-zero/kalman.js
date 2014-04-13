// 2-dimensional Kalman filter

window.Kalman = function() {
  
  //this.x = Matrix.Zero(4, 1);
  this.x = Matrix.create([350, 100, 10, 10 ]);
  this.P = Matrix.Diagonal([10, 10, 0, 0]);
  this.u = Matrix.Zero(4, 1);

  this.dt = 1;
  this.mP = 10;

  this.K = Matrix.Zero(4,4);
  
 this.F = Matrix.create([
    [1, 0, this.dt, 0],
    [0, 1, 0,  this.dt],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ]);

  this.H = Matrix.create([
    [1, 0, 0, 0],
    [0, 1, 0, 0]
  ]);

  this.R = Matrix.create([
    [this.mP, 0],
    [0,       this.mP]
  ]);

  this.I = Matrix.I(4);

  this.filter = function(measuredX, measuredY) {
    // prediction(Prior calculations)
    this.x = this.F.multiply(this.x).add(this.u); // prior x
    this.P = this.F.multiply(this.P).multiply(this.F.transpose());
    var do_posterior = 0;
	if(do_posterior == 1){
    // measurement (Correction, posterior calculations)
		var Z = Matrix.create([[measuredX], [measuredY]]); 
		var y = Z.subtract(this.H.multiply(this.x)); // z^ = H* x^
		var S = this.H.multiply(this.P).multiply(this.H.transpose()).add(this.R); 
		this.K = this.P.multiply(this.H.transpose()).multiply(S.inverse());
		var K = this.K;
		this.x = this.x.add(K.multiply(y)); // posterior x 
		this.P = this.I.subtract(K.multiply(this.H)).multiply(this.P); // covariance's update
	}
  };

  this.currentX = function() {
    return this.x.e(1,1);
  };

  this.currentY = function() {
    return this.x.e(2,1);
  };

  this.currentVx = function() {
    return this.x.e(3,1);
  };

  this.currentVy = function() {
    return this.x.e(4,1);
  };

  this.nextX = function() {
    return this.currentX() + this.currentVx();
  };

  this.nextY = function() {
    return this.currentY() + this.currentVy();
  };
};
