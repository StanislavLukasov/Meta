export default function transform(response) {
    let result = []

    if(response) {
        if(response.photos) {
            if(response.photos.photo) {
                if(Array.isArray(response.photos.photo)) {
                    response.photos.photo.map(item => {
                        if(item.url_n) {
                            result.push(item.url_n)
                        }
                    })
                }
            }
        }
    }

    return result
}
