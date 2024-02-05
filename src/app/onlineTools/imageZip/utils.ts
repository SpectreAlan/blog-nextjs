interface IOption {
    quality: number
    type: string
    width?: number
    height?: number
}

function canvasDataURL(path: string, options: IOption, callback: (params: any) => any) {
    const img = new Image();
    img.src = path;
    img.onload = function () {
        let that: any = this;
        let w = that.width,
            h = that.height,
            scale = w / h;
        w = options.width || w;
        h = options.height || (w / scale);
        let quality = 0.7;
        const canvas = document.createElement('canvas');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
        const anw = document.createAttribute('width');
        anw.nodeValue = w;
        const anh = document.createAttribute('height');
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        if (options.quality && options.quality <= 1 && options.quality > 0) {
            quality = options.quality;
        }
        const base64 = canvas.toDataURL(options.type === 'image/png' ? 'image/png' : 'image/jpeg', quality)
        callback(base64);
    }
}

export function photoCompress(file: Blob, options: IOption, callback: (params: any) => any) {
    let ready = new FileReader();
    ready.readAsDataURL(file);
    ready.onload = function () {
        let path = this.result as string;
        canvasDataURL(path, options, callback)
    }
}

export function base64ToBlob(data: string) {
    const arr: string[] = data.split(',')
    const mime: string = arr[0].match(/:(.*?);/)?.[1] as string
    const str: string = atob(arr[1])
    let n: number = str.length
    let u8arr: Uint8Array = new Uint8Array(n);
    while (n--) {
        u8arr[n] = str.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}
