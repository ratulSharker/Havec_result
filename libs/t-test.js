var TTest = {

  calculateAVG:function(values)
	{
		return this.calculateAVGWithArbitraryLength(values, values.length);
	},

  calculateAVGWithArbitraryLength:function(values, length)
  {
    var total = 0;
		for(var i=0, len=values.length; i<len; i++)
		{
			total += values[i];
		}

		if(length > 0)
			return total / length;
		else
			return 0;
  },

  calculateSD:function (values)
	{
		var avg = this.calculateAVG(values);

		var listOfSqDeviation = new Array();

		for(var i=0, len=values.length; i<len; i++)
		{
			listOfSqDeviation.push(Math.pow(values[i] - avg, 2));
		}

		var avgOfSqDeviance = this.calculateAVGWithArbitraryLength(listOfSqDeviation, listOfSqDeviation.length-1.0 );
		return Math.sqrt(avgOfSqDeviance);
	},

  calculateTTestValue:function(values1, values2)
  {

    if(values1.length == 0 || values2.length == 0)
    {
      console.log("ERROR :: any of the set was empty");
      return -1;
    }

    var avgOfFirstSet   = this.calculateAVG(values1);
    var avgOfSecondSet  = this.calculateAVG(values2);

    var sdOfFirstSet  = this.calculateSD(values1);
    var sdOfSecondSet = this.calculateSD(values2);

    var dividend = avgOfFirstSet - avgOfSecondSet;

    var divisorSquare = Math.pow(sdOfFirstSet, 2)/values1.length + Math.pow(sdOfSecondSet, 2)/values2.length;
    var divisor = Math.sqrt(divisorSquare);


/*
    console.log("AVG of first set :: " + avgOfFirstSet);
    console.log("AVG of second set :: " + avgOfSecondSet);

    console.log("SD of first set :: " + sdOfFirstSet);
    console.log("SD of second set :: " + sdOfSecondSet);
*/
    return dividend / divisor;
  }
};
