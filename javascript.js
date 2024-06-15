let opr=[];

function f3()
{
opr=[];
}

function f2(x)
{

if(x=='1')
opr.push(x);
else if(x=='2')
opr.push(x);
else if(x=='3')
opr.push(x);
else if(x=='4')
opr.push(x);
else if(x=='5')
opr.push(x);
else if(x=='6')
opr.push(x);
else if(x=='7')
opr.push(x);
else if(x=='8')
opr.push(x);
else if(x=='9')
opr.push(x);
else if(x=='0')
opr.push(x);
else if(x=='+')
opr.push(x);
else if(x=='-')
opr.push(x);
else if(x=='*')
opr.push(x);
else if(x=='/')
opr.push(x);
else if(x=='%')
opr.push(x);
else if(x=='.')
opr.push(x);
else if(x=='v1')
opr.push('(');
else if(x=='v2')
opr.push(')');
else if(x=='del')
opr.pop()


document.getElementById("zz").value=(opr);
xx=document.getElementById("zz").value
qq=xx.replace(/,/g, '');// new........(xx.replace(/,/g, '');)
document.getElementById("a").value=(qq);



}


function f1()
{
    
    a=document.getElementById("a").value;
    document.getElementById("a").value=eval(a);
    ii=document.getElementById("a").value;
    opr=[ii];
    
    
    
    
}