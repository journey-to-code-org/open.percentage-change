function finite(v,n){if(typeof v!=="number"||!Number.isFinite(v))throw new TypeError(`Expected ${n} to be finite`);}
export function percentageChange(previous,current){finite(previous,"previous");finite(current,"current");if(previous===0)return current===0?0:(current>0?Infinity:-Infinity);return((current-previous)/Math.abs(previous))*100;}
export function percentageDifference(a,b){finite(a,"a");finite(b,"b");const avg=(Math.abs(a)+Math.abs(b))/2;return avg===0?0:(Math.abs(a-b)/avg)*100;}
export function applyPercentage(value,percent){finite(value,"value");finite(percent,"percent");return value+(value*percent/100);}
