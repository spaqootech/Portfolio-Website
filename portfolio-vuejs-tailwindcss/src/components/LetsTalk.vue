<template lang="">
    <div class="flex flex-col gap-5 justify-center items-center">
        
        <div class="flex justify-center flex-col items-start bg-[url('/public/assets/terminal.png')] bg-center bg-contain bg-no-repeat md:h-[700px] p-10 md:p-32 w-full md:w-3/5">
            <h1 class="md:text-3xl font-bold text-gray-300 w-full">Let's Talk</h1>
            <p class="text-gray-500 text-sm hidden md:block">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lore 
            </p>
        
        <div class="flex flex-col md:gap-2 my-1 w-full">
            <div class="text-sm md:text-lg text-gray-500">Full name</div>
            <input type="text" placeholder="John Doe" class="w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg">
        </div>
        
        <div class="flex flex-col md:gap-2 my-1 w-full">
            <div class="text-sm md:text-lg text-gray-500">Email Address</div>
            <input type="text" placeholder="Johndoe@gmail.com" class="w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg">
        </div>
        
        <div class="flex flex-col md:gap-2 my-1 w-full">
            <div class="text-sm md:text-lg text-gray-500">Your Message</div>
            <textarea type="text" placeholder="Your Comment" class="w-full border-b border-gray-500 bg-gray-900 p-1 rounded-lg h-10 md:h-20"/>
        </div>

        <button class="w-full p-1 md:p-2 rounded-lg bg-gray-800 mt-2">Send Message</button>

    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>