function category()
{
    var a = document.getElementById("cate").value;
    if(a == 'environment')
         {
           
             $(document).ready(function()
                               {
                 $(".environ").show(0000,abc());
                 
             })
         }
    else
        {
           
             if(a == "mountain")
                 {
                    $(document).ready(function()
                                     {
                           $(".mount").show(0000,def());
                        
                    })
                 }
            else
                {
                    if(a == "portfolio")
                        {
                             $(".portfolio").show(0000,ghi());
                        }
                    else{
                        if(a == "Select Category")
                            {
                                 alert("Please select category ");
                            }
                    }
                }
           
            
        }
}


function abc()
{
    $(document).ready(function()
                     {
           $(".mount").hide();
           $(".portfolio").hide();
    })
}


function def()
{
    $(document).ready(function()
                     {
            $(".environ").hide();
         $(".portfolio").hide();
    })
}


function ghi()
{
      $(document).ready(function()
                       {
               $(".mount").hide();
               $(".environ").hide();
      })
}


function submi()
{
    var a,b,d;
    a = document.getElementById("txt10").value;
    b = document.getElementById("txt2").value;
   
    d = document.getElementById("txt4").value;
     

    if(a == "")
    {  
        alert("Your name is required ");
        
    }
  

    if(b=="")
    {
          alert("Email id is required ");
    }

    if(d == "")
    {
         alert("Message box is empty. Please fill it.");
    }
     
    
}


function home()
{
    window.location = "index.html";
}


function about()
{
    window.location = "about.html";
    
}

function portfolio()
{
    window.location = "portfolio.html";
}

function blog()
{
    window.location = "blog.html";
}

function contact()
{
    window.location = "contact.html";
}


function comment()
{
    alert("Current Page donot exists right now.\nPlease try after sometime.");
}

function email()
{
    alert("Current Page donot exists right now.\nPlease try after sometime.");
}
  

function site()
{
    alert("Current Page donot exists right now.\nPlease try after sometime.");
}

function help()
{
    alert("Current Page donot exists right now.\nPlease try after sometime.");
}


function sear()
{
    var a = document.getElementById("txt1").value;
    if(a == "")
    {
         alert("Please submit some text to search ");

    }
    else{
        alert("Try after sometime to search about "  + a);
    }
}



function form_det()
{
  var a = document.getElementById("name").value;
  var b = document.getElementById("email").value;
  var c = document.getElementById("sub").value;
  var d = document.getElementById("mess").value;
  
  if(a == "")
  {
       alert("Name is Required ");    

  }

  if(b == "")
  {
      alert("Email Id is required ");
  }

  if(c == "")
  {
        alert("Subject is required ");
  }

  if(d == "")
  {
      alert("Message is required ");
  }

      
}















