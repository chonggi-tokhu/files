
function toDataURL(blob, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        callback(reader.result);
    }
    reader.readAsDataURL(blob);
}
function video_editor(el, { width, height, frames }) {
    this.el = (el instanceof HTMLVideoElement) ? el : (typeof el === "string") ? (() => { var videoels = document.getElementsByTagName("video"); for (var i = 0; i < videoels; i++) { if (videoels[i].id === el) { return videoels[i]; } } return null; })() : null;
    if (this.el === null) {
        var n_v_el = document.createElement("video");
        this.el = document.body.appendChild(n_v_el);
        n_v_el = null;
    }
    this.width = (typeof width === 'number' && !isNaN(width)) ? width : 1280;
    this.height = (typeof height === 'number' && !isNaN(height)) ? height : 720;
    this.el.width = this.width;
    this.el.height = this.height;
    this.fps = (typeof frames === "number" && !isNaN(frames)) ? frames : 25;
    this.frames = [];
    var n_canv_el = document.createElement("canvas");
    n_canv_el.width = 1280;
    n_canv_el.height = 720;
    this.canv_el = this.el.parentElement?.appendChild(n_canv_el);
    if (!(this.canv_el instanceof HTMLCanvasElement)) {
        this.canv_el = document.body.appendChild(n_canv_el);
    }
    var n_canv_el2 = document.createElement("canvas");
    n_canv_el2.width = 1280;
    n_canv_el2.height = 720;
    this.canv_el2 = this.el.parentElement?.appendChild(n_canv_el2);
    if (!(this.canv_el2 instanceof HTMLCanvasElement)) {
        this.canv_el2 = document.body.appendChild(n_canv_el);
    }
    this.canvas2 = this.canv_el2.getContext("2d");
    n_canv_el = null;
    n_canv_el2 = null;
    this.canvas = this.canv_el.getContext("2d");
    this.paused = false;
    this.encoded = '';
    this.recorder = null;
}
video_editor.prototype = {
    timer_callback: function (idx, { chroma_key, xor }) {
        if (this.el.paused || this.el.ended || this.paused) {
            return;
        }
        this.put_frames({ chroma_key: chroma_key, xor: xor, }, idx);
        setTimeout(() => {
            this.timer_callback(idx + 1, { chroma_key: chroma_key, xor: xor });
        }, 1000 / this.fps);
    },
    do_load: function () {
        this.el.addEventListener("play", (ev) => {
            this.timer_callback(0, { xor: null, chroma_key: null });
        });
    },
    editor: {
        chroma_key: function (frame, { colour_r, colour_g, colour_b }) {
            if (!(frame instanceof ImageData)) {
                return new ImageData();
            }
            var l = frame.data.length / 4;
            for (var i = 0; i < l; i++) {
                if (frame.data[i * 4 + 0] === colour_r && frame.data[i * 4 + 1] === colour_g && frame.data[i * 4 + 2] === colour_b) {
                    frame.data[i * 4 + 0] = null;
                    frame.data[i * 4 + 1] = null;
                    frame.data[i * 4 + 2] = null;
                }
            }
            return frame;
        },
        xor: function (frame, frame2) {
            if (!(frame instanceof ImageData)) {
                return new ImageData();
            }
            if (!(frame2 instanceof ImageData)) {
                return new ImageData();
            }
            var l = frame.data.length / 4;
            for (var i = 0; i < l; i++) {
                if (frame.data[i * 4 + 0] === frame2.data[i * 4 + 0] && frame.data[i * 4 + 1] === frame2.data[i * 4 + 1] && frame.data[i * 4 + 2] === frame2.data[i * 4 + 2]) {
                    frame.data[i * 4 + 0] = '128';
                    frame.data[i * 4 + 1] = '128';
                    frame.data[i * 4 + 2] = '128';
                }
            }
            return frame;
        }
    },
    put_frames: function ({ chroma_key, xor }, idx) {
        this.canvas.drawImage(this.el, 0, 0, this.width, this.height);
        var frame = this.canvas.getImageData(0, 0, this.width, this.height);
        if (typeof idx !== 'number' || isNaN(idx)) {
            return frame;
        }
        this.frames.splice(idx);
        if (typeof chroma_key === "object" && chroma_key !== null) {
            frame = this.editor.chroma_key(frame, chroma_key);
        }
        if (xor instanceof ImageData) {
            frame = this.editor.xor(frame, xor);
        }
        this.canvas.putImageData(frame, 0, 0);
        var img = new Image(this.width, this.height);
        img.src = this.canv_el.toDataURL('image/png');
        this.canvas2.drawImage(img, 0, 0, this.width, this.height);
        this.frames[idx] = frame;
        return frame;
    },
    apply_to_video: function ({ chroma_key, xor }, idx) {
        var data = [];
        this.recorder = new MediaRecorder(this.canv_el2.captureStream(this.fps), { mimeType: 'video/webm' });
        this.recorder.ondataavailable = (ev) => {
            if (ev.data && ev.data.size) {
                data.push(ev.data);
                console.log(data);
            }
        }
        this.recorder.onstop = (ev) => {
            var n_blob = new Blob(data, { type: 'video/webm' });
            console.log(n_blob);
            //reencode(new File([n_blob], "myfile.webm", { type: "video/webm" }));
            //reencode(document.querySelector('input[type=file]').files[0])
            //reencode(n_blob);
            toDataURL(n_blob, (url) => {
                url = url.replace('data:video/webm;base64,', '');
                //console.log(url);

                console.log(new File([url], "myfile.webm", { type: "video/webm" }));
                document.getElementsByTagName("input")[0].files[0] = new File([url], "myfile.webm", { type: "video/webm" });
                document.getElementById("myvideo").src = URL.createObjectURL(new Blob([document.getElementsByTagName("input")[0].files[0]], { type: "video/" + document.getElementsByTagName("input")[0].files[0].name.split('.')[document.getElementsByTagName("input")[0].files[0].name.split('.').length - 1] }));
                reencode(document.getElementsByTagName("input")[0].files[0]);
                //this.download_video();
            });
        }
        this.el.play();
        this.timer_callback(0, { chroma_key: chroma_key, xor: xor, });
        this.recorder.start();
    },
    download_video: function () {
        var data = [];
        this.recorder = new MediaRecorder(this.canv_el2.captureStream(this.fps), { mimeType: 'video/webm' });
        this.recorder.ondataavailable = (ev) => {
            if (ev.data && ev.data.size) {
                data.push(ev.data);
                console.log(data);
            }
        }
        this.recorder.onstop = (ev) => {
            var n_blob = new Blob(data, { type: 'video/webm' });
            console.log(n_blob);
            //reencode(new File([n_blob], "myfile.webm", { type: "video/webm" }));
            //reencode(document.querySelector('input[type=file]').files[0])
            //reencode(n_blob);
            toDataURL(n_blob, function (url) {
                url = url.replace('data:video/webm;base64,', '');
                //console.log(url);

                console.log(new File([url], "myfile.webm", { type: "video/webm" }));
                document.getElementsByTagName("input")[0].files[0] = new File([url], "myfile.webm", { type: "video/webm" });
                document.getElementById("myvideo").src = URL.createObjectURL(new Blob([document.getElementsByTagName("input")[0].files[0]], { type: "video/" + document.getElementsByTagName("input")[0].files[0].name.split('.')[document.getElementsByTagName("input")[0].files[0].name.split('.').length - 1] }));
                reencode(document.getElementsByTagName("input")[0].files[0]);
            });
        }
        this.el.play();
        this.timer_callback(0, { chroma_key: null, xor: null, });
        this.recorder.start();
        setTimeout(() => {
            this.recorder.stop();
        }, 20000);
    },
    stop_video: function () {
        if (this.recorder !== null) {
            this.recorder.stop();
        }
    },
    stop: function () {
        this.paused = !this.paused;
    }
}