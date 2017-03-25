'use strict'

const weights = {
	  100:   1  // regional
	, 102:   1  // regional
	, 109:  .8  // suburban
	, 400:  .7  // subway
	, 700:  .25 // bus
	, 3:    .25 // bus
	, 900:  .35 // tram
	, 1000: .6  // ferry
}

module.exports = weights
