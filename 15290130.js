var points = [];
var colors = [];
var a = 5;
var bool = 0; 
var angleY = 0;
var angleX = 0;
var angleZ = 0;
var angleV = 0;
var direction1 = 1;
var direction2 = 1;
var direction3 = 1;
var direction4 = 1;
var adim=0;
var stack=[];
var control=0;
window.onload=function init(){
	event.initEvent('build', true, true);
	var canvas = document.getElementById("gl-canvas");
	gl = canvas.getContext("webgl");
	
	{var vertices = [
		vec4(-0.3, -0.2, 0.2,1),
		vec4(-0.3, 0.6, 0.2,1),
		vec4(0.3, 0.6, 0.2,1),
		vec4(0.3, -0.2, 0.2,1),
		vec4(-0.3, -0.2, -0.2,1),
		vec4(-0.3, 0.6, -0.2,1),
		vec4(0.3, 0.6, -0.2,1),
		vec4(0.3, -0.2, -0.2,1) 
	];
	var headvertices = [
		vec4(-0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.6, -0.1 ,1),
		vec4(-0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.6, -0.1, 1)	
	];
	
	var armvertices = [
		
		vec4(0.3, 0.3, 0.1, 1),
		vec4(0.3, 0.6, 0.1, 1),
		vec4(0.4, 0.6, 0.1, 1),
		vec4(0.4, 0.3, 0.1, 1),
		vec4(0.3, 0.3, -0.1 ,1),
		vec4(0.3, 0.6, -0.1, 1),
		vec4(0.4, 0.6, -0.1, 1),
		vec4(0.4, 0.3, -0.1, 1)	
	];
	var armvertices2 = [
	
		vec4(-0.3, 0.3, 0.1, 1),
		vec4(-0.3, 0.6, 0.1, 1),
		vec4(-0.4, 0.6, 0.1, 1),
		vec4(-0.4, 0.3, 0.1, 1),
		vec4(-0.3, 0.3, -0.1 ,1),
		vec4(-0.3, 0.6, -0.1, 1),
		vec4(-0.4, 0.6, -0.1, 1),
		vec4(-0.4, 0.3, -0.1, 1)
	
	];
	var handvertices = [
		vec4(0.34, 0.1, 0.05, 1),
		vec4(0.34, 0.3, 0.05, 1),
		vec4(0.36, 0.3, 0.05, 1),
		vec4(0.36, 0.1, 0.05, 1),
		vec4(0.34, 0.1, -0.05 ,1),
		vec4(0.34, 0.3, -0.05, 1),
		vec4(0.36, 0.3, -0.05, 1),
		vec4(0.36, 0.1, -0.05, 1)
	];
		var handvertices2 = [
		vec4(-0.34, 0.1, 0.05, 1),
		vec4(-0.34, 0.3, 0.05, 1),
		vec4(-0.36, 0.3, 0.05, 1),
		vec4(-0.36, 0.1, 0.05, 1),
		vec4(-0.34, 0.1, -0.05 ,1),
		vec4(-0.34, 0.3, -0.05, 1),
		vec4(-0.36, 0.3, -0.05, 1),
		vec4(-0.36, 0.1, -0.05, 1)
	];
		var legvertices = [
		vec4(-0.1, -0.5, 0.1, 1), 
		vec4(-0.1, -0.2, 0.1, 1),
		vec4(-0.25, -0.2, 0.1, 1),
		vec4(-0.25, -0.5, 0.1, 1),
		vec4(-0.1, -0.5, -0.1 ,1),
		vec4(-0.1, -0.2, -0.1, 1),
		vec4(-0.25, -0.2, -0.1, 1),
		vec4(-0.25, -0.5, -0.1, 1)	
	];
	
	var leg2vertices = [
		vec4(0.1, -0.5, 0.1, 1),
		vec4(0.1, -0.2, 0.1, 1),
		vec4(0.25, -0.2, 0.1, 1),
		vec4(0.25, -0.5, 0.1, 1),
		vec4(0.1, -0.5, -0.1 ,1),
		vec4(0.1, -0.2, -0.1, 1),
		vec4(0.25, -0.2, -0.1, 1),
		vec4(0.25, -0.5, -0.1, 1)	
	];
	var footvertices = [
		vec4(0.15, -0.5, 0.05, 1),
		vec4(0.15, -0.7, 0.05, 1),
		vec4(0.2, -0.7, 0.05, 1),
		vec4(0.2, -0.5, 0.05, 1),
		vec4(0.15, -0.5, -0.05 ,1),
		vec4(0.15, -0.7, -0.05, 1),
		vec4(0.2, -0.7, -0.05, 1),
		vec4(0.2, -0.5, -0.05, 1)
	];
	
		var foot2vertices = [
		vec4(-0.15, -0.5, 0.05, 1),
		vec4(-0.15, -0.7, 0.05, 1),
		vec4(-0.2, -0.7, 0.05, 1),
		vec4(-0.2, -0.5, 0.05, 1),
		vec4(-0.15, -0.5, -0.05 ,1),
		vec4(-0.15, -0.7, -0.05, 1),
		vec4(-0.2, -0.7, -0.05, 1),
		vec4(-0.2, -0.5, -0.05, 1)
	];
	

	
	var indices = [ 
		1, 0, 3,
		3, 2, 1,
		2, 3, 7,
		7, 6, 2,
		3, 0, 4,
		4, 7, 3,
		6, 5, 1,
		1, 2, 6,
		4, 5, 6,
		6, 7, 4,
		5, 4, 0,
		0, 1, 5,
		
		9, 8, 11,
		11, 10, 9,
		10, 11, 15,
		15, 14, 10,
		11, 8, 12,
		12, 15, 11,
		14, 13, 9,
		9, 10, 14,
		12, 13, 14,
		14, 15, 12,
		13, 12, 8,
		8, 9, 13,
		
		17, 16, 19,
		19, 18, 17,
		18, 19, 23,
		23, 22, 18,
		19, 16, 20,
		20, 23, 19,
		22, 21, 17,
		17, 18, 22,
		20, 21, 22,
		22, 23, 20,
		20, 21, 16,
		16, 17, 21,
		
		25, 24 ,27,
		27,26,25,
		26,27,31,
		31,30,26,
		27,24,28,
		28,31,27,
		30,29,25,
		25,26,30,
		28,29,30,
		30,31,28,
		29,28,24,
		24,25,28,

		
		33,32,35,
		35,34,33,
		34,35,39,
		39,38,34,
		35,32,36,
		36,39,35,
		38,37,33,
		33,34,38,
		36,37,38,
		38,39,36,
		37,36,32,
		32,33,37,
		
		41,40,43,
		43,42,41,
		42,43,47,
		47,46,42,
		43,40,44,
		44,47,43,
		46, 45, 41,
		41, 42, 46,
		44, 45, 46,
		46, 47, 44,
		45, 44, 40,
		40, 41, 45,
		
	
		49, 48, 51,
		51, 50, 49,
		50, 51, 55,
		55, 54, 50,
		51, 48, 52,
		52, 55, 51,
		54, 53, 49,
		49, 50, 54,
		52, 53, 54,
		54, 55, 52,
		53, 52, 48,
		48, 49, 53,
		
		57, 56, 59,
		59, 58, 57,
		58, 59, 63,
		63, 62, 58,
		59, 56, 60,
		60, 63, 59,
		62, 61, 57,
		57, 58, 62,
		60, 61, 62,
		62, 63, 60,
		60, 61, 56,
		56, 57, 61,
		
				
		65,64,67,
		67,66,65,
		66,67,71,
		71,70,66,
		67,64,68,
		68,71,67,
		70,69,65,
		65,66,70,
		68,69,70,
		70,71,68,
		69,68,64,
		64,65,68,
		
		73,72,75,
		75,74,73,
		74,75,79,
		79,78,74,
		75,72,76,
		76,79,75,
		78,77,73,
		73,74,78,
		76,77,78,
		78,79,76,
		77,76,72,
		72,73,77,
		
	];
	
	
	
		
	var vertexColors = [[ 0.0, 0.0, 0.0, 1.0 ], // black
		[ 1.0, 0.0, 0.0, 1.0 ], // red
		[ 1.0, 1.0, 0.0, 1.0 ], // yellow
		[ 0.0, 1.0, 0.0, 1.0 ], // green
		[ 0.0, 0.0, 1.0, 1.0 ], // blue
		[ 1.0, 0.0, 1.0, 1.0 ], // magenta
		[ 1.0, 1.0, 1.0, 1.0 ], // white
		[ 0.0, 1.0, 1.0, 1.0 ] // cyan	
	];

	
	var vertshdr;
	var fragshdr;
	
	var vertelem = document.getElementById("vertex-shader");
	vertshdr = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertshdr , vertelem.text);
	gl.compileShader(vertshdr);
	
	var fragelem = document.getElementById("fragment-shader");
	fragshdr=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragshdr,fragelem.text);
	gl.compileShader(fragshdr);
	
	var program=gl.createProgram();
	gl.attachShader(program,vertshdr);
	gl.attachShader(program,fragshdr);
	gl.linkProgram(program);
	gl.useProgram(program);
	
	
	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0 , 1.0 , 1.0 , 1.0);
	
	
	colors.push(vertexColors[1]);			//0
	points.push(vertices[0]);
	colors.push(vertexColors[1]);
	points.push(vertices[1]);
	colors.push(vertexColors[1]);
	points.push(vertices[2]);
	colors.push(vertexColors[1]);
	points.push(vertices[3]);
	colors.push(vertexColors[1]);
	points.push(vertices[4]);
	colors.push(vertexColors[1]);
	points.push(vertices[5]);
	colors.push(vertexColors[1]);
	points.push(vertices[6]);
	colors.push(vertexColors[1]);
	points.push(vertices[7]);				//7
	

	
	colors.push(vertexColors[5]);			//8
	points.push(armvertices[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices[7]);			//15

	colors.push(vertexColors[5]);
	points.push(armvertices2[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[7]);			//23
	
	colors.push(vertexColors[0]);
	points.push(handvertices[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices[7]);				//31
	
	colors.push(vertexColors[0]);
	points.push(handvertices2[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[7]);				//39
	
	colors.push(vertexColors[2]);	
	points.push(headvertices[0]);
	colors.push(vertexColors[2]);
	points.push(headvertices[1]);
	colors.push(vertexColors[2]);
	points.push(headvertices[2]);
	colors.push(vertexColors[2]);
	points.push(headvertices[3]);
	colors.push(vertexColors[2]);
	points.push(headvertices[4]);
	colors.push(vertexColors[2]);
	points.push(headvertices[5]);
	colors.push(vertexColors[2]);
	points.push(headvertices[6]);
	colors.push(vertexColors[2]);
	points.push(headvertices[7]);				//47
	
	colors.push(vertexColors[5]);				//48
	points.push(legvertices[0]);
	colors.push(vertexColors[5]);
	points.push(legvertices[1]);
	colors.push(vertexColors[5]);
	points.push(legvertices[2]);
	colors.push(vertexColors[5]);
	points.push(legvertices[3]);
	colors.push(vertexColors[5]);
	points.push(legvertices[4]);
	colors.push(vertexColors[5]);
	points.push(legvertices[5]);
	colors.push(vertexColors[5]);
	points.push(legvertices[6]);
	colors.push(vertexColors[5]);
	points.push(legvertices[7]);				//55
	
	
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[0]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[1]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[2]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[3]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[4]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[5]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[6]);
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[7]);				//63
	
	
	colors.push(vertexColors[4]);	
	points.push(footvertices[0]);
	colors.push(vertexColors[4]);
	points.push(footvertices[1]);
	colors.push(vertexColors[4]);
	points.push(footvertices[2]);
	colors.push(vertexColors[4]);
	points.push(footvertices[3]);
	colors.push(vertexColors[4]);
	points.push(footvertices[4]);
	colors.push(vertexColors[4]);
	points.push(footvertices[5]);
	colors.push(vertexColors[4]);
	points.push(footvertices[6]);
	colors.push(vertexColors[4]);
	points.push(footvertices[7]);				//71
	
		
	colors.push(vertexColors[4]);	
	points.push(foot2vertices[0]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[1]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[2]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[3]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[4]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[5]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[6]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[7]);				//79
	}
	
		function Animframe()
	{	
	
	if(adim%30==5) // 5
	{points=[];	
		
		
		var vertices_2 = [
		vec4(-0.3, -0.2, 0.2,1),
		vec4(-0.3, 0.6, 0.2,1),
		vec4(0.3, 0.6, 0.2,1),
		vec4(0.3, -0.2, 0.2,1),
		vec4(-0.3, -0.2, -0.2,1),
		vec4(-0.3, 0.6, -0.2,1),
		vec4(0.3, 0.6, -0.2,1),
		vec4(0.3, -0.2, -0.2,1) 
	];
	var headvertices_2= [
		vec4(-0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.6, -0.1 ,1),
		vec4(-0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.6, -0.1, 1)	
	];
	
	var armvertices_2= [
		
		vec4(0.3, 0.3, 0.1, 1),
		vec4(0.3, 0.6, 0.1, 1),
		vec4(0.4, 0.6, 0.1, 1),
		vec4(0.4, 0.3, 0.1, 1),
		vec4(0.3, 0.3, -0.1 ,1),
		vec4(0.3, 0.6, -0.1, 1),
		vec4(0.4, 0.6, -0.1, 1),
		vec4(0.4, 0.3, -0.1, 1)	
	];
	var armvertices2_2 = [
	
		vec4(-0.3, 0.3, 0.1, 1),
		vec4(-0.3, 0.6, 0.1, 1),
		vec4(-0.4, 0.6, 0.1, 1),
		vec4(-0.4, 0.3, 0.1, 1),
		vec4(-0.3, 0.3, -0.1 ,1),
		vec4(-0.3, 0.6, -0.1, 1),
		vec4(-0.4, 0.6, -0.1, 1),
		vec4(-0.4, 0.3, -0.1, 1)
	
	];
	var handvertices_2= [
		vec4(0.34, 0.1, 0.05, 1),
		vec4(0.34, 0.3, 0.05, 1),
		vec4(0.36, 0.3, 0.05, 1),
		vec4(0.36, 0.1, 0.05, 1),
		vec4(0.34, 0.1, -0.05 ,1),
		vec4(0.34, 0.3, -0.05, 1),
		vec4(0.36, 0.3, -0.05, 1),
		vec4(0.36, 0.1, -0.05, 1)
	];
		var handvertices2_2= [
		vec4(-0.34, 0.1, 0.05, 1),
		vec4(-0.34, 0.3, 0.05, 1),
		vec4(-0.36, 0.3, 0.05, 1),
		vec4(-0.36, 0.1, 0.05, 1),
		vec4(-0.34, 0.1, -0.05 ,1),
		vec4(-0.34, 0.3, -0.05, 1),
		vec4(-0.36, 0.3, -0.05, 1),
		vec4(-0.36, 0.1, -0.05, 1)
	];
	var legvertices_2 = [
		vec4(-0.1,-0.5068129233206385 ,0.05604159843534548, 1), 
		vec4(-0.1,-0.20795451389311495,0.08218832125964293, 1),
		vec4(-0.25,-0.20795451389311495,0.08218832125964293, 1),
		vec4(-0.25, -0.5068129233206385,0.05604159843534548, 1),
		vec4(-0.1, -0.48938177477110695,-0.14319734118300365 ,1),
		vec4(-0.1, -0.1905233653435833,-0.1170506183587062, 1),
		vec4(-0.25, -0.1905233653435833, -0.1170506183587062, 1),
		vec4(-0.25, -0.48939177477110695, -0.14319734118300365, 1)	
	];
	
	var leg2vertices_2 = [
		vec4(0.1,-0.48938177477110695,0.14319734118300365, 1),
		vec4(0.1,-0.1905233653435833, 0.1170506183587062, 1),
		vec4(0.25,-0.1905233653435833, 0.1170506183587062, 1),
		vec4(0.25,-0.48938177477110695, 0.14319734118300365, 1),
		vec4(0.1,-0.5068129233206385,-0.05604159843534548 ,1),
		vec4(0.1,-0.20795451389311495,-0.08218832125964293, 1),
		vec4(0.25,-0.20795451389311495,-0.08218832125964293, 1),
		vec4(0.25, -0.5068129233206385, -0.05604159843534548, 1)	
	];
	var footvertices_2 = [
		vec4(0.15,-0.5024551361832557,0.0062318635307581985, 1),
		vec4(0.15,-0.7016940758016047,-0.01119928501877343, 1),
		vec4(0.2, -0.7016940758016047,-0.01119928501877343, 1),
		vec4(0.2, -0.5024551361832557, 0.0062318635307581985, 1),
		vec4(0.15 ,-0.4937395619084899,-0.09338760627841636 ,1),
		vec4(0.15,-0.6929785015268389, -0.110818754827948, 1),
		vec4(0.2 ,-0.6929785015268389,-0.110818754827948, 1),
		vec4(0.2, -0.4937395619084899,-0.09338760627841636, 1)
	];
	
		var foot2vertices_2 = [
		vec4(-0.15 ,-0.4937395619084899,0.09338760627841636, 1),
		vec4(-0.15, -0.6929785015268389,0.110818754827948, 1),
		vec4(-0.2,-0.6929785015268389,0.110818754827948, 1),
		vec4(-0.2, -0.4937395619084899, 0.09338760627841636, 1),
		vec4(-0.15,-0.5024551361832557,-0.0062318635307581985 ,1),
		vec4(-0.15,-0.7016940758016047,0.01119928501877343, 1),
		vec4(-0.2,-0.7016940758016047, 0.01119928501877343, 1),
		vec4(-0.2,-0.5024551361832557,-0.0062318635307581985, 1)
	];
		
	colors.push(vertexColors[1]);			//0
	points.push(vertices_2[0]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[1]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[2]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[3]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[4]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[5]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[6]);
	colors.push(vertexColors[1]);
	points.push(vertices_2[7]);				//7
	

	
	colors.push(vertexColors[5]);			//8
	points.push(armvertices_2[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices_2[7]);			//15

	colors.push(vertexColors[5]);
	points.push(armvertices2_2[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices2_2[7]);			//23
	
	colors.push(vertexColors[0]);
	points.push(handvertices_2[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices_2[7]);				//31
	
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices2_2[7]);				//39
	
	colors.push(vertexColors[2]);	
	points.push(headvertices_2[0]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[1]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[2]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[3]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[4]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[5]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[6]);
	colors.push(vertexColors[2]);
	points.push(headvertices_2[7]);				//47
	
	colors.push(vertexColors[5]);				//48
	points.push(legvertices_2[0]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[1]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[2]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[3]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[4]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[5]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[6]);
	colors.push(vertexColors[5]);
	points.push(legvertices_2[7]);				//55
	
	
	colors.push(vertexColors[5]);	
	points.push(leg2vertices_2[0]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[1]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[2]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[3]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[4]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[5]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices_2[6]);
	colors.push(vertexColors[5]);	
	points.push(leg2vertices_2[7]);				//63
	
	
	colors.push(vertexColors[4]);	
	points.push(footvertices_2[0]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[1]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[2]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[3]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[4]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[5]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[6]);
	colors.push(vertexColors[4]);
	points.push(footvertices_2[7]);				//71
	
		
	colors.push(vertexColors[4]);	
	points.push(foot2vertices_2[0]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[1]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[2]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[3]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[4]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[5]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[6]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices_2[7]);				//79
	
	control=1;	
	}		
	
	
	
	

	
	else if(adim%30==15)	//20
	{points=[];
			var vertices = [
		vec4(-0.3, -0.2, 0.2,1),
		vec4(-0.3, 0.6, 0.2,1),
		vec4(0.3, 0.6, 0.2,1),
		vec4(0.3, -0.2, 0.2,1),
		vec4(-0.3, -0.2, -0.2,1),
		vec4(-0.3, 0.6, -0.2,1),
		vec4(0.3, 0.6, -0.2,1),
		vec4(0.3, -0.2, -0.2,1) 
	];
	var headvertices = [
		vec4(-0.1, 0.2, 0.1, 1),
		vec4(-0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.2, 0.1, 1),
		vec4(-0.1, 0.2, -0.1 ,1),
		vec4(-0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.2, -0.1, 1)	
	];
	
	var armvertices = [
		
		vec4(0.3, 0.3, 0.1, 1),
		vec4(0.3, 0.6, 0.1, 1),
		vec4(0.4, 0.6, 0.1, 1),
		vec4(0.4, 0.3, 0.1, 1),
		vec4(0.3, 0.3, -0.1 ,1),
		vec4(0.3, 0.6, -0.1, 1),
		vec4(0.4, 0.6, -0.1, 1),
		vec4(0.4, 0.3, -0.1, 1)	
	];
	var armvertices2 = [
	
		vec4(-0.3, 0.3, 0.1, 1),
		vec4(-0.3, 0.6, 0.1, 1),
		vec4(-0.4, 0.6, 0.1, 1),
		vec4(-0.4, 0.3, 0.1, 1),
		vec4(-0.3, 0.3, -0.1 ,1),
		vec4(-0.3, 0.6, -0.1, 1),
		vec4(-0.4, 0.6, -0.1, 1),
		vec4(-0.4, 0.3, -0.1, 1)
	
	];
	var handvertices = [
		vec4(0.34, 0.1, 0.05, 1),
		vec4(0.34, 0.3, 0.05, 1),
		vec4(0.36, 0.3, 0.05, 1),
		vec4(0.36, 0.1, 0.05, 1),
		vec4(0.34, 0.1, -0.05 ,1),
		vec4(0.34, 0.3, -0.05, 1),
		vec4(0.36, 0.3, -0.05, 1),
		vec4(0.36, 0.1, -0.05, 1)
	];
		var handvertices2 = [
		vec4(-0.34, 0.1, 0.05, 1),
		vec4(-0.34, 0.3, 0.05, 1),
		vec4(-0.36, 0.3, 0.05, 1),
		vec4(-0.36, 0.1, 0.05, 1),
		vec4(-0.34, 0.1, -0.05 ,1),
		vec4(-0.34, 0.3, -0.05, 1),
		vec4(-0.36, 0.3, -0.05, 1),
		vec4(-0.36, 0.1, -0.05, 1)
	];
	var legvertices = [
		vec4(-0.1,-0.5040483247255211,-0.0770408095842435, 1), 
		vec4(-0.1,-0.22214053848974857,0.02556523341345711, 1),
		vec4(-0.25, -0.22214053848974857,0.02556523341345711, 1),
		vec4(-0.25,-0.5040483247255211,-0.0770408095842435,1),
		vec4(-0.1,-0.43564429606038735,-0.26497933374142524,1),
		vec4(-0.1,-0.15373650982461484,-0.16237329074372459,1),
		vec4(-0.25,-0.15373650982461484,-0.16237329074372459,1),
		vec4(-0.25,-0.43564429606038735,-0.26497933374142524,1)	
	];
	
	var leg2vertices = [
		vec4(0.1,-0.43564429606038735,0.26497933374142524,1),
		vec4(0.1,-0.15373650982461484,0.16237329074372459,1),
		vec4(0.25,-0.15373650982461484,0.16237329074372459,1),
		vec4(0.25,-0.43564429606038735,0.26497933374142524,1),
		vec4(0.1,-0.5040483247255211,0.0770408095842435,1),
		vec4(0.1,-0.22214053848974857,-0.02556523341345711,1),
		vec4(0.25,-0.22214053848974857,-0.02556523341345711,1),
		vec4(0.25,-0.5040483247255211,0.0770408095842435,1)	
	];
	var footvertices = [
		vec4(-0.15,-0.48694731755923765,-0.12402544062353893,1),
		vec4(-0.15,-0.6748858417164193,-0.19242946928867266,1),
		vec4(-0.2,-0.6748858417164193,-0.19242946928867266,1),
		vec4(-0.2,-0.48694731755923765,-0.12402544062353893,1),
		vec4(-0.15,-0.4527453032266708,-0.21799470270212978,1),
		vec4(-0.15,-0.6406838273838523,-0.2863987313672635,1),
		vec4(-0.2,-0.6406838273838523,-0.2863987313672635,1),
		vec4(-0.2,-0.4527453032266708,-0.21799470270212978,1)
	];
	
		var foot2vertices = [
		vec4(0.15,-0.4527453032266708,0.21799470270212978,1),
		vec4(0.15,-0.6406838273838523,0.2863987313672635,1),
		vec4(0.2,-0.6406838273838523,0.2863987313672635,1),
		vec4(0.2,-0.4527453032266708,0.21799470270212978,1),
		vec4(0.15,-0.48694731755923765,0.12402544062353893,1),
		vec4(0.15,-0.6748858417164193,0.19242946928867266,1),
		vec4(0.2,-0.6748858417164193,0.19242946928867266,1),
		vec4(0.2,-0.48694731755923765,0.12402544062353893,1)
	];
		
		points=[];	
	colors.push(vertexColors[1]);			//0
	points.push(vertices[0]);
	colors.push(vertexColors[1]);
	points.push(vertices[1]);
	colors.push(vertexColors[1]);
	points.push(vertices[2]);
	colors.push(vertexColors[1]);
	points.push(vertices[3]);
	colors.push(vertexColors[1]);
	points.push(vertices[4]);
	colors.push(vertexColors[1]);
	points.push(vertices[5]);
	colors.push(vertexColors[1]);
	points.push(vertices[6]);
	colors.push(vertexColors[1]);
	points.push(vertices[7]);				//7
	

	
	colors.push(vertexColors[5]);			//8
	points.push(armvertices[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices[7]);			//15

	colors.push(vertexColors[5]);
	points.push(armvertices2[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[7]);			//23
	
	colors.push(vertexColors[0]);
	points.push(handvertices[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices[7]);				//31
	
	colors.push(vertexColors[0]);
	points.push(handvertices2[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[7]);				//39
	
	colors.push(vertexColors[2]);	
	points.push(headvertices[0]);
	colors.push(vertexColors[2]);
	points.push(headvertices[1]);
	colors.push(vertexColors[2]);
	points.push(headvertices[2]);
	colors.push(vertexColors[2]);
	points.push(headvertices[3]);
	colors.push(vertexColors[2]);
	points.push(headvertices[4]);
	colors.push(vertexColors[2]);
	points.push(headvertices[5]);
	colors.push(vertexColors[2]);
	points.push(headvertices[6]);
	colors.push(vertexColors[2]);
	points.push(headvertices[7]);				//47
	
	colors.push(vertexColors[5]);				//48
	points.push(legvertices[0]);
	colors.push(vertexColors[5]);
	points.push(legvertices[1]);
	colors.push(vertexColors[5]);
	points.push(legvertices[2]);
	colors.push(vertexColors[5]);
	points.push(legvertices[3]);
	colors.push(vertexColors[5]);
	points.push(legvertices[4]);
	colors.push(vertexColors[5]);
	points.push(legvertices[5]);
	colors.push(vertexColors[5]);
	points.push(legvertices[6]);
	colors.push(vertexColors[5]);
	points.push(legvertices[7]);				//55
	
	
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[0]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[1]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[2]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[3]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[4]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[5]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[6]);
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[7]);				//63
	
	
	colors.push(vertexColors[4]);	
	points.push(footvertices[0]);
	colors.push(vertexColors[4]);
	points.push(footvertices[1]);
	colors.push(vertexColors[4]);
	points.push(footvertices[2]);
	colors.push(vertexColors[4]);
	points.push(footvertices[3]);
	colors.push(vertexColors[4]);
	points.push(footvertices[4]);
	colors.push(vertexColors[4]);
	points.push(footvertices[5]);
	colors.push(vertexColors[4]);
	points.push(footvertices[6]);
	colors.push(vertexColors[4]);
	points.push(footvertices[7]);				//71
	
		
	colors.push(vertexColors[4]);	
	points.push(foot2vertices[0]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[1]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[2]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[3]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[4]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[5]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[6]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[7]);				//79
	control=1;
	}
			
	

	
	else if(adim%30==25)	//0
	{ 
		points=[];
		
		var vertices = [
		vec4(-0.3, -0.2, 0.2,1),
		vec4(-0.3, 0.6, 0.2,1),
		vec4(0.3, 0.6, 0.2,1),
		vec4(0.3, -0.2, 0.2,1),
		vec4(-0.3, -0.2, -0.2,1),
		vec4(-0.3, 0.6, -0.2,1),
		vec4(0.3, 0.6, -0.2,1),
		vec4(0.3, -0.2, -0.2,1) 
	];
	var headvertices = [
		vec4(-0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.8, 0.1, 1),
		vec4(0.1, 0.6, 0.1, 1),
		vec4(-0.1, 0.6, -0.1 ,1),
		vec4(-0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.8, -0.1, 1),
		vec4(0.1, 0.6, -0.1, 1)	
	];
	
	var armvertices = [
		
		vec4(0.3, 0.3, 0.1, 1),
		vec4(0.3, 0.6, 0.1, 1),
		vec4(0.4, 0.6, 0.1, 1),
		vec4(0.4, 0.3, 0.1, 1),
		vec4(0.3, 0.3, -0.1 ,1),
		vec4(0.3, 0.6, -0.1, 1),
		vec4(0.4, 0.6, -0.1, 1),
		vec4(0.4, 0.3, -0.1, 1)	
	];
	var armvertices2 = [
	
		vec4(-0.3, 0.3, 0.1, 1),
		vec4(-0.3, 0.6, 0.1, 1),
		vec4(-0.4, 0.6, 0.1, 1),
		vec4(-0.4, 0.3, 0.1, 1),
		vec4(-0.3, 0.3, -0.1 ,1),
		vec4(-0.3, 0.6, -0.1, 1),
		vec4(-0.4, 0.6, -0.1, 1),
		vec4(-0.4, 0.3, -0.1, 1)
	
	];
	var handvertices = [
		vec4(0.34, 0.1, 0.05, 1),
		vec4(0.34, 0.3, 0.05, 1),
		vec4(0.36, 0.3, 0.05, 1),
		vec4(0.36, 0.1, 0.05, 1),
		vec4(0.34, 0.1, -0.05 ,1),
		vec4(0.34, 0.3, -0.05, 1),
		vec4(0.36, 0.3, -0.05, 1),
		vec4(0.36, 0.1, -0.05, 1)
	];
		var handvertices2 = [
		vec4(-0.34, 0.1, 0.05, 1),
		vec4(-0.34, 0.3, 0.05, 1),
		vec4(-0.36, 0.3, 0.05, 1),
		vec4(-0.36, 0.1, 0.05, 1),
		vec4(-0.34, 0.1, -0.05 ,1),
		vec4(-0.34, 0.3, -0.05, 1),
		vec4(-0.36, 0.3, -0.05, 1),
		vec4(-0.36, 0.1, -0.05, 1)
	];
		var legvertices = [
		vec4(-0.1, -0.5, 0.1, 1), 
		vec4(-0.1, -0.2, 0.1, 1),
		vec4(-0.25, -0.2, 0.1, 1),
		vec4(-0.25, -0.5, 0.1, 1),
		vec4(-0.1, -0.5, -0.1 ,1),
		vec4(-0.1, -0.2, -0.1, 1),
		vec4(-0.25, -0.2, -0.1, 1),
		vec4(-0.25, -0.5, -0.1, 1)	
	];
	
	var leg2vertices = [
		vec4(0.1, -0.5, 0.1, 1),
		vec4(0.1, -0.2, 0.1, 1),
		vec4(0.25, -0.2, 0.1, 1),
		vec4(0.25, -0.5, 0.1, 1),
		vec4(0.1, -0.5, -0.1 ,1),
		vec4(0.1, -0.2, -0.1, 1),
		vec4(0.25, -0.2, -0.1, 1),
		vec4(0.25, -0.5, -0.1, 1)	
	];
	var footvertices = [
		vec4(0.15, -0.5, 0.05, 1),
		vec4(0.15, -0.7, 0.05, 1),
		vec4(0.2, -0.7, 0.05, 1),
		vec4(0.2, -0.5, 0.05, 1),
		vec4(0.15, -0.5, -0.05 ,1),
		vec4(0.15, -0.7, -0.05, 1),
		vec4(0.2, -0.7, -0.05, 1),
		vec4(0.2, -0.5, -0.05, 1)
	];
	
		var foot2vertices = [
		vec4(-0.15, -0.5, 0.05, 1),
		vec4(-0.15, -0.7, 0.05, 1),
		vec4(-0.2, -0.7, 0.05, 1),
		vec4(-0.2, -0.5, 0.05, 1),
		vec4(-0.15, -0.5, -0.05 ,1),
		vec4(-0.15, -0.7, -0.05, 1),
		vec4(-0.2, -0.7, -0.05, 1),
		vec4(-0.2, -0.5, -0.05, 1)
	];
	colors.push(vertexColors[1]);			//0
	points.push(vertices[0]);
	colors.push(vertexColors[1]);
	points.push(vertices[1]);
	colors.push(vertexColors[1]);
	points.push(vertices[2]);
	colors.push(vertexColors[1]);
	points.push(vertices[3]);
	colors.push(vertexColors[1]);
	points.push(vertices[4]);
	colors.push(vertexColors[1]);
	points.push(vertices[5]);
	colors.push(vertexColors[1]);
	points.push(vertices[6]);
	colors.push(vertexColors[1]);
	points.push(vertices[7]);				//7
	

	
	colors.push(vertexColors[5]);			//8
	points.push(armvertices[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices[7]);			//15

	colors.push(vertexColors[5]);
	points.push(armvertices2[0]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[1]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[2]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[3]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[4]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[5]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[6]);
	colors.push(vertexColors[5]);
	points.push(armvertices2[7]);			//23
	
	colors.push(vertexColors[0]);
	points.push(handvertices[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices[7]);				//31
	
	colors.push(vertexColors[0]);
	points.push(handvertices2[0]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[1]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[2]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[3]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[4]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[5]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[6]);
	colors.push(vertexColors[0]);
	points.push(handvertices2[7]);				//39
	
	colors.push(vertexColors[2]);	
	points.push(headvertices[0]);
	colors.push(vertexColors[2]);
	points.push(headvertices[1]);
	colors.push(vertexColors[2]);
	points.push(headvertices[2]);
	colors.push(vertexColors[2]);
	points.push(headvertices[3]);
	colors.push(vertexColors[2]);
	points.push(headvertices[4]);
	colors.push(vertexColors[2]);
	points.push(headvertices[5]);
	colors.push(vertexColors[2]);
	points.push(headvertices[6]);
	colors.push(vertexColors[2]);
	points.push(headvertices[7]);				//47
	
	colors.push(vertexColors[5]);				//48
	points.push(legvertices[0]);
	colors.push(vertexColors[5]);
	points.push(legvertices[1]);
	colors.push(vertexColors[5]);
	points.push(legvertices[2]);
	colors.push(vertexColors[5]);
	points.push(legvertices[3]);
	colors.push(vertexColors[5]);
	points.push(legvertices[4]);
	colors.push(vertexColors[5]);
	points.push(legvertices[5]);
	colors.push(vertexColors[5]);
	points.push(legvertices[6]);
	colors.push(vertexColors[5]);
	points.push(legvertices[7]);				//55
	
	
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[0]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[1]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[2]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[3]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[4]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[5]);
	colors.push(vertexColors[5]);
	points.push(leg2vertices[6]);
	colors.push(vertexColors[5]);	
	points.push(leg2vertices[7]);				//63
	
	
	colors.push(vertexColors[4]);	
	points.push(footvertices[0]);
	colors.push(vertexColors[4]);
	points.push(footvertices[1]);
	colors.push(vertexColors[4]);
	points.push(footvertices[2]);
	colors.push(vertexColors[4]);
	points.push(footvertices[3]);
	colors.push(vertexColors[4]);
	points.push(footvertices[4]);
	colors.push(vertexColors[4]);
	points.push(footvertices[5]);
	colors.push(vertexColors[4]);
	points.push(footvertices[6]);
	colors.push(vertexColors[4]);
	points.push(footvertices[7]);				//71
	
		
	colors.push(vertexColors[4]);	
	points.push(foot2vertices[0]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[1]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[2]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[3]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[4]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[5]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[6]);
	colors.push(vertexColors[4]);
	points.push(foot2vertices[7]);				//79
	control=1;	
	}
		
	
		adim++;
		
		/*for(var i=0;i<stack.length/2;i++)
		{
			var temp;
			temp=stack[i];
			stack[i]=stack[stack.length-1-i]
			stack[stack.length-i-1]=temp;
		}
			*/
			// render();
		
	if(control==1)	
	{	for(var i=0;i<stack.length;i++)
		{	var R=mat4();
			R=mult(R,stack[i]);
		for(var j=0;j<points.length;j++) 
			{points[j] = mult(R,points[j]);	}
		}
	}	
		render();
		if(adim==1000) adim=0;
		control=0;
		if(bool)
			{requestAnimationFrame(Animframe);}
		else return;
		
	}
	
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
    renderer.setSize( window.innerWidth, window.innerHeight );
}
	
	
	document.getElementById("Walk").onclick=function(){
			if(bool==0)
	{bool = 1;
	requestAnimationFrame(Animframe);
	}
	
	}
	document.getElementById("Stop").onclick=function(){
	bool =0 ;

	}
	

	
	window.onkeydown = function(event) {
      var key = String.fromCharCode(event.keyCode);
      switch (key) {
	   
         case "A":
		 	 
			var R = mat4();
		R = mult(R, rotateY(5));
		for(var i=0;i<points.length;i++) 
			{points[i] = mult(R,points[i]);	}
				 render();
				 stack.push(rotateY(5));
			  return;
		
		
	  
		case "D":
		
			var R = mat4();
		R = mult(R, rotateY(-5));
		for(var i=0;i<points.length;i++) 
			{points[i] = mult(R,points[i]);	}
			render();
			stack.push(rotateY(-5));
			return;
		
		case "W":
		
			var R = mat4();
		R = mult(R, rotateX(5));
		for(var i=0;i<points.length;i++) 
			{points[i] = mult(R,points[i]);	}
			render();
			stack.push(rotateX(5));
			return;
	
		case "S":
	
			var R = mat4();
		R = mult(R, rotateX(-5));
		for(var i=0;i<points.length;i++) 
			{points[i] = mult(R,points[i]);	}
			render();
			stack.push(rotateX(-5));
			return;
	  }
	}
	
	
	render();
	
	
	function render() {
	
	var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
    
    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );
	
    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
	
	var iBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices),gl.STATIC_DRAW);
	
	gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.DEPTH_TEST);
	

	gl.drawElements(gl.TRIANGLES,360, gl.UNSIGNED_BYTE, 0);
	
		

	
	}
	
	
	
	
	
	};






	




