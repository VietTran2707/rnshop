import { dataSofa, dataChair, allData, whishData } from "./fake_data";

const getAllProduct = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(allData)
        }, 200)
    })
}

const getProductCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            switch (category) {
                case 'Sofas':
                    resolve(dataSofa)
                    break;

                case 'Chairs':
                    resolve(dataChair)
                    break

                default:
                    break;
            }
        }, 200)
    })
}

const getWhishList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(whishData)
        }, 200)
    })
}

const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(allData[allData.findIndex(item => item.id === id)])
        }, 200)
    })
}

export default {
    getAllProduct,
    getProductCategory,
    getWhishList,
    getProduct
}