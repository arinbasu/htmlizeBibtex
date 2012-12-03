/* boring Legal Stuff
 ***********************************************************************************************************************
 Copyright (c) 2012, Aitor Gómez Goiri
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 following conditions are met:

 Redistributions of source code must retain the above copyright notice, this list of conditions and the following
 disclaimer.
 Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 **********************************************************************************************************************/


function getHTMLCodeForCite(citeid) {
  if(mode=="textual")
    return '<span class="show_citation"> [' + citeid + '] </span>'
  return '<span class="show_citation"> [pretty_image] </span>'
}

$(document).ready(function() {
  
  if (typeof mode === 'undefined') { // char with "textual" or "graphic"
    mode = "textual"; // textual or graphic
  }
  
  $('span.cite').each(
     function(index) {
       var citeid = $(this).text();
       
      $(getHTMLCodeForCite(citeid)).insertBefore(this);
      
      $(this).prev().attr('dialog-opened', 'false');
      
      $(this).prev().on("click",
	function(event){
	  var cite_selector = '#'+citeid;
	  
	  if( $(this).attr('dialog-opened')=='true' ){
	    $(cite_selector).dialog("close");
	    $(this).attr('dialog-opened', 'false');
	  } else {
	    $(cite_selector).dialog({ title: "Citation info", width: 500 });
	    $(this).attr('dialog-opened', 'true');
	  }
	  // dialog('isOpen') does not work before calling to dialog() to create it
	  //alert( $('#'+citeid).text() );
	}
      );
      
      
      $(this).hide();
      
      //$(this).replaceWith($('#'+$(this).text()).text());
      
      //$("#"+$(this).text()).dialog({ title: "Citation info" });
     }
  );

});