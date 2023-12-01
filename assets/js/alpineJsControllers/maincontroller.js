document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => (
        {
            massage: 'I Love Programming', 
            names: ['Sepehr', 'abas', 'nima'], 
            testfunc: ()=>{
                alert(this.massage)
            }
    }))
})