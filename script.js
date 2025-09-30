$('#menu-btn').click(function(){
        $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
        $('nav .navigation ul').removeClass('active')
});

const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navigation = document.querySelector('.navigation ul');

// Open menu
menuBtn.addEventListener('click', () => {
    navigation.style.right = "0";
});

// Close menu
menuClose.addEventListener('click', () => {
    navigation.style.right = "-220px";
});
