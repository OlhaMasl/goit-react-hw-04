import axios from "axios";

export const fetchImages = async (query, page=1) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID yt5lj5TeieHgBwsXTJkdTGG1kyvDllmEJpX4pQ1H2ZQ",
        },
        params: {
            query,
            page,
            per_page: 15,
            orientation: 'landscape',
        }
    });
    return res.data;
};