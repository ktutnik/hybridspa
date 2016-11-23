(function(){
    $(document).on('click', 'a', function(){
        get(addNoLayout($(this).attr('href')), function(data){
            processResponse($(data));
        })
        return false;
    });

    $(document).on('submit', 'form', function(){
        post($(this), function(data){
            processResponse($(data))
        })
    });

    $(document).ready(function(){
        initForms($(this));
    })

    function processResponse(response){
        $('#main-content')
            .empty()
            .append(response);
        initForms(response)
    }

    function addNoLayout(url){
        return url + (url.split('?')[1] ? '&':'?') + "nolayout=true";
    }

    function get(url, success){
        $('<iframe/>').appendTo('body')
            .attr('src', url)
            .hide()
            .load(function(){
                if(success){
                    success($(this).contents().find('body').children())
                }
                $(this).remove();
            })
    }

    function initForms(target){
        target.each(function(){
            var form = $(this)
            if(!form.is('form')){
                form = form.find('form');
            }
            if(form.length > 0){
                form.attr('target', '__post_target');
                form.attr('action', addNoLayout(form.attr('action')));
            }
        });
        
    }

    function post(form, success){
        $('<iframe name="__post_target"/>').appendTo('body')
            .hide()
            .load(function(){
                if(success){
                    success($(this).contents().find('body').children())
                }
                $(this).remove();
            });
    }
})()
