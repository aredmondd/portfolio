<template>
    <main class="text-2xl sm:text-xl flex flex-col flex-1 items-center justify-center">
        <h1 class="text-black text-center">hi, i'm aiden redmond.</h1>
        <h1 class="text-black text-center">this website is split in half. <br>check out the navbar.</h1><br><br>
        <h1 class="text-black text-sm"><a href="mailto:aidenredmondd@gmail.com" class="underline underline-offset-[6px] hover:text-pink">aidenredmondd@gmail.com</a> | <a href="https://github.com/aredmondd" target="_blank" class="underline underline-offset-[6px] hover:text-pink">@aredmondd</a></h1>
    </main>
</template>

<script>
document.addEventListener("DOMContentLoaded", function(){
    var replacers = document.querySelectorAll('[data-replace]');
    for(var i=0; i<replacers.length; i++){
        let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function(key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
        });
    }
});
</script>
