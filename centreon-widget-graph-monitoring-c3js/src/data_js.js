var timeout;

function loadTop10() {
    jQuery.ajax("./ajax.php", {
	    success : function(htmlData) {
		jQuery("#infoAjax").html("");
		jQuery("#infoAjax").html(htmlData);
		var h = document.getElementById("Dummy").scrollHeight + 10;
		if(h){
		    parent.iResize(window.name, h);
		}else{
		    parent.iResize(window.name, 200);
		}
	    }
	});
    if (autoRefresh > 0) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(loadTop10, (autoRefresh * 1000));
    }
}

jQuery(function() {
        loadTop10();
});
