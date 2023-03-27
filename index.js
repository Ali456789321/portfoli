console.log('test')

var truth = true

$('#display').click((event) => {
    event.preventDefault()
})

$('#click-display').hide()

$('#display').click(function () {
    truth = !truth
    if(truth == true){
        $('#click-display').hide()
        $('body').removeClass('overflow') 
    } else {
        $('#click-display').show()
        $('body').addClass('overflow') 
    }
})

$("#port").click(() => {
    $("#port").css({"color" : "red",  "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#abt").css({"color" : "black", "text-decoration-line": "none"})
    $("#cont").css({"color" : "black", "text-decoration-line": "none"})
})

$("#abt").click(() => {
    $("#abt").css({"color" : "red", "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#port").css({"color" : "black",  "text-decoration-line": "none"})
    $("#cont").css({"color" : "black", "text-decoration-line": "none"})
})

$("#cont").click(() => {
    $("#cont").css({"color" : "red", "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#abt").css({"color" : "black",  "text-decoration-line": "none"})
    $("#port").css({"color" : "black", "text-decoration-line": "none"})
})

$('#mob-cont').click(function () {
    $('#click-display').hide()
    $("#mob-cont").css({"color" : "red", "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#mob-abt").css({"color" : "black",  "text-decoration-line": "none"})
    $("#mob-port").css({"color" : "black", "text-decoration-line": "none"})
    truth = true
    $('body').removeClass('overflow') 
})

$('#mob-abt').click(function () {
    $('#click-display').hide()
    $("#mob-abt").css({"color" : "red", "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#mob-cont").css({"color" : "black",  "text-decoration-line": "none"})
    $("#mob-port").css({"color" : "black", "text-decoration-line": "none"})
    truth = true
    $('body').removeClass('overflow') 
})

$('#mob-port').click(function () {
    $('#click-display').hide()
    $("#mob-port").css({"color" : "red", "text-decoration-line": "underline", "text-decoration-color": "red",
    "text-decoration-thickness": "2px",
    "text-underline-offset": "4px"})
    $("#mob-cont").css({"color" : "black",  "text-decoration-line": "none"})
    $("#mob-abt").css({"color" : "black", "text-decoration-line": "none"})
    truth = true
    $('body').removeClass('overflow') 
})

var typed = new Typed('.element', {
    strings: ['Ali', 'Web Developer', 'Freelancer'],
    smartBackspace: true, // Default value
    typeSpeed : 100,
    loop: true
  });   

  
