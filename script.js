document.addEventListener('DOMContentLoaded', function () {
    const titleList = document.querySelector('.title-list')
    const plantsList = document.querySelector('.plants-list')
    const dropdownSunlight = document.getElementById('dropdown_sunlight')
    const dropdownWater = document.getElementById('dropdown_water')
    const dropdownPets = document.getElementById('dropdown_pets');

    const combination1 = document.querySelector('.combination1')
    const combination2 = document.querySelector('.combination2')
    const combination3 = document.querySelector('.combination3')
    const combination4 = document.querySelector('.combination4')
    const combination5 = document.querySelector('.combination5')
    const noResults = document.querySelector('.no-results')

    function showCombination() {
        plantsList.style.display = 'none'
        titleList.style.display = 'none'
        combination1.style.display = 'none'
        combination2.style.display = 'none'
        combination3.style.display = 'none'
        combination4.style.display = 'none'
        combination5.style.display = 'none'

        const sunlight = dropdownSunlight.value
        const water = dropdownWater.value
        const pets = dropdownPets.value

        // COMBINATION 1
        if (sunlight === '3' && water === '3' && pets === '1') {
            noResults.style.display = 'none'
            plantsList.style.display = 'block'
            titleList.style.display = 'block'
            combination1.style.display = 'block'
        } 
        // COMBINATION 2
        else if (sunlight === '3' && water === '1' && pets === '1') {
            noResults.style.display = 'none'
            plantsList.style.display = 'block'
            titleList.style.display = 'block'
            combination2.style.display = 'block'
        } 
        // COMBINATION 3
        else if (sunlight === '2' && water === '1' && pets === '1') {
            noResults.style.display = 'none'
            plantsList.style.display = 'block'
            titleList.style.display = 'block'
            combination3.style.display = 'block'
        } 
        // COMBINATION 4
        else if (sunlight === '1' && water === '2' && pets === '2'){
            noResults.style.display = 'none'
            titleList.style.display = 'block'
            plantsList.style.display = 'block'
            combination4.style.display = 'block'
        } 
        // COMBINATION 5
        else if (sunlight === '1' && water === '1' && pets === '2'){
            noResults.style.display = 'none'
            titleList.style.display = 'block'
            plantsList.style.display = 'block'
            combination5.style.display = 'block'
        }
        else {
            titleList.style.display = 'none'
            noResults.style.display = 'block'
        }
    }

    dropdownSunlight.addEventListener('change', showCombination)
    dropdownWater.addEventListener('change', showCombination)
    dropdownPets.addEventListener('change', showCombination)
})