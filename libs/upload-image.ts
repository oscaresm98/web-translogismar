import cloudinary from "./cloudinary";

export const uploadImage = async (file: File, folder: string) => {
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);
    return new Promise(async (resolve, reject) => {
        await cloudinary.uploader.upload_stream({
            resource_type: "auto",
            folder
        }, async (err, result) => {
            if (err) {
                return reject(err.message);
            }
            return resolve(result)
        }).end(bytes);
    })
}

export const deleteImage = async (urlImage: string, folderName: string) => {
    const nameImage = urlImage.split("/").pop()?.split(".")[0];
    const publicID = folderName + "/" + nameImage
    return new Promise(async (resolve, reject) => {
        try {
            const result = await cloudinary.uploader.destroy(publicID)
            return resolve(result)
        } catch (error: any) {
            reject(new Error(error.message))
        }
    })

}