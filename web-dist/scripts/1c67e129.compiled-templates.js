this["JST"] = this["JST"] || {};

this["JST"]["editor/Component"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-scale\">\r\n<div class=\"content\"></div>\r\n</div>\r\n<!-- deactivate skewing to discourage bad style <span class=\"topLabel label skewx\" data-delta=\"skewX\">↔</span> -->\r\n<!-- <span class=\"leftLabel label skewy\" data-delta=\"skewY\">↔</span> -->\r\n<span class=\"rightLabel label rotate\" data-delta=\"rotate\">↻</span>\r\n<span class=\"scale label\" data-delta=\"scale\">↔</span>\r\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\r\n<div class=\"positioningCtrls form-inline\">\r\n	<span class=\"label leftposition\">→</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"x\" value=\"";
  foundHelper = helpers['x'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\r\n	<span class=\"label bottomposition\">↑</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"y\" value=\"";
  foundHelper = helpers['y'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\r\n</div>\r\n";
  return buffer;};

this["JST"]["editor/Editor"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"navbar navbar-fixed-top menuBar\">\r\n  <div class=\"btn-inverse temp\">\r\n    <div class=\"container\">\r\n    	<a class=\"brand\" href=\"#\"><img src=\"img/strut-logo-32-light.png\" alt=\"Strut 0.2\"/></a>\r\n     	<ul class=\"nav\">\r\n     		<li class=\"dropdown active\">\r\n     			<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n     				File<b class=\"caret\"></b>\r\n     			</a>\r\n     			<ul class=\"dropdown-menu\">\r\n     		 		<li data-option=\"new\"><a href=\"#\">New</a></li>\r\n     				<li data-option=\"open\"><a href=\"#\">Open...</a></li>\r\n<!--     				<li data-option=\"openRecent\"><a href=\"#\">Open Recent...</a></li> -->\r\n     				<li data-option=\"save\"><a href=\"#\">Save</a></li>\r\n     				<li data-option=\"saveAs\"><a href=\"#\">Save As...</a></li>\r\n     			</ul>\r\n     		</li>\r\n            <li class=\"dropdown active\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    Edit<b class=\"caret\"></b>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li data-option=\"undo\"><a href=\"#\">Undo <span class=\"undoName label\"></span></a></li>\r\n                    <li data-option=\"redo\"><a href=\"#\">Redo <span class=\"redoName label\"></span></a></li>\r\n                    <li data-option=\"cut\"><a href=\"#\">Cut</a></li>\r\n                    <li data-option=\"copy\"><a href=\"#\">Copy</a></li>\r\n                    <li data-option=\"paste\"><a href=\"#\">Paste</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"dropdown active\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    Slideshow<b class=\"caret\"></b>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li data-option=\"exportWebpage\"><a href=\"#\">Export as Webpage</a></li>\r\n                    <li data-option=\"exportZIP\"><a href=\"#\">Zip Presentation</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li data-option=\"exportJSON\"><a href=\"#\">Export to JSON</a></li>\r\n                    <li data-option=\"importJSON\"><a href=\"#\">Import from JSON</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li data-option=\"changeBackground\"><a href=\"#\">Change Background</a></li>\r\n                </ul>\r\n            </li>\r\n     	</ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"perspectives-container\">\r\n</div>\r\n\r\n<div class=\"modal hide\" id=\"exportModal\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n    <h3>Export as Webpage</h3>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Currently the best way to export your presentation\r\n    as a webpage is to use your browser's built in \"save page\" feature.\r\n    <ol>\r\n        <li>Click <em>Preview</em> to view your presentation</li>\r\n        <li>Press <code>Ctrl+S</code> or <code>⌘+s</code></li>\r\n        <li>Choose <code>Webpage, Complete</code> for your save as type</li>\r\n        <li>Click <code>Save</code></li>\r\n    </ol>\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a href=\"#\" class=\"btn btn-inverse\" data-dismiss=\"modal\">Ok</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal hide\" id=\"zipModal\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n    <h3>Export as Webpage</h3>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Zip Created!\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <p id=\"downloadify\">\r\n        You must have Flash 10 installed to download this file.\r\n    </p>\r\n  </div>\r\n</div>\r\n";};

this["JST"]["editor/SlideEditor"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"navbar\">\r\n  <div class=\"navbar-inner buttonBar\">\r\n    <div class=\"container\">\r\n        <ul class=\"nav\">\r\n            <li style=\"width: 120px\">\r\n            	<div class=\"btn-group iconBtns newSlide\">\r\n            		<a class=\"btn btn btn-small menuBarOption\" data-option=\"createSlide\" href=\"#\"><i class=\"icon-plus\"></i>Slide</a>\r\n            	</div>\r\n            </li>\r\n            <li class=\"divider-vertical\">\r\n            </li>\r\n            <li style=\"width: 120px\"></li>\r\n            <li>\r\n                  <div class=\"btn-group iconBtns\">\r\n                        <a class=\"btn menuBarOption\" data-option=\"textBox\"><i class=\"icon-text-width\"></i>Text</a>\r\n                        <a class=\"btn btn menuBarOption\" data-option=\"picture\"><i class=\"icon-picture\"></i>Image</a>\r\n                        <a class=\"btn btn menuBarOption\" data-option=\"video\"><i class=\"icon-facetime-video\"></i>Video</a>\r\n                        <a class=\"btn btn menuBarOption\" data-option=\"iframe\"><i class=\"icon-globe\"></i>Website</a>\r\n                        <!-- <a class=\"btn btn menuBarOption\" data-option=\"table\"><i class=\"icon-th\"></i>Table</a>\r\n                        <a class=\"btn btn menuBarOption\" data-option=\"shapes\"><i class=\"icon-star\"></i>Shapes</a> -->\r\n                  </div>\r\n            </li>\r\n            <li class=\"divider-vertical\">\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav pull-right\">\r\n            <li>\r\n                  <div class=\"btn-group iconBtns\" style=\"display: inline-block\">\r\n                        <a class=\"btn transitionEditorBtn\" data-option=\"transitionEditor\"><i class=\"icon-th-large\"></i><span>Overview</span></a>\r\n                  </div>\r\n                  <div class=\"btn-group iconBtns\" style=\"display: inline-block\">\r\n                        <a class=\"btn btn-success transitionEditorBtn\" data-option=\"preview\"><i class=\"icon-play icon-white\"></i><span>Present</span></a>\r\n                  </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mainContent\">\r\n</div>\r\n";};

this["JST"]["editor/SlideSnapshot"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<canvas></canvas>\r\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\r\n<span class=\"badge badge-inverse\"></span>";};

this["JST"]["editor/TransitionEditor"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"navbar\">\r\n  <div class=\"navbar-inner buttonBar\">\r\n    <div class=\"container\">\r\n      <ul class=\"nav cameraSettings\">\r\n        <li>\r\n         <!-- <div class=\"btn-group cameraControls\">\r\n            <button class=\"btn\"><i class=\"icon-camera\"></i></button>\r\n            <a class=\"btn active\" data-option=\"lookDownZ\">Z</a>\r\n            <a class=\"btn\" data-option=\"lookDownY\">Y</a>\r\n            <a class=\"btn\" data-option=\"lookDownX\">X</a>\r\n          </div> -->\r\n        </li>\r\n        <li class=\"divider-vertical\">\r\n        </li>\r\n        <li>\r\n          <span class=\"label label-inverse\">Interval:</span><input type=\"text\" data-option=\"interval\" value=\"0\"></input>\r\n        </li>\r\n      </ul>\r\n    	<ul class=\"nav pull-right\">\r\n    		<li>\r\n    			<div class=\"btn-group iconBtns\" style=\"display: inline-block\">\r\n                        <a class=\"btn menuBarOption\" data-option=\"slideEditor\"><i class=\"icon-th-list\"></i><span>Slides</span></a>\r\n          </div>\r\n          <div class=\"btn-group iconBtns\" style=\"display: inline-block\">\r\n                        <a class=\"btn btn-success menuBarOption\" data-option=\"preview\"><i class=\"icon-play icon-white\"></i><span>Present</span></a>\r\n          </div>\r\n    		</li>\r\n    	</ul>\r\n   	</div>\r\n  </div>\r\n</div>\r\n<div class=\"transitionSlides\">\r\n</div>\r\n";};

this["JST"]["editor/TransitionSlideSnapshot"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content\">\r\n<canvas></canvas>\r\n</div>\r\n<div class=\"topLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateY\">↻Y</span>\r\n	<input type=\"text\" data-option=\"rotateY\" value=\"";
  foundHelper = helpers.rotateY;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotateY; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></input>\r\n</div>\r\n<div class=\"leftLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateX\">↻X</span>\r\n	<input type=\"text\" data-option=\"rotateX\" value=\"";
  foundHelper = helpers.rotateX;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotateX; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></input>\r\n</div>\r\n<div class=\"rightLabel form-inline\">\r\n	<span class=\"label rotates\" data-delta=\"rotateZ\">↻Z</span>\r\n	<input type=\"text\" data-option=\"rotateZ\" value=\"";
  foundHelper = helpers.rotateZ;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotateZ; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></input>\r\n</div>\r\n<div class=\"positioningCtrls form-inline\">\r\n	<span class=\"label layer\">z</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"z\" value=\"";
  foundHelper = helpers['z'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\r\n	<span class=\"label scales\">↔</span>\r\n	<input class=\"position\" type=\"text\" data-option=\"scale\" value=\"";
  foundHelper = helpers.impScale;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>\r\n</div>\r\n<span class=\"badge badge-inverse\"></span>\r\n";
  return buffer;};

this["JST"]["etch/align"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \r\n	class=\"btn btn-small etch-";
  foundHelper = helpers.button;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"><i class=\"icon-align-";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></i></a>";
  return buffer;};

this["JST"]["etch/colorChooser"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"color-chooser etch-";
  foundHelper = helpers.button;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"><div></div></div>";
  return buffer;};

this["JST"]["etch/defaultButton"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \r\n	class=\"btn btn-small etch-";
  foundHelper = helpers.button;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"><span>";
  foundHelper = helpers.display;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.display; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</span></a>";
  return buffer;};

this["JST"]["etch/fontFamilySelection"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"btn-group\">\r\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\r\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\r\n		<li>\r\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\r\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\r\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\r\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\r\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\r\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\r\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'Press Start 2P', cursive\">Press Start 2P</a>\r\n		</li>\r\n	</ul>\r\n</div>";};

this["JST"]["etch/fontSizeSelection"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"btn-group\">\r\n	<a class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text\">72</span>\r\n		<span class=\"caret\"></span></a>\r\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\r\n		<li>\r\n                  <a href=\"#\" data-value=\"144\">144</a>\r\n                  <a href=\"#\" data-value=\"96\">96</a>\r\n                  <a href=\"#\" data-value=\"72\">72</a>\r\n			<a href=\"#\" data-value=\"64\">64</a>\r\n                  <a href=\"#\" data-value=\"48\">48</a>\r\n                  <a href=\"#\" data-value=\"36\">36</a>\r\n                  <a href=\"#\" data-value=\"24\">24</a>\r\n                  <a href=\"#\" data-value=\"16\">16</a>\r\n                  <a href=\"#\" data-value=\"12\">12</a>\r\n                  <a href=\"#\" data-value=\"8\">8</a>\r\n		</li>\r\n     	</ul>\r\n</div>";};

this["JST"]["impress_renderer/ComponentContainer"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "scale(";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['x'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", ";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['y'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program8(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program10(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "scale(";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['x'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", ";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['y'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")";
  return buffer;}
function program11(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "scale(";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['x'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", ";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1['y'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")";
  return buffer;}
function program16(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "";
  return buffer;}

  buffer += "<div class=\"componentContainer\" style=\"top: ";
  stack1 = depth0['y'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; left: ";
  stack1 = depth0['x'];
  foundHelper = helpers.round;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)}) : helperMissing.call(depth0, "round", stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\r\n-webkit-transform: ";
  stack1 = depth0.scale;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\n-moz-transform: ";
  stack1 = depth0.scale;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\r\ntransform: ";
  stack1 = depth0.scale;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;};

this["JST"]["impress_renderer/Image"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<img src=\"";
  foundHelper = helpers.src;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></img>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/ImpressTemplate"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n";
  foundHelper = helpers.attributes;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n<div class=\"step\" data-x=\"";
  stack1 = depth0['x'];
  foundHelper = helpers.scaleX;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)}) : helperMissing.call(depth0, "scaleX", stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-y=\"";
  stack1 = depth0['y'];
  foundHelper = helpers.scaleY;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)}) : helperMissing.call(depth0, "scaleY", stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = depth0.rotateX;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  ";
  stack1 = depth0.rotateY;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(12, program12, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.rotateZ;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0['z'];
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.impScale;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(20, program20, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n<div style=\"width: 1024px; height: 768px\">\r\n";
  foundHelper = helpers.components;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(22, program22, data)}); }
  else { stack1 = depth0.components; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if (!helpers.components) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(22, program22, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-rotate-x=\"";
  stack1 = depth0.rotateX;
  foundHelper = helpers.toDeg;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)}) : helperMissing.call(depth0, "toDeg", stack1, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program12(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-rotate-y=\"";
  stack1 = depth0.rotateY;
  foundHelper = helpers.toDeg;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)}) : helperMissing.call(depth0, "toDeg", stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;}
function program13(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-rotate-z=\"";
  stack1 = depth0.rotateZ;
  foundHelper = helpers.toDeg;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)}) : helperMissing.call(depth0, "toDeg", stack1, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;}
function program16(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program18(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-z=\"";
  foundHelper = helpers['z'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program20(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "data-scale=\"";
  foundHelper = helpers.impScale;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"";
  return buffer;}

function program22(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\r\n";
  foundHelper = helpers.renderComponent;
  stack1 = foundHelper ? foundHelper.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(23, program23, data)}) : helperMissing.call(depth0, "renderComponent", depth0, {hash:{},inverse:self.noop,fn:self.program(23, program23, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;}
function program23(depth0,data) {
  
  var buffer = "";
  return buffer;}

function program25(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n<script>\r\nvar interval = ";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + ";\r\nif (interval >= 1000) {\r\n    setInterval(function() {\r\n        impress().next();\r\n    }, interval);\r\n}\r\n</script>\r\n";
  return buffer;}

  buffer += "<head>\r\n<meta charset=\"utf-8\" />\r\n<meta name=\"viewport\" content=\"width=1024\" />\r\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\r\n<title>Deck Title</title>\r\n\r\n<meta name=\"description\" content=\"TODO\" />\r\n<meta name=\"author\" content=\"TODO\" />\r\n\r\n<style>\r\n.componentContainer {\r\n    position: absolute;\r\n    -webkit-transform-origin: 0 0;\r\n    -moz-transform-origin: 0 0;\r\n    transform-origin: 0 0;\r\n}\r\n\r\n.bg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n</style>\r\n<link href=\"preview_export/css/main.css\" rel=\"stylesheet\" />\r\n<link href='preview_export/css/web-fonts.css' rel='stylesheet' type='text/css'>\r\n\r\n<link rel=\"shortcut icon\" href=\"favicon.png\" />\r\n<link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\" />\r\n</head>\r\n<body class=\"impress-not-supported\">\r\n\r\n<!-- This is a work around / hack to get the user's browser to download the fonts \r\n if they decide to save the presentation. -->\r\n<div style=\"visibility: hidden; width: 0px; height: 0px\">\r\n<img src=\"preview_export/css/Lato-Bold.woff\" />\r\n<img src=\"preview_export/css/HammersmithOne.woff\" />\r\n<img src=\"preview_export/css/Gorditas-Regular.woff\" />\r\n<img src=\"preview_export/css/FredokaOne-Regular.woff\" />\r\n<img src=\"preview_export/css/Ubuntu.woff\" />\r\n<img src=\"preview_export/css/Ubuntu-Bold.woff\" />\r\n<img src=\"preview_export/css/PressStart2P-Regular.woff\" />\r\n<img src=\"preview_export/css/Lato-BoldItalic.woff\" />\r\n<img src=\"preview_export/css/AbrilFatface-Regular.woff\" />\r\n<img src=\"preview_export/css/Lato-Regular.woff\" />\r\n</div>\r\n\r\n<div class=\"fallback-message\">\r\n    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>\r\n    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>\r\n</div>\r\n<div class=\"bg\" style=\"";
  stack1 = depth0.background;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.styles;
  foundHelper = helpers.extractBG;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "extractBG", stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n<div id=\"impress\">\r\n\r\n";
  stack1 = depth0.slides;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.models;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  stack1 = stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</div>\r\n<div class=\"hint\">\r\n    <p>Use a spacebar or arrow keys to navigate</p>\r\n</div>\r\n<script>\r\nif (\"ontouchstart\" in document.documentElement) { \r\n    document.querySelector(\".hint\").innerHTML = \"<p>Tap on the left or right to navigate</p>\";\r\n}\r\n</script>\r\n\r\n";
  foundHelper = helpers.interval;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(25, program25, data)}); }
  else { stack1 = depth0.interval; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if (!helpers.interval) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(25, program25, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<script>\r\nif (!window.impressStarted) {\r\n    startImpress(document, window);\r\n    impress().init();   \r\n}\r\n</script>\r\n</body>";
  return buffer;};

this["JST"]["impress_renderer/SVGContainer"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  foundHelper = helpers['y'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px; left: ";
  foundHelper = helpers['x'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px; width: ";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.width;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "px; height: ";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.height;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "px;\">\r\n";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;};

this["JST"]["impress_renderer/SVGImage"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<img src=\"";
  foundHelper = helpers.src;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" style=\"width: 100%; height: 100%\"></img>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/TextBox"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div style=\"font-family: ";
  foundHelper = helpers.family;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.family; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "; font-size: ";
  foundHelper = helpers.size;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.size; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px;\r\n			font-weight: ";
  foundHelper = helpers.weight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.weight; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "; font-style: ";
  foundHelper = helpers.style;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "; color: #";
  foundHelper = helpers.color;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ";\r\n			text-decoration: ";
  foundHelper = helpers.decoration;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.decoration; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "; text-align: ";
  foundHelper = helpers.align;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.align; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\r\n";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\r\n</div>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/TransformContainer"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "rotate(";
  foundHelper = helpers.rotate;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotate; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewX(";
  foundHelper = helpers.skewX;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewX; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewY(";
  foundHelper = helpers.skewY;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewY; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program7(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "rotate(";
  foundHelper = helpers.rotate;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotate; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewX(";
  foundHelper = helpers.skewX;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewX; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewY(";
  foundHelper = helpers.skewY;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewY; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program13(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "rotate(";
  foundHelper = helpers.rotate;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.rotate; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program15(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewX(";
  foundHelper = helpers.skewX;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewX; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "skewY(";
  foundHelper = helpers.skewY;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.skewY; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "rad)";
  return buffer;}

  buffer += "<div class=\"transformContainer\" style=\"-webkit-transform: ";
  stack1 = depth0.rotate;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewX;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewY;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; -moz-transform: ";
  stack1 = depth0.rotate;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewX;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewY;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(11, program11, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; transform: ";
  stack1 = depth0.rotate;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewX;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(15, program15, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = depth0.skewY;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  return buffer;};

this["JST"]["impress_renderer/Video"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<video controls>\r\n	<source src=\"";
  foundHelper = helpers.src;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" type=\"";
  foundHelper = helpers.videoType;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.videoType; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></source>\r\n</video>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/WebFrame"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<iframe width=\"960\" height=\"768\" src=\"";
  foundHelper = helpers.src;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></iframe>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/Youtube"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<object width=\"";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.width;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.height;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"><param name=\"movie\" value=\"http://www.youtube.com/v/";
  foundHelper = helpers.shortSrc;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.shortSrc; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "&hl=en&fs=1\"><param name=\"allowFullScreen\" value=\"true\"><embed src=\"http://www.youtube.com/v/";
  foundHelper = helpers.shortSrc;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.shortSrc; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "&hl=en&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\"";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.width;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" height=\"";
  stack1 = depth0.scale;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.height;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"></object>\r\n</div>\r\n</div>";
  return buffer;};

this["JST"]["impress_renderer/YoutubeContainer"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  foundHelper = helpers['y'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px; left: ";
  foundHelper = helpers['x'];
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "px;\">\r\n";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;};

this["JST"]["widgets/BackgroundPicker"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>Change Background</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<div class=\"pull-left\">\r\n		<div><h4>Gradient</h4></div>\r\n		<div class=\"gradientPicker\">\r\n		</div>\r\n		<div class=\"gradientOptions\">\r\n			<div class=\"btn-group\">\r\n	  			<button class=\"btn\">Type</button>\r\n	  			<button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n	    			<span class=\"caret\"></span>\r\n	  			</button>\r\n	  			<ul class=\"dropdown-menu\" data-option=\"type\">\r\n	    			<li><a href=\"#\" data-value=\"linear\">Linear</a></li>\r\n	    			<li><a href=\"#\" data-value=\"radial\">Radial</a></li>\r\n	  			</ul>\r\n			</div>\r\n			<div class=\"btn-group\">\r\n	  			<button class=\"btn\">Direction</button>\r\n	  			<button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n	    			<span class=\"caret\"></span>\r\n	  			</button>\r\n	  			<ul class=\"dropdown-menu\" data-option=\"direction\">\r\n	    			<li><a href=\"#\" data-value=\"top\">Top</a></li>\r\n	    			<li><a href=\"#\" data-value=\"left\">Left</a></li>\r\n	    			<li><a href=\"#\" data-value=\"15deg\">15&deg;</a></li>\r\n	    			<li><a href=\"#\" data-value=\"30deg\">30&deg;</a></li>\r\n	    			<li><a href=\"#\" data-value=\"45deg\">45&deg;</a></li>\r\n	    			<li><a href=\"#\" data-value=\"105deg\">105&deg;</a></li>\r\n	    			<li><a href=\"#\" data-value=\"120deg\">120&deg;</a></li>\r\n	    			<li><a href=\"#\" data-value=\"135deg\">135&deg;</a></li>\r\n	  			</ul>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"pull-left bgPreview\">\r\n		<div><h4>Background Preview</h4></div>\r\n		<div class=\"gradientPreview\">\r\n		</div>\r\n	</div>\r\n	<div style=\"clear: both\"></div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>\r\n	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a>\r\n</div>";};

this["JST"]["widgets/DownloadDialog"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>Download Ready</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<h4>Click below to download</h4>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a class=\"downloadLink btn btn-inverse\" target=\"_blank\" title=\"Download\"><i class=\"icon-download-alt icon-white\"></i></a>\r\n</div>";};

this["JST"]["widgets/ItemGrabber"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "<div data-option=\"browse\" class=\"btn\">Browse</div>";}

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<div class=\"alert alert-error disp-none\">\r\n  		<button class=\"close\" data-dismiss=\"alert\">×</button>\r\n  		The image URL you entered appears to be incorrect\r\n	</div>\r\n	<h4>URL:</h4><div class=\"form-inline\"><input type=\"text\" name=\"itemUrl\"></input>&nbsp;";
  foundHelper = helpers.browsable;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  else { stack1 = depth0.browsable; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	<input type=\"file\" style=\"display:none\"></input>\r\n	<h4>Preview:</h4>\r\n	<ul class=\"thumbnails\">\r\n		<li class=\"span4\">\r\n			<div class=\"thumbnail\">\r\n				<";
  foundHelper = helpers.tag;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.tag; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " class=\"preview\" width=\"360\" height\"268\"></";
  foundHelper = helpers.tag;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.tag; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ">\r\n			</div>\r\n		</li>\r\n	</ul>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\r\n</div>";
  return buffer;};

this["JST"]["widgets/OpenDialog"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n			<li><a href=\"#\"><span>";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "</span><button class=\"close\">x</button></a></li>\r\n		";
  return buffer;}

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>Open</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<ul class=\"nav nav-list\">\r\n		";
  stack1 = depth0.fileNames;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>\r\n	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a>\r\n</div>";
  return buffer;};

this["JST"]["widgets/RawTextImporter"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>Import/Export Show (from/to JSON)</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<h4>JSON string</h4>\r\n	<textarea style=\"width: 100%; height: 100%\" rows=\"10\"></textarea>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>\r\n</div>";};

this["JST"]["widgets/SaveAsDialog"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n					<li><a href=\"#\"><span>";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "</span><button class=\"close\">x</button></a></li>\r\n				";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n					<li><a href=\"#\"><span>";
  depth0 = typeof depth0 === functionType ? depth0() : depth0;
  buffer += escapeExpression(depth0) + "</span><button class=\"close\">x</button></a></li>\r\n				";
  return buffer;}

  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3>Save as...</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n	<!-- <ul class=\"nav nav-tabs\">\r\n  		<li class=\"active\"><a href=\"#saveLocalTab\">Local</a></li>\r\n  		<li><a href=\"#saveRemoteTab\">Remote</a></li>\r\n	</ul> -->\r\n\r\n	<!-- <div class=\"tab-content\">\r\n  		<div class=\"tab-pane active\" id=\"saveLocalTab\"> -->\r\n		  	<h4>Name</h4>\r\n			<input type=\"text\"></input>\r\n			<ul class=\"nav nav-list\">\r\n				";
  stack1 = depth0.fileNames;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</ul>\r\n  		<!-- </div>\r\n  		<div class=\"tab-pane\" id=\"saveRemoteTab\">\r\n  			<h4>Name</h4>\r\n			<input type=\"text\"></input>\r\n			<ul class=\"nav nav-list\">\r\n				";
  stack1 = depth0.fileNames;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</ul>\r\n  		</div>\r\n	</div> -->\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#\" class=\"btn btn-inverse ok\">OK</a>\r\n	<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancel</a>\r\n</div>";
  return buffer;};