export default {
    data() {
        return {
            mouseOver: false,
            clicked: false
        };
    },
    render(h) {
        const self = this;
        return ('div', {
            class: {
                'special-square': true,
                '--toCircle': self.mouseOver,
                    '--toBlue': self.clicked
            },
            on: {
                click: () => {
                    self.clicked = !self.clicked
                },
                mouseover: () => {
                    self.mouseOver = true
                },
                mouseout: () => {
                    self.mouseOver = false
                }
            }
        })
    }
};