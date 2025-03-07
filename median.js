//! find the median of two sorted arrays 
function medianof2sortedarray(a,b)
{
    for(var i=0;i<b.length;i++)
    {
        a.push(b[i]);
    }
    for(i=0;i<a.length;i++)
    {
        for (let j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                let temp;
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    let n=a.length;
    if (n%2===0)
    {
        return ((a[(n/2)]+a[(n/2)-1])/2);
    }
    else
    {
        return (a[((n-1)/2)]);
    }
}
console.log(medianof2sortedarray([1,2,3,4],[10,20,30,40,50,60]));
