
        var els = document.getElementsByClassName("prodlabelv2-badge");

        if(els) initProductAppLabels()


        // Fix DOM appended product
        var productLabelToObserve = document.querySelector("body");
        if(productLabelToObserve){
          const productLabelMutationObserver = new MutationObserver(()=>{ initProductAppLabels() });
          productLabelMutationObserver.observe(productLabelToObserve, {subtree: true, childList: true});
        }

        function initProductAppLabels(){
          Array.prototype.forEach.call(els, function(label) {
            if (label.classList.contains("hide")) {

              // Find the closest parent with class
              let cardProductElement = false;
              if(label.closest('.product-card-wrapper')) cardProductElement = label.closest('.product-card-wrapper').querySelector('.card--product');
              if(label.closest('.card-wrapper')) cardProductElement = label.closest('.card-wrapper').querySelector('.card--product');
              if(label.closest('.image-modal-wrapper') && label.closest('.image-modal-wrapper').querySelector('slider-component')) cardProductElement = label.closest('.image-modal-wrapper').querySelector('slider-component');
              if(label.closest('.image-modal-wrapper') && label.closest('.image-modal-wrapper').querySelector('#ProductPhoto')) cardProductElement = label.closest('.image-modal-wrapper').querySelector('#ProductPhoto');
              if(label.closest('#ProductPhoto')) cardProductElement = label.closest('#ProductPhoto');

              // Old theme
              if(label.closest('.product_grid-item')) cardProductElement = label.closest('.product_grid-item').querySelector('.grid-link__image--product');
              if(label.closest('.product-single')) cardProductElement = label.closest('.product-single').querySelector('#ProductPhoto');

              if (cardProductElement) {
                // Move the label to the `card--product` element & remove hide class
                label.classList.remove("hide");
                cardProductElement.appendChild(label);

                // Hide SF original sale label
                let saleBadge = cardProductElement.querySelector('.badge--sale, .card__badge-on_sale');
                if (saleBadge) {
                  saleBadge.classList.add("hide");
                }
              }
            }
          });
        }

