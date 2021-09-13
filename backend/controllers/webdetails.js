import Webdetails from '../models/webdetails.js';

export const getWebdetails = async (req, res) => {
    try {
        const webdetails = await Webdetails.find()
        res.status(200).json({ status: true, data: webdetails })
    } catch (error) {
        res.status(404).json({ status: false, message: error.message })
    }
}

export const createWebdetails = async (req, res) => {
    console.log('req.body', req.body)
    const webdetails_detaiils = req.body
    try {
        const newWebdetail = new Webdetails(webdetails_detaiils)
        await newWebdetail.save()
        res.status(200).json({ status: true, message: 'Website details saved successfully' })
    }
    catch (error) {
        console.log('Err', error.message)
        res.status(404).json({ message: error.message })
    }
}