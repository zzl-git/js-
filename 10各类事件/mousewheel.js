
function addMouseWheel(obj, fn)
{
	function fnWheel(ev)
	{
		var oEvent=ev||event;
		var down=false;
		
		if(oEvent.wheelDelta)
		{
			down=oEvent.wheelDelta<0?true:false;
		}
		else
		{
			down=oEvent.detail<0?false:true;
		}
		
		fn(down);
		
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	
	if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)
	{
		obj.addEventListener('DOMMouseScroll', fnWheel, false);
	}
	else
	{
		obj.onmousewheel=fnWheel;
	}
}