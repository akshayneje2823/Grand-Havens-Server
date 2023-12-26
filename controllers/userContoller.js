import UserModel from './../models/User.js';

export const signUp = async (req, res, next) => {

    const { email, password, phone } = req.body

    console.log(email)

    try {

        const user = await UserModel.create({
            email,
            password,
            phone
        })

        await user.save()
        res.status(200).json({
            success: true, user
        })

    } catch (error) {
        next(error)
    }

} 