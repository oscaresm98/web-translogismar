import cloudinary from "./cloudinary";

export const uploadImage = async (file: File, folder: string) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;
    try {
        const result = await cloudinary.uploader.upload(dataURI, {
            resource_type: "auto",
            folder
        });
        return result;
    } catch (cloudinaryError: any) {
        if (process.env.NODE_ENV === 'production') {
            return { secure_url: "/img/logoMundo.svg" };
        } else {
            throw {
                message: `Error de Cloudinary: ${cloudinaryError.message}`,
                details: cloudinaryError
            };
        }
    }

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