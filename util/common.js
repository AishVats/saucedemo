class Common {

    /**
    * select option from Select dropdown using visible text
    *
    * @param {element} selectElement
    * @param {string} text
    */
    // Note: We can also have an element class for Select dropdowns having all the methods there to access it, this in case when same select element is being used over multiple pages
    async selectDropdownbyText(selectElement, text) {
        await selectElement.click();
        await selectElement.element(by.xpath('//*[normalize-space()="' + text + '"]')).click();
    }

    /**
     * sort data in a particular(asc/desc) order
     *
     * @param {Array} data
     * @param {string} order
     * @return {Array} 
     */
    async sortData(data, order) {
        let sortedData;
        if (order.includes('asc')) {
            if (typeof data[0] == 'string') {
                sortedData = await data.sort();
            }
            else if (typeof data[0] === 'number') {
                sortedData = await data.sort(function (a, b) { return a - b });
            }
            else { console.log("Array values datatype is not string or number"); }
        } else if (order.includes('desc')) {
            if (typeof data[0] === 'string') {
                await data.sort();
                sortedData = await data.reverse();
            }
            else if (typeof data[0] == 'number') {
                sortedData = await data.sort(function (a, b) { return b - a });

            }
            else { console.log("Array values datatype is not string or number"); }
        } else {
            console.log('Warning: Order can be either asc or desc');
        }
        return await sortedData;

    }
}
export default new Common();