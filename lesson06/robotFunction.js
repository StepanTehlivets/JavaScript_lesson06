function Robot() {
	var self=this;
	self.name = 'Robot';
	self.occupation = 'I am just working';
	self.work = function() {
		console.log("I am " + this.name + ' - ' + this.occupation);
	}
}
	

function CoffeeRobot() {
	Robot.call(this);
	var self= this;
	self.name = 'CoffeeRobot';
	self.occupation = 'I am making coffee';
}
function DancerRobot() {
	Robot.call(this);
	var self= this;
	self.name = 'Robot Dancer';
	self.occupation = 'I am just dancing';
}
function CookerRobot() {
	Robot.call(this);
	var self= this;
	self.name = 'Robot Cooker';
	self.occupation = 'I am cooking';
}
var robot = new Robot();
robot.work();
var coffeeRobot = new CoffeeRobot();
coffeeRobot.work();
var dancerRobot = new DancerRobot();
dancerRobot.work();
var cookerRobot = new CookerRobot();
cookerRobot.work();



console.log('')

var myRobots = [robot,coffeeRobot,dancerRobot,cookerRobot];
for (var i = 0; i < myRobots.length; i++) {
	myRobots[i].work();
}