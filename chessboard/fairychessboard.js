var htmlinner = `<div style="width:42rem;height:42rem;display:block;">`;
for (var i = 0; i < 14; i++) {
    htmlinner += `<div style="display:flex;width:42rem;height:3rem;" class="board_row">`;
    for (var i1 = 0; i1 < 14; i1++) {
        var square = 'abcdefghijklmn'.split('')[i1] + '87654321'.split('')[i];
        var specialhtmlinner = ((i % 2 == 1 && i1 % 2 == 1) || (i % 2 == 0 && i1 % 2 == 0)) ? `<div style="background:#e9e0ef;width:3rem;height:3rem;" data-square="${square}" class="board_square"></div>` : `<div style="background:radial-gradient(#888888,#101527);width:3rem;height:3rem;" data-square="${square}" class="board_square"></div>`;
        htmlinner += ([0, 1, 2, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 39, 40, 41, 154, 155, 156, 165, 166, 167, 168, 169, 170, 179, 180, 181, 182, 183, 184, 193, 194, 195].includes(i * 14 + i1)) ? `<div style="background:#80808040;width:3rem;height:3rem;" data-square="${square}" class="board_square"></div>` : specialhtmlinner;
    }
    htmlinner += `</div>`;
}
htmlinner += `</div>`;

var board = {
    chess_pieces: {
        chancelor: `<!--찬슬러-->`,
        archbishop: `아치비숍`,
        amazon: `아마존`,
        centaur: `제네랄(혹은 켄타우로스)`,
        king: `킹`,
        queen: `퀸`,
        _1_queen: `1점짜리 퀸`,
        bishop: `비숍`,
        knight: `나이트`,
        rook: `룩`,
        pawn: `폰`,
    },
    chess_pieces_short: {
        E: `chancelor`,
        H: `archbishop`,
        M: `centaur`,
        A: `amazon`,
        P: `pawn`,
        N: `knight`,
        B: `bishop`,
        R: `rook`,
        Q: `queen`,
        D: `_1_queen`,
        K: `king`,
    },
    short_pieces: {},
    board_squares: {},
    board: [],
    html_board: null,
    create_board: function () {
        for (var i = 0; i < Object.keys(this.chess_pieces_short).length; i++) {
            this.short_pieces[Object.keys(this.chess_pieces_short)[i]] = this.chess_pieces[Object.keys(this.chess_pieces_short)[i]];
        }
        for (var i0 = 0; i0 < 14; i0++) {
            this.board[i0] = [];
            for (var i1 = 0; i1 < 14; i1++) {
                var square = 'abcdefghijklmn'.split('')[i1] + '87654321'.split('')[i0];
                this.board[i0][i1] = square;
                this.board_squares[square] = { piece: null }
            }
        }
        this.htmlinner = htmlinner;
        var html_board = document.createElement("div");
        html_board.innerHTML = this.htmlinner;
        this.html_board = html_board;
        return this.html_board;
    },
    set_piece_pos: function (piece, pos) {
        /*if (!(function () {
            var rtv = [];
            for (var i0 = 0; i0 < 14; i0++) {
                for (var i1 = 0; i1 < 14; i1++) {
                    var square = 'abcdefghijklmn'.split('')[i1] + '87654321'.split('')[i0];
                    rtv.push(square);
                }
            }
            return rtv;
        })().includes(pos)) {
            return null || false;
        }*/
        if (typeof this.board_squares[pos] !== 'object' || this.board_squares[pos] === null) {
            return null || false;
        }
        this.board_squares[pos].piece = piece;
        return this.board_squares[pos].piece || true;
    },
    set_html_board: function (textfunc) {
        if (!(this.html_board instanceof HTMLElement)) {
            return null || false;
        }
        for (var i = 0; i < this.board.length; i++) {
            for (var i0 = 0; i0 < this.board[i].length; i0++) {
                if (this.board_squares[this.board[i][i0]].piece !== null) {
                    var new_img = new Image(this.html_board.querySelector(`.board_square[data-square="${this.board[i][i0]}"]`).offsetWidth * 0.8, this.html_board.querySelector(`.board_square[data-square="${this.board[i][i0]}"]`).offsetHeight * 0.8);
                    var new_text = document.createElement("span");
                    new_text.innerHTML = (typeof textfunc === 'function') ? textfunc(this.board_squares[this.board[i][i0]].piece) : this.board_squares[this.board[i][i0]].piece;
                    this.html_board.querySelector(`.board_square[data-square="${this.board[i][i0]}"]`).appendChild(new_text);
                }
            }
        }
        this.html_board.querySelectorAll(`.piece_colour[data-piece-colour]`).forEach((el, idx, parel) => {
            var colour = el.getAttribute('data-piece-colour');
            var colours = {
                r: '#a00808',
                g: '#08a008',
                b: '#0808a0',
                y: '#505008',
            }
            el.style.color = colours[colour];
        });
        return this.html_board || true;
    },
    colours: {
        r: '#a00808',
        g: '#08a008',
        b: '#0808a0',
        y: '#505008',
    },
    pieces_img: {
        E: `./찬슬러.svg`,
        H: `./아치비숍.svg`,
        M: `./켄타우로스.svg`,
        A: `./아마존.svg`,
        Q: `./퀸.svg`,
        R: `./룩.svg`,
        B: `./비숍.svg`,
        K: `./킹.svg`,
        N: `./나이트.svg`,
        P: `./폰.svg`,
        D: `./퀸1.svg`,
    },
    set_from_notation: function (notation) {
        if (typeof notation !== 'string') {
            return null || false;
        }
        var notation0 = notation.split('/');
        var newnotation = new Array(notation0.length);
        newnotation.forEach((val, idx, arr) => {
            arr[idx] = [];
        });
        notation0.forEach((val, idx, arr) => {
            newnotation[idx] = [];
            val.split(',').forEach((val1, idx1, arr1) => {
                if (isNaN(Number(val1))) {
                    newnotation[idx].push(val1);
                } else {
                    for (var i0 = 0; i0 < Number(val1); i0++) {
                        newnotation[idx].push(null);
                    }
                }
            });
        });
        newnotation.forEach((val, idx, arr) => {
            if (Array.isArray(val)) {
                val.forEach((val1, idx1, arr1) => {
                    if (val1 !== null && Object.keys(this.chess_pieces).includes(this.chess_pieces_short[val1[0]])) {
                        this.set_piece_pos({ piece: this.chess_pieces[this.chess_pieces_short[val1[0]]], colour: val1[1], piecename: val1[0] }, 'abcdefghijklmn'.split('')[idx1] + '87654321'.split('')[idx]);
                    }
                });
            }
        });
        //return this.set_html_board((param0) => { return `<!--<span class="piece_colour" data-piece-colour="${param0.colour}">${param0.piece}(${param0.colour})</span><img src="${this.pieces_img[param0.piece]}" style="">--><div style="height:80%;background:${this.colours[param0.colour]};-webkit-mask-image:url(${this.pieces_img[param0.piecename]});mask-image:url(${this.pieces_img[param0.piecename]});mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;"></div>` });
        return this.set_html_board((param0) => { return `<div style="height:100%;background:${this.colours[param0.colour]};-webkit-mask-image:url(${this.pieces_img[param0.piecename]});mask-image:url(${this.pieces_img[param0.piecename]});mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;-webkit-mask-size:2rem;mask-size:2rem;"></div>`; });
    },
    doallonce(notation) {
        this.create_board();
        this.set_from_notation(notation);
        return this;
    },
}
var rulluralla = board.doallonce(`3,Eb,Nb,Hb,Kb,Qb,Hb,Nb,Eb,3/3,Rb,Mb,Bb,Ab,Ab,Bb,Mb,Rb,3/3,Pb,Pb,Pb,Pb,Pb,Pb,Pb,Pb,3/Er,Rr,Pr,8,Py,Ry,Ey/Nr,Mr,Pr,8,Py,My,Ny/Hr,Br,Pr,8,Py,By,Hy/Qr,Ar,Pr,8,Py,Ay,Ky/Kr,Ar,Pr,8,Py,Ay,Qy/Hr,Br,Pr,8,Py,By,Hy/Nr,Mr,Pr,8,Py,My,Ny/Er,Rr,Pr,8,Py,Ry,Ey/14/14/14`);
/*var chess_pieces = {
    chancelor: '찬슬러',
    archbishop: '아치비숍',
    amazon: '아마존',
    centaur: '제네랄(혹은 켄타우로스)',
    king: '킹',
    queen: '퀸',
    _1_queen: '1점짜리 퀸',
    bishop: '비숍',
    knight: '나이트',
    rook: '룩',
    pawn:'폰',
}
var chess_pieces_short = {
    E: 'chancelor',
    H: 'archbishop',
    M: 'centaur',
    A: 'amazon',
    P: 'pawn',
    N: 'knight',
    B: 'bishop',
    R: 'rook',
    Q: 'queen',
    Q1: '_1_queen',
    K:'king',
}*/