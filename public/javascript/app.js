
    $(document).ready(()=>{
           $('#menu').addClass('hidden');
           $('body').fadeIn(1000);
    
           $('.link').click((e)=>{
                e.preventDefault();
                newLocation = e.target.href;
                $('body').fadeOut(1000, newpage);  
             })

             function newpage() {
             window.location = newLocation;
            }

            $('.fa-times').click(()=>{
                $('#menu').fadeOut(1);
                $('#burger').fadeIn(1000);
            });

            
            $('#burger').click(()=>{
                $('#menu').fadeIn(500);
                $('#burger').fadeOut(1);
            });


    })
 


