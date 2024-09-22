const container = document.getElementById('container')
const spinner = document.getElementById('spinner')

window.addEventListener('load', () =>{

    container.classList.add('bg-tranparent')

    spinner.classList.remove('w-28  h-28 border-8 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red-500 rounded-full')
})