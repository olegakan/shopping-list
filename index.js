
function addItem(){

    $('#js-shopping-list-form').submit(event => {
        const task = $(this).find('input[name="shopping-list-entry"]').val();
        
        event.preventDefault();
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${task}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);  

          // clears inputs field
          $(this).find('input[name="shopping-list-entry"]').val("")

    });
}

function buttons(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).parents('li').remove();
       
    });
}

$(addItem)
$(buttons)



