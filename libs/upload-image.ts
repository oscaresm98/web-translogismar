import cloudinary from "./cloudinary";

export const uploadImage = async (file: File, folder: string) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;
    const result = await cloudinary.uploader.upload(dataURI, {
        resource_type: "auto",
        folder
    });
    return result;
}

export const deleteImage = async (urlImage: string, folderName: string) => {
    const nameImage = urlImage.split("/").pop()?.split(".")[0];
    const publicID = folderName + "/" + nameImage;
    return cloudinary.uploader.destroy(publicID);
}